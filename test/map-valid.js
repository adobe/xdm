const assert = require("assert");
const fs = require("fs");
const $ = require("shelljs");

function assertValidMaps(schema, location = "#") {
  if (!schema || typeof schema !== "object") {
    return;
  }
  if (Array.isArray(schema)) {
    schema.forEach((item, index) => {
      assertValidMaps(item, location + "/" + index);
    });
    return;
  }

  if (schema["meta:xdmType"] === "map") {
    assert.strictEqual(
      schema.type,
      "object",
      location + ': an XDM map must have type "object"'
    );
    const values = schema.additionalProperties;
    assert(
      values && typeof values === "object" && !Array.isArray(values),
      location +
        ": an XDM map must define a value schema in additionalProperties"
    );
    assert(
      (typeof values.type === "string" &&
        ["string", "number", "integer", "boolean", "object", "array"].includes(
          values.type
        )) ||
        (typeof values.$ref === "string" && values.$ref.length > 0),
      location +
        ": map additionalProperties must declare a concrete type or a non-empty $ref"
    );
  }

  Object.keys(schema).forEach(keyword => {
    if (
      ["examples", "default", "enum", "const", "meta:enum"].includes(keyword)
    ) {
      return;
    }

    const child = schema[keyword];
    if (
      [
        "definitions",
        "$defs",
        "properties",
        "patternProperties",
        "dependencies",
        "dependentSchemas"
      ].includes(keyword)
    ) {
      // Dictionary keys are schema names, not keywords to skip.
      Object.keys(child || {}).forEach(name => {
        assertValidMaps(child[name], location + "/" + keyword + "/" + name);
      });
    } else {
      assertValidMaps(child, location + "/" + keyword);
    }
  });
}

describe("XDM map validation regressions", () => {
  function map(additionalProperties) {
    return {
      type: "object",
      "meta:xdmType": "map",
      additionalProperties
    };
  }

  [
    true,
    false,
    undefined,
    null,
    [],
    {},
    { description: "No value type" },
    { type: ["string", "number"] },
    { type: "" },
    { $ref: "" }
  ].forEach(values => {
    it("rejects untyped map values: " + JSON.stringify(values), () => {
      assert.throws(() => assertValidMaps(map(values)), /additionalProperties/);
    });
  });

  [
    { type: "string" },
    { type: "number" },
    { type: "integer" },
    { type: "boolean" },
    { type: "object", properties: { value: { type: "string" } } },
    { type: "array", items: { type: "string" } },
    { $ref: "https://ns.adobe.com/xdm/context/segmentmembership" },
    { $ref: "#/definitions/value" },
    map({ type: "string" })
  ].forEach(values => {
    it(
      "accepts typed or referenced map values: " + JSON.stringify(values),
      () => {
        assert.doesNotThrow(() => assertValidMaps(map(values)));
      }
    );
  });

  it("rejects maps that do not have object type", () => {
    const schema = map({ type: "string" });
    schema.type = "string";
    assert.throws(() => assertValidMaps(schema), /must have type "object"/);
  });

  [
    {
      definitions: {
        arbitration: { properties: { "xdm:additionalDetails": map(true) } }
      }
    },
    { type: "array", items: map(true) },
    { type: "array", items: [map(true)] },
    { allOf: [{ properties: { details: map(true) } }] },
    { anyOf: [map(true)] },
    { oneOf: [map(true)] },
    { patternProperties: { ".*": map(true) } },
    { dependencies: { details: map(true) } },
    { if: map(true) },
    { then: map(true) },
    { else: map(true) },
    { dependentSchemas: { details: map(true) } },
    { $defs: { details: map(true) } },
    { unevaluatedProperties: map(true) },
    { prefixItems: [map(true)] },
    { customContainer: { nested: [map(true)] } },
    {
      $defs: {
        details: { if: { properties: { value: map(true) } } }
      }
    },
    map(map(true))
  ].forEach((schema, index) => {
    it("rejects a nested untyped map in schema case " + index, () => {
      assert.throws(() => assertValidMaps(schema), /additionalProperties/);
    });
  });

  it("reports the location of the invalid map", () => {
    assert.throws(
      () =>
        assertValidMaps(
          { properties: { "xdm:additionalDetails": map(true) } },
          "arbitration.schema.json#"
        ),
      /arbitration\.schema\.json#\/properties\/xdm:additionalDetails/
    );
  });

  it("ignores map-shaped example data and ordinary object schemas", () => {
    assert.doesNotThrow(() =>
      assertValidMaps({
        type: "object",
        additionalProperties: true,
        examples: [map(true)],
        default: map(true),
        enum: [map(true)],
        const: map(true),
        "meta:enum": { example: map(true) }
      })
    );
  });

  [
    "definitions",
    "$defs",
    "properties",
    "patternProperties",
    "dependencies",
    "dependentSchemas"
  ].forEach(keyword => {
    ["examples", "default", "enum", "const", "meta:enum"].forEach(name => {
      it("validates schemas named " + name + " under " + keyword, () => {
        assert.throws(
          () => assertValidMaps({ [keyword]: { [name]: map(true) } }),
          /additionalProperties/
        );
      });
    });
  });

  it("ignores data-only values inside nested schemas", () => {
    assert.doesNotThrow(() =>
      assertValidMaps({
        $defs: {
          details: {
            if: {
              examples: [{ nested: map(true) }],
              default: { nested: map(true) },
              enum: [map(true)],
              const: map(true),
              "meta:enum": { example: map(true) }
            }
          }
        }
      })
    );
  });
});

describe("Validity of XDM map declarations", () => {
  const schemas = $.find("schemas", "components", "extensions").filter(name =>
    /\.schema\.json$/.test(name)
  );

  schemas.forEach(schema => {
    it("Validating maps in " + schema, () => {
      assertValidMaps(
        JSON.parse(fs.readFileSync(schema, "utf8")),
        schema + "#"
      );
    });
  });
});
