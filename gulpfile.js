'use strict';

const AJV = require('ajv');
const gulp = require('gulp');
const fg = require('fast-glob');

const ajv = new AJV();

gulp.task('ajv-validate', () => {
  const schemas = fg.sync(['schemas/**/*.json'], { absolute: true });
  // Add to cache first
  // eslint-disable-next-line import/no-dynamic-require
  schemas.forEach(schema => ajv.addSchema(require(schema)));

  // Validate that all schemas work properly with refs
  // eslint-disable-next-line import/no-dynamic-require
  schemas.forEach(schema => ajv.compile(require(schema)));
});

gulp.task('default', ['ajv-validate']);
