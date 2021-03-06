
var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');

var concat = require('gulp-concat');
var template = require('gulp-underscore-template');
var watch = require('gulp-watch');
var jsmin = require('gulp-jsmin');


gulp.task('templates', function () {
    return watch('./templates/*', { ignoreInitial: false},function () {
        gulp.src('./templates/*')
            .pipe(template())
            .pipe(concat('templates.js'))
            .pipe(gulp.dest('./js/utils'));
    });
});


// add custom browserify options here
var customOpts = {
  entries: ['./js/app.js'],
  debug: true
  // debug: false
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));
b.transform('debowerify');

// add transformations here
// i.e. b.transform(coffeeify);

gulp.task('js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // .pipe(jsmin())
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist'));
}


// gulp.task('default',['templates']);
gulp.task('default',['templates','js']);
