const gulp = require('gulp')

const serve = require('./gulp/tasks/serve')
const pug2html = require('./gulp/tasks/pug2html')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const fonts = require('./gulp/tasks/fonts')
const imageMinify = require('./gulp/tasks/imageMinify')
const clean = require('./gulp/tasks/clean')
const copyDependencies = require('./gulp/tasks/copyDependencies')
const lighthouse = require('./gulp/tasks/lighthouse')
const svgSprite = require('./gulp/tasks/svgSprite')

const dev = gulp.parallel(pug2html, styles, script, fonts, svgSprite)
const prod = gulp.parallel(pug2html, styles, script, fonts, imageMinify.imageMinifyImagemin, imageMinify.imageMinifyTinyPNG, svgSprite)

const devBuild = gulp.series(clean, copyDependencies, dev)
const prodBuild = gulp.series(clean, copyDependencies, prod)

module.exports.start = gulp.series(devBuild, serve)
module.exports.build = prodBuild

module.exports.lighthouse = gulp.series(lighthouse)

