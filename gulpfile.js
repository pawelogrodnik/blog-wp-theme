var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');
 
gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('sass', function() {
  gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['>0%']}))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['sass']);
})
 
gulp.task('default', ['sass', 'webserver', 'watch']);