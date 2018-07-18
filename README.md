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
 *
 *  @param {String} schema - schema from the schemas folder
 *  @param {Object} object - input testing subject
 *  @return {Object} resolve w/validated object
 *  @throws {ValidationError}
 */
function validate(schema, object, options)
```

```javascript
/**
 *  Async validate an object by first resolving the corresponding schema by schemaId
 *
 *  @param {String} schema - schema from the schemas folder
 *  @param {Object} object - input testing subject
 *  @return {Promise->Object} resolve w/validated object Promise
 *  @throws {ValidationError}
 */
function validate(schema, object, options)
```
