/*
* @Author: xiaofan
* @Date:   2018-04-27 14:18:42
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-04-27 16:07:39
*/


var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('default', function() {
	console.log("hello gulp");
})

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./css'));
})

// gulp.task('styles', function() {
// 	gulp.src('sass/**/*.scss')
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(autoprefixer({
// 			browsers: ['last 2 versions']
// 		}))
// 		.pipe(gulp.dest('./css'));
// });