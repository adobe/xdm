const assert = require("assert");
const fs = require("fs");
const $ = require("shelljs");

// Allowlist duplicates that are intentionally shared across contexts
// If these are resolved in the repo later, remove from the allowlist
const allowedDuplicateTitles = new Set([
  "IAB TCF 2.0 Consent Details",
  "Segment Membership Details"
]);

describe("Unique titles across field group schemas", () => {
  it("All field group titles are unique (except allowlisted)", () => {
    const fieldgroupSchemas = $.find("components/fieldgroups").filter((name) => {
      return name.match(/.*\.schema\.json$/);
    });

    const titleToFiles = new Map();

    fieldgroupSchemas.forEach((schemaPath) => {
      try {
        const raw = fs.readFileSync(schemaPath, "utf8");
        const json = JSON.parse(raw);
        if (json && typeof json.title === "string" && json.title.trim().length > 0) {
          const title = json.title.trim();
          const arr = titleToFiles.get(title) || [];
          arr.push(schemaPath);
          titleToFiles.set(title, arr);
        }
      } catch (e) {
        // Skip unreadable/invalid files in this test; other tests will catch schema validity
      }
    });

    const duplicates = [];
    for (const [title, files] of titleToFiles.entries()) {
      if (files.length > 1 && !allowedDuplicateTitles.has(title)) {
        duplicates.push({ title, files });
      }
    }

    const messageLines = [
      "Duplicate field group titles found:",
      ...duplicates.map((d) => `- ${d.title}:\n    ${d.files.join("\n    ")}`),
    ];

    assert.strictEqual(
      duplicates.length,
      0,
      messageLines.join("\n")
    );
  });
});


