### xed-validation.sh

The xed-validation.sh is the main script for xed conversion/validation and calls the below scripts in order.

1: `xed-master-gen.sh`: Xed generation of master branch for validation of incremental changes.

2: `cleaninput.sh`: Remove unrelated schemas from creative side and json examples etc.

3: `uberSchemaGen.js`, `UberIndustrySchemaGen.js`: Generate the uber schemas by combining the class with mixins.

4: `schemaLocGen.js`: Create map for schema id and physical location for reference/lookup purpose.

5: `tempGen.js`, `tempConverter.js`: Remove meta:* fields, Add meta:xdmType etc. $ref preprocess.

6: `xedGen.js`, `xedConverter.js`: Main xed conversion process to transform properties with uri and namespace to nested structures.

7: `tag4xed.js`: Add property tags for protobuf creation for analytics.

8: `compile.sh`: Validate changed json schemas by using ajv validator.
