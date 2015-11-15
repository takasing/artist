"use strict"

var gulp = require("gulp");

gulp.task("default", ["build", "watch", "browser-sync"])

gulp.task("build", ["build:js", "build:css", "imagemin"]);

gulp.task("build:js", function() {
  var runSequence = require("run-sequence");
  runSequence(["webpack", "lint:js"]);
});

gulp.task("build:css", function() {
  var runSequence = require("run-sequence");
  runSequence(["css:pc", "css:sp"]);
});
