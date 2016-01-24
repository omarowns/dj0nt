var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var stringify = require('stringify');
var stripify = require('stripify');

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        port: 4000
    });
});

gulp.task('compile', function() {
    return browserify('./app/app.js', {
        transform: stringify({
            extensions: ['.html'],
            minify: true
        })
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('compile-prod', function() {
    return browserify('./app/app.js', {
        transform: [
            stringify({
                extensions: ['.html'],
                minify: true
            }),
            stripify
        ]
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', ['compile'], function() {
    gulp.watch('app/**/{*.js,*.html}', ['compile']);
});

gulp.task('default', ['watch']);
    