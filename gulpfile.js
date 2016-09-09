'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const jsonlint = require('gulp-jsonlint');
const jsonclint = require('gulp-json-lint');
const eslint = require('gulp-eslint');
const bundle = require('gulp-jsonschema-bundle');

const jsoncFiles = ['.eslintrc']; // json with comments
const jsonFiles = ['schemas/**/*.json'];
const jsFiles = ['*.js', 'test/**/*.js'];

gulp.task('jsonclint', () => {
  // Unfortunately does not support failOnError at the moment
  // See https://github.com/panuhorsmalahti/gulp-json-lint/issues/2
  return gulp.src(jsoncFiles)
    .pipe(jsonclint({ comments: true }))
    .pipe(jsonclint.report('verbose'));
});

gulp.task('jsonlint', () => {
  return gulp.src(jsonFiles)
    .pipe(jsonlint())
    .pipe(jsonlint.reporter())
    .pipe(jsonlint.failOnError());
});

gulp.task('eslint', () => {
  return gulp.src(jsFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('bundle-schemas', () => {
  return gulp.src('./schemas/**/*.json')
      .pipe(bundle())
      .pipe(gulp.dest('prebuilt'));
});

gulp.task('test', ['validate'], () => {
  return gulp.src('./test/test.js', { read: false })
    .pipe(mocha());
});

gulp.task('validate', ['jsonclint', 'jsonlint', 'eslint']);

gulp.task('watch', () => {
  gulp.watch([].concat(jsonFiles, jsoncFiles, jsFiles), ['test', 'bundle-schemas']);
});

gulp.task('default', ['test', 'bundle-schemas']);
