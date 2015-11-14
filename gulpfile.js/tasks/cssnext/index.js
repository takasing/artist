var gulp = require('gulp')
var plumber = require('gulp-plumber');
var cssnext = require('gulp-cssnext')
var config = require('../../config')
var gulpif = require('gulp-if')

gulp.task('styles', function() {
  gulp.src(config.cssnext.src)
    .pipe(plumber())
    .pipe(cssnext({
      compress: true
    }))
    .pipe(gulp.dest(config.cssnext.dest))
    ;
});
