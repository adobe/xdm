#!/usr/bin/env node

const program = require('commander');
const path = require('path');
const glob = require("glob");
const Converter = require('./tempConverter');

program.version(0.1)
    .usage('[options] <api.json>')
    .option('-v, --verbose', 'verbose mode', false)
    .option('-i, --input <location>', 'location of the xdm input schemas. reads all json files recursively')
    .option('-j, --outputJson <directory>', 'output directory for xed JSON Schemas (use stdout if omitted).')
    .parse(process.argv);

if (program.args.length == 1) {
    // Load the JSON Schema source file
    var source = program.args[0];
    var converter = new Converter();
    outputToJson(program.outputJson, converter);
    converter.convert(source);
}

if (program.input) {
    var input = path.normalize(program.input);
    glob(input + "/**/*.json", function(er, files) {
        files.forEach(function(file) {
            if (file.indexOf(".example.") < 0) {
				console.log('XED conversion preprocessing---->' + file);
				var converter = new Converter();
				if (program.outputJson) {
					outputToJson(program.outputJson, converter);
					converter.convert(file.toLowerCase());
				}
			}
        });
    });
}

function outputToJson(outputJson, converter) {
    if (outputJson) var output = path.normalize(program.outputJson);
    if (output) {
        if (!path.isAbsolute(output)) {
            output = path.normalize(path.join(process.cwd(), output));
        }
        converter.on('json', (name, schema) => {
            const id = name.replace(program.input, '');
            //console.log(id);
            converter.save(output, id, schema);
        });
    } else {
        converter.on('json', (name, schema) => {
            console.log(schema);
        });
    }
}
