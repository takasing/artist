'use strict'

var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../../config');
var browserSync = require('browser-sync');

gulp.task('watch', function() {
  config.watch = true;
  gulp.watch(config.dirs.src + "/js/**", function() {
    gulp.start(['webpack']);
  });
  gulp.watch(config.dirs.src + "/style/**", function() {
    gulp.start(['styles']);
  });
  gulp.watch('./public/*.html', function() {
    gulp.start(['html']);
  });
});
