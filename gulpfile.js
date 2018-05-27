//firstly require gulp
var gulp = require('gulp');

// include plugins
var minifycss = require('gulp-minify-css');
var changed = require('gulp-changed');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var pump = require('pump');
//var concat = require('gulp-concat');


gulp.task('minify-css',function(){
 return gulp.src('app/css/styles.css')
 		.pipe(minifycss())
 		.pipe(gulp.dest('dist/css'))
});

//Copy only the changed files
//js
gulp.task('changedjs',function(){
	return gulp.src('app/js/*.js')
	.pipe(changed('dist/js'))
	.pipe(gulp.dest('dist/js'));
});

//html
gulp.task('changedhtml', function () {
   return gulp.src('app/*.html')
	.pipe(changed('dist/'))
	.pipe(gulp.dest('dist/'));
});

//minify js
gulp.task('compress', function (cb) {
  pump([
        gulp.src('app/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

//complile sass
gulp.task('sass', function () {
  return gulp.src('app/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});


// next task to use!!
//gulp.task('scripts', function() {
//  return gulp.src('app/js/*.js')
//    .pipe(concat('all.js'))
//    .pipe(gulp.dest('dist/js'));
//});

gulp.task('default', ['changedhtml','compress', 'sass','minify-css']);//minify-css should be last 

