const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const tinypng = require('gulp-tinypng-unlimited');

module.exports = {
	imageMinifyImagemin, imageMinifyTinyPNG
}

function imageMinifyImagemin() {
	return gulp.src('src/pages/images/**/*.{gif,svg,webp}')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({
        quality: 85,
        progressive: true
      }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(gulp.dest('build/img'))
}

function imageMinifyTinyPNG() {
	return gulp.src('src/pages/images/**/*.{png,jpg}')
	.pipe(tinypng({
		cache: true,
		cachePath: 'src/pages/images-cache',
		outputErrorLog: true,
		outputErrorFiles: true,
	}))
		.pipe(gulp.dest('build/img'))
}