'use strict'

var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint:js', function() {
  return gulp.src(['src/js/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
