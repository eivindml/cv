var gulp = require('gulp');
var latex = require('gulp-latex');
var del = require('del');


gulp.task('default', ['latex']);

//Watch source
gulp.task('watch', ['latex'], function() {
    gulp.watch(['**/*.tex'], ['latex']);
});

//Compile and deploy
gulp.task('latex', function() {
    return gulp.src('*.tex')
        .pipe(latex())
        .pipe(gulp.dest('./build'))
});
// Clean
gulp.task('clean', function() {
    return del(['*.aux', '*.log', '*.out', '*.pdf']);
});
