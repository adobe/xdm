const fs = require('fs');

const schemaChangesLog = process.argv[2];
const restrictedProps = ["minimum", "maximum"];

// Normalize lines by removing trailing commas, spaces, and handling newlines
function normalizeLine(line) {
    return line.replace(/,\s*$/, '').trim();
}

// Extract the numeric value from the property line, if present
function extractValue(line) {
    const match = line.match(/:\s*(\d+)/);
    return match ? parseInt(match[1], 10) : null;
}

// Check for property changes within the diff data
// Function to check for changes to restricted properties in a section of diff data
function checkForChanges(data, prop) {
    const lines = data.split('\n'); // Split the diff data into individual lines for processing
    let previousValue = null; // Initialize variable to hold the previous value of the property
    let currentValue = null; // Initialize variable to hold the current value of the property
    let foundDeletion = false; // Flag to track whether a deletion line has been found
    let errorFound = false; // Flag to track whether an error has been found

    lines.forEach(line => {
        line = normalizeLine(line); // Normalize the line to remove extra commas and spaces

        // Check if the current line represents a deletion of the property
        if (line.startsWith('<') && line.includes(`"${prop}":`)) {
            previousValue = extractValue(line); // Extract and store the value from the deletion line
            foundDeletion = true; // Set the flag indicating a deletion has been found
        }
        // Check if the current line represents an addition of the property
        else if (line.startsWith('>') && line.includes(`"${prop}":`)) {
            currentValue = extractValue(line); // Extract and store the value from the addition line

            // Check if there was a preceding deletion and if the values have changed
            if (foundDeletion && previousValue !== currentValue) {
                console.error(`Error: PR contains disallowed changes to ${prop} property in the diff section!`);
                errorFound = true; // Set the error flag
                foundDeletion = false; // Reset the deletion flag
                previousValue = null; // Reset the previous value
                currentValue = null; // Reset the current value
            } else if (foundDeletion && previousValue === currentValue) {
                // If the previous value matches the current value, reset tracking variables
                foundDeletion = false;
                previousValue = null;
                currentValue = null;
            }
        }
    });

    //  check if a deletion was found without a matching addition
    if (foundDeletion && previousValue !== null) {
        console.error(`Error: PR contains disallowed changes to ${prop} property!`);
        errorFound = true; // Set the error flag
    }

    return errorFound; // Return whether an error was found
}


// Function to process the diff log data to detect disallowed changes in restricted properties
function processDiffLog(data) {
    // Split the data into sections based on the diff headers
    const fileSections = data.split(/diff -r \S+ \S+\n/).slice(1);
    let anyErrorFound = false; // Flag to track if any errors have been found across all sections

    fileSections.forEach(section => {
        restrictedProps.forEach(prop => {
            // Check each section for changes to each restricted property
            if (checkForChanges(section, prop)) {
                anyErrorFound = true; // If changes are found, set the error flag
            }
        });
    });

    // After processing all sections, determine the final outcome
    if (!anyErrorFound) {
        console.log("No disallowed changes detected."); // No errors found, log success message
    } else {
        process.exit(1); // Errors were found, exit with an error code
    }
}


// Read the diff log file and process it
fs.readFile(schemaChangesLog, 'utf8', (err, data) => {
    if (err) {
        console.error("Failed to read the schema changes log file:", err);
        process.exit(1);
    }
    processDiffLog(data);
});
