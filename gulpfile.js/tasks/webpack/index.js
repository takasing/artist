'use strict'

var gulp = require('gulp');
var config = require('../../config');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var webpack = require('gulp-webpack');
var gulpif = require('gulp-if')
var uglify = require('gulp-uglify')
var browserSync = require('browser-sync');

gulp.task('webpack', function() {
  gulp.src(config.webpack.entry)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(webpack(config.webpack))
    .pipe(gulpif(!config.watch, uglify()))
    .pipe(gulp.dest(config.dirs.dest))
    .pipe(browserSync.reload({stream: true}))
    ;
});
