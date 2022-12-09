import gulp from 'gulp'
import csso from 'gulp-csso'

// const { src, dest } = require('gulp');

// function copy() {
//   return src('input/*.js')
//     .pipe(dest('output/'));
// }

// exports.copy = copy;

function css() {
  return gulp.src('./libs/*').pipe(csso()).pipe(gulp.dest('./dist'))
}

export default css
