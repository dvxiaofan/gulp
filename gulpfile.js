/*
* @Author: xiaofan
* @Date:   2018-04-27 14:18:42
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-04-28 00:13:24
*/

var gulp = require("gulp");
var sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const eslint = require("gulp-eslint");

gulp.task("lint", () => {
  return gulp
    .src(["**/*.js", "!node_modules/**"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("default", ["lint"], function() {});

// gulp.task('default', defaultTask);

// function defaultTask(done) {
//   var browserSync = require("browser-sync").create();
//   browserSync.init({
//     server: "./"
//   });
//   browserSync.stream();
//   done();
// }

gulp.task("styles", function() {
  gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./css"));
});
