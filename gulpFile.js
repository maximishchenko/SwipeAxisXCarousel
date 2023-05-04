// npm i gulp gulp-rename gulp-terser gulp-clean-css -D

var gulp = require("gulp"),
    rename = require("gulp-rename"),
    cleanCSS = require("gulp-clean-css"),
    terser = require("gulp-terser");

function minifyCSS() {
  return gulp.src("./src/css/SwipeAxisXCarousel.css")
    .pipe(rename("SwipeAxisXCarousel.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist/css"));
}

function minifyJS() {
  return gulp.src("./src/js/SwipeAxisXCarousel.js")
    .pipe(rename("SwipeAxisXCarousel.min.js"))
    .pipe(terser())
    .pipe(gulp.dest("./dist/js"));
}

exports.default = gulp.parallel(minifyCSS, minifyJS);