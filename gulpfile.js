var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var sourceMaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  gulp.src([
    'src/**/*.ts',
    'typings/tsd.d.ts'
  ])
    .pipe(sourceMaps.init())
    .pipe(ts(tsProject, undefined, ts.reporter.longReporter()))
    .js
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('public/app'));
});