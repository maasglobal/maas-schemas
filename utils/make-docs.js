'use strict';

const path = require('path');
const ajv = require('../index').init();
const registry = require('../registry.js');

// Internal dependency of @adobe/jsonschema2md
// eslint-disable-next-line import/no-extraneous-dependencies
const i18n = require('i18n');

// eslint-disable-next-line import/no-extraneous-dependencies
const Schema = require('@adobe/jsonschema2md').schema;

// Replicate cli or else it throws error
const i18nPath = 'node_modules/@adobe/jsonschema2md/lib/locales';
i18n.configure({
  // setup some locales - other locales default to en silently
  locales: ['en'],
  // where to store json files - defaults to './locales' relative to modules directory
  directory: i18nPath,
  defaultLocale: 'en',
});

// Parse JSON schema recursively
function createRefLink(schema, schemaPathMap, property, ref, breadcrumbs) {
  if (ref.startsWith('#/definitions/')) {
    const file = path.basename(schema.filePath);
    property.$linkVal = ref.substring('#/definitions/'.length);
    property.$linkPath = file.replace('.json', '.md');
    //console.info("Generating internal link " + property.$linkVal + ", " + property.$linkPath + " in " + breadcrumbs)
  } else if (ref.startsWith('http://')) {
    let schemaFile = ref;
    let schemaDefinition;
    if (ref.indexOf('#/definitions') > 0) {
      schemaFile = ref.substring(0, ref.indexOf('#/definitions'));
      schemaDefinition = ref.substring(ref.indexOf('#/definitions') + 1);
    }

    const refSchema = schemaPathMap[schemaFile];
    if (refSchema) {
      const file = path.basename(refSchema.filePath);
      property.$linkVal = schemaDefinition
        ? schemaDefinition.substring(schemaDefinition.lastIndexOf('/') + 1)
        : ref.substring(ref.lastIndexOf('/') + 1).replace('.json', '');
      property.$linkPath = file.replace('.json', '.md');
      //console.info("Generating external link " + property.$linkVal + ", " + property.$linkPath + " in " + breadcrumbs)
    } else {
      // eslint-disable-next-line no-console
      console.warn('Undefined absolute reference: ' + ref);
    }
  } else {
    // eslint-disable-next-line no-console
    console.warn('Cant handle ref: ' + ref + ' in ' + breadcrumbs);
  }
}

function resolveRef(schema, schemaPathMap, o, breadcrumbs) {
  if (o.definitions) {
    Object.keys(o.definitions).forEach(def => {
      resolveRef(schema, schemaPathMap, o.definitions[def], breadcrumbs);
    });
  }

  if (o.properties) {
    Object.keys(o.properties).forEach(name => {
      const prop = o.properties[name];
      resolveRef(schema, schemaPathMap, prop, breadcrumbs + '.properties.' + name);
    });
  }

  if (o.$ref) {
    createRefLink(schema, schemaPathMap, o, o.$ref, breadcrumbs);
  }

  if (o.items && o.items.$ref) {
    createRefLink(schema, schemaPathMap, o.items, o.items.$ref, breadcrumbs + '.items');
  }

  if (o.oneOf) {
    o.oneOf.forEach(oo => resolveRef(schema, schemaPathMap, oo, breadcrumbs + '.oneOf[].'));
  }

  if (o.type === 'array') {
    if (o.items) {
      resolveRef(schema, schemaPathMap, o.items, breadcrumbs + '.items');
    } else {
      // eslint-disable-next-line no-console
      console.warn('Array without item type: ' + breadcrumbs);
    }
  }

  if (o.allOf) {
    o.allOf.forEach(oo => resolveRef(schema, schemaPathMap, oo, breadcrumbs + '.allOf[].'));
  }
}

async function createMarkdown() {
  const schemaPath = path.resolve('./schemas');
  const schemas = Object.entries(registry).map(([filePath, jsonSchema]) => ({
    filePath: path.resolve(filePath),
    jsonSchema,
  }));

  const schemaPathMap = {};
  schemas.forEach(schema => {
    let key = String(schema.jsonSchema.$id);
    if (key.endsWith('.json#')) {
      key = key.substring(0, key.length - 1);
    }

    schemaPathMap[key] = schema;
    // FIXME: Not sure what goes here
    schema.jsonSchema['meta:status'] = 'Develop';
    // Update title for README.md, if it is missing
    if (!schema.jsonSchema.title) {
      schema.jsonSchema.title = path.basename(schema.filePath).replace('.json', '');
    }
  });

  schemas.forEach(schema => {
    const relative = schema.filePath.substring(schemaPath.length + 1);
    resolveRef(schema, schemaPathMap, schema.jsonSchema, '[' + relative + ']', true);
  });

  const schemaMap = schemaPathMap;
  const outDir = path.resolve('./docs');
  const schemaDir = outDir;
  const metaElements = {};
  const readme = true;
  const docs = {};

  Schema.setAjv(ajv);
  Schema.setSchemaPathMap(schemaPathMap);
  Schema.process(schemaMap, schemaPath, outDir, schemaDir, metaElements, readme, docs);
}

createMarkdown();
