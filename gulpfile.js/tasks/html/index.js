'use strict'

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('html', function () {
  gulp.src('./public/*.html')
    .pipe(browserSync.reload({stream: true}))
});
