var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

//sass to css with auto prefixer
gulp.task('sass', function() {
    return gulp.src('./app/assets/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./app/assets/styles/'));
});



// styles task
gulp.task('styles', function() {
  return gulp.src('./app/assets/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/styless/'));
});


gulp.task('imagemin', () => {
    return gulp.src('./app/assets/images/src/**/*')
        .pipe(imagemin({
            progressive: true,
        }))
        .pipe(gulp.dest('./app/assets/images/build'));
});



//lint javascript code
gulp.task('lint', function() {
  return gulp.src('./app/scripts/*/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});



// watch task
gulp.task('watch', function() {
  gulp.watch('./app/assets/images/src/**/*', ['imagemin']);
  gulp.watch('./app/assets/sass/*.scss', ['sass']);
});


