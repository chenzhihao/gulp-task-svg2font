var gulp = require('gulp');

require('./gulptask')([
    'iconfont'
]);

gulp.task('default', ['iconfont']);
