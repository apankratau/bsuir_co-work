// Include gulp
var gulp = require('gulp');

 // Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

 // Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src('public/js/*.js')
      .pipe(concat('main.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('public/js'));
});

gulp.task('styles', function() {
  return gulp.src('public/css/styles.less')
    .pipe(less())
    .pipe(prefix({ cascade: true }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  //  // Watch .js files
  gulp.watch('public/js/*.js', ['scripts']);
  //  // Watch .less files
  gulp.watch('public/css/*.less', ['styles']);
 });

 // Default Task
gulp.task('default', ['scripts', 'styles', 'watch']);