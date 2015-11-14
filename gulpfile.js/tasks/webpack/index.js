'use strict'

var gulp = require('gulp');
var config = require('../../config');
var plumber = require('gulp-plumber');
var webpack = require('gulp-webpack');
var gulpif = require('gulp-if')
var uglify = require('gulp-uglify')

gulp.task('webpack', function() {
  gulp.src(config.webpack.entry)
    .pipe(plumber())
    .pipe(webpack(config.webpack))
    .pipe(gulpif(!config.watch, uglify()))
    .pipe(gulp.dest(config.dirs.dest))
    ;
});
