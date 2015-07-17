var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  less = require('gulp-less'),
  prefix = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  minifyCSS = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  include = require('gulp-file-include'),
  minifyHTML = require('gulp-html-minifier'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

gulp.task('styles', function() {
  gulp.src('./src/less/*.less')
  .pipe(plumber())
  .pipe(less())
  .pipe(prefix('last 8 versions', 'Explorer 7'))
  .pipe(gulp.dest('./dist/css'))
  .pipe(minifyCSS())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./dist/css'))
});

gulp.task('scripts', function() {
  gulp.src('./src/js/*.js')
  .pipe(plumber())
  .pipe(gulp.dest('./dist/js'))
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./dist/js'))
});

gulp.task('html', function() {
  gulp.src('./src/**/*.html')
  .pipe(plumber())
  .pipe(include({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(minifyHTML({
    removeComments: true,
    collapseWhitespace: true,
    keepClosingSlash: true
  }))
  .pipe(gulp.dest('./dist'))
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './',
      index: './dist/index.html'
    }
  });
});

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('build', ['styles', 'scripts', 'html']);

gulp.task('default', ['build', 'browser-sync'], function() {
  gulp.watch('./src/less/*.less', ['styles', 'reload'])
  gulp.watch('./src/js/*.js', ['scripts', 'reload']);
  gulp.watch('./src/**/*.html', ['html', 'reload']);
});
