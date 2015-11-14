'use strict'

var gulp = require('gulp');

gulp.task('default', ['build', 'watch', 'browser-sync'])
gulp.task('build', ['webpack', 'css']);
