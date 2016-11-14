var gulp          = require('gulp');
var coffee = require('gulp-coffee');


gulp.task('compile-coffee', function() {
  gulp.src('resources/assets/js/**/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function() {
  gulp.watch('resources/assets/js/**/*.coffee', ['compile-coffee']);
});

gulp.task('default', [
  'compile-coffee',
  'watch'
]);

gulp.task('production', [
  'compile-coffee'
]);