'use strict'

var gulp = require('gulp')
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var cssnext = require('gulp-cssnext')
var config = require('../../config')
var gulpif = require('gulp-if')
var browserSync = require('browser-sync');

gulp.task('css:pc', function() {
  gulp.src(config.cssnext.src.pc)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(cssnext({
      compress: true
    }))
    .pipe(gulp.dest(config.cssnext.dest.pc))
    .pipe(browserSync.reload({stream: true}))
    ;
})

gulp.task('css:sp', function() {
  gulp.src(config.cssnext.src.sp)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(cssnext({
      compress: true
    }))
    .pipe(gulp.dest(config.cssnext.dest.sp))
    .pipe(browserSync.reload({stream: true}))
    ;
})
