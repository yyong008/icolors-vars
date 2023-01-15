import gulp from 'gulp'
import csso from 'gulp-csso'
import clean from 'gulp-clean'

function css() {
  return gulp.src('./libs/*').pipe(clean()).pipe(csso()).pipe(gulp.dest('.'))
}

export default css
