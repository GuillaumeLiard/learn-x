var gulp    = require('gulp');
var fc2json = require('gulp-file-contents-to-json');

gulp.task('create-json-blob', function() {
  gulp.src('xr/templates/**/*')
      .pipe(fc2json('contents.json'))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['create-json-blob']);
