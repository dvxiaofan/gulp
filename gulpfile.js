/*
* @Author: xiaofan
* @Date:   2018-04-27 14:18:42
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-04-28 00:13:24
*/

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var eslint = require("gulp-eslint");
var browserSync = require("browser-sync").create();
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");

// gulp.task("lint", () => {
//   return gulp
//     .src(["**/*.js", "!node_modules/**"])
//     .pipe(eslint())
//     .pipe(eslint.format())
//     .pipe(eslint.failAfterError());
// });

gulp.task(
  "default",
  ["copy-html", "copy-images", "styles", "lint", "scripts"],
  function() {
    gulp.watch("sass/**/*.scss", ["styles"]);
    gulp.watch("js/**/*.js", ["lint"]);
    gulp.watch("/index.html", ["copy-html"]);
    gulp.watch("./dist/index.html").on("change", browserSync.reload);

    browserSync.init({
      server: "./dist"
    });
  }
);

gulp.task("dist", [
  "copy-html",
  "copy-images",
  "styles",
  "lint",
  "scripts-dist"
]);

gulp.task("scripts", function() {
  gulp
    .src("js/**/*.js")
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(gulp.dest("dist/js"));
});

gulp.task("scripts-dist", function() {
  gulp
    .src("js/**/*.js")
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("default", defaultTask);

function defaultTask(done) {
  browserSync.init({
    server: "./"
  });
  browserSync.stream();
  done();
}

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
