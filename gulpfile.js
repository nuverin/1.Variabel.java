const gulp = require('gulp');
const webpack = require('webpack-stream');
const browser = require('browser-sync').create();
gulp.task('default', () => {
    browser.init({
        watch: true,
        server: {
            baseDir: './',
            index: 'portoflio.html',
            
            
        },
        port: 8080,
        notify: false,
    })
    return gulp.src('dist/src/import.js')
    
    .pipe(webpack( require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'))
})