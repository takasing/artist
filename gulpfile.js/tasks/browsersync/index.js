"use strict"

var gulp = require("gulp");
var browserSync = require("browser-sync");
var config = require("../../config");

gulp.task("browser-sync",function(){
  browserSync({
    server: {
      baseDir: config.dirs.dest
    }
  });
});
