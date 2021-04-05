const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
	return gulp.src('./src/scss/**/*.scss')
        .pipe(autoprefixer())
        .pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('default', gulp.series('css'));