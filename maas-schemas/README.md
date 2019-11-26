# MaaS-schemas submodule

[![Build Status](https://travis-ci.com/maasglobal/maas-schemas.svg?token=EzGctxgsjK7P9ky3oz1p&branch=master)](https://travis-ci.com/maasglobal/maas-schemas)

This repository contains the JSON schemas used by MaaS.

## Features

- Newest JSON schemas spec + AJV
- Out of the box validator

## JavaScript API

```javascript
/**
 *  Validate an object by first resolving the corresponding schema by schemaId
 *  NOTE: It is recommended to use schema $id instead of raw schema object
 *
 *  @param {Object/String} schema/schema.$id - schema from the schemas folder. If given as a whole, will extract $id from the schema. None existed schema will be re-validate. If given only $id, will use that to reference to schema
 *  @param {Object} object - input testing subject
 *  @return {Object} resolve w/validated object
 *  @throws {ValidationError}
 */
function validate(schema, object, options)
```
