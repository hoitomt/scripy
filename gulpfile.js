var gulp = require('gulp');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
// var refresh = require('gulp-livereload');
// var lr = require('tiny-lr');
// var server = lr();

gulp.task('scripts', function() {
  gulp.src(['js/main.js'])
    .pipe(browserify())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('build'))
    // .pipe(refresh(server))
});

// gulp.task('lr-server', function() {
//   server.listen(35729, function(err) {
//     if(err) return console.log(err);
//   });
// });

gulp.task('coffee', function() {
  gulp.src('src/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('js'))
});

gulp.task('watch', function() {
  gulp.watch('js/**', ['scripts']);
  gulp.watch('src/**', ['coffee']);
});

gulp.task('default', ['scripts', 'coffee', 'watch']);