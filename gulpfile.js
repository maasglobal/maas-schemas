'use strict';

const AJV = require('ajv');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const jsonclint = require('gulp-json-lint');
const jsonlint = require('gulp-jsonlint');
const jest = require('gulp-jest').default;
const fg = require('fast-glob');

const jsoncFiles = ['.eslintrc']; // json with comments
const jsonFiles = ['schemas/**/*.json'];
const jsFiles = ['*.js', 'test/**/*.js'];

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

gulp.task('jsonclint', () => {
  // Unfortunately does not support failOnError at the moment
  // See https://github.com/panuhorsmalahti/gulp-json-lint/issues/2
  return gulp
    .src(jsoncFiles)
    .pipe(jsonclint({ comments: true }))
    .pipe(jsonclint.report('verbose'));
});

gulp.task('jsonlint', () => {
  return gulp
    .src(jsonFiles)
    .pipe(jsonlint())
    .pipe(jsonlint.reporter())
    .pipe(jsonlint.failOnError());
});

gulp.task('eslint', () => {
  return gulp
    .src(jsFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('validate', ['jsonclint', 'jsonlint', 'eslint', 'ajv-validate']);

gulp.task('test', () => {
  return gulp.src('./test').pipe(jest(require('./jest.config')));
});

gulp.task('default', ['validate', 'test']);
