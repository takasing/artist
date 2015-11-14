'use strict'

var gulp = require('gulp')
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var cssnext = require('gulp-cssnext')
var config = require('../../config')
var gulpif = require('gulp-if')
var browserSync = require('browser-sync');

gulp.task('styles', function() {
  gulp.src(config.cssnext.src)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(cssnext({
      compress: true
    }))
    .pipe(gulp.dest(config.cssnext.dest))
    .pipe(browserSync.reload({stream: true}))
    ;
});
