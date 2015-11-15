"use strict";

var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var pngquant  = require("imagemin-pngquant");
var config = require("../../config");

gulp.task("imagemin", function () {
    return gulp.src(config.image.src)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.image.dest));
});
