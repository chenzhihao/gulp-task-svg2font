var gulp = require('gulp');
var config = require('../gulpconfig');
var consolidate = require('gulp-consolidate');
var gulpIconfont = require('gulp-iconfont');

module.exports = function () {
    return gulp.src([config.src + 'icons/**/*.svg'])
        .pipe(gulpIconfont({
            fontName: 'iconfont',
            normalize: true,
            centerHorizontally: true
        }))
        .on('codepoints', function (codepoints) {
            var options = {
                glyphs: codepoints,
                fontName: 'iconfont',
                fontPath: '../fonts/', // set path to font (from your CSS file if relative)
                className: 'si' // set class name in your CSS
            };
            gulp.src(config.src + 'icons/_iconfont.scss')
                .pipe(consolidate('lodash', options))
                .pipe(gulp.dest(config.src + '/styles/icon/')); // set path to export your CSS
        })
        .pipe(gulp.dest(config.dest + 'fonts/'));
};
