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
function checkForChanges(data, prop) {
    const lines = data.split('\n');
    let previousValue = null;
    let currentValue = null;
    let foundDeletion = false;
    let errorFound = false;

    lines.forEach(line => {
        line = normalizeLine(line);

        if (line.startsWith('<') && line.includes(`"${prop}":`)) {
            previousValue = extractValue(line); // Store the old value from the deletion line
            foundDeletion = true;
        } else if (line.startsWith('>') && line.includes(`"${prop}":`)) {
            currentValue = extractValue(line); // Store the new value from the addition line

            if (foundDeletion && previousValue !== currentValue) {
                console.error(`Error: PR contains disallowed changes to ${prop} property in the diff section!`);
                errorFound = true;
                foundDeletion = false;
                previousValue = null;
                currentValue = null;
            } else if (foundDeletion && previousValue === currentValue) {
                foundDeletion = false;
                previousValue = null;
                currentValue = null;
            }
        }
    });

    if (foundDeletion && previousValue !== null) {
        console.error(`Error: PR contains disallowed changes to ${prop} property!`);
        errorFound = true;
    }

    return errorFound;
}

function processDiffLog(data) {
    const fileSections = data.split(/diff -r \S+ \S+\n/).slice(1);
    let anyErrorFound = false;

    fileSections.forEach(section => {
        restrictedProps.forEach(prop => {
            if (checkForChanges(section, prop)) {
                anyErrorFound = true;
            }
        });
    });

    if (!anyErrorFound) {
        console.log("No disallowed changes detected.");
    } else {
        process.exit(1); // Exit with error status if changes were detected
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
