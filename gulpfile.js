var gulp = require('gulp');
const pdflatex = require('gulp-pdflatex');
var del = require('del');


gulp.task('default', ['latex']);

//Watch source
gulp.task('watch', ['latex'], function() {
    gulp.watch(['**/*.tex'], ['latex']);
});

//Compile and deploy
gulp.task('latex', function() {
    return gulp
        .src('eivindml-cv.tex')
        .pipe(pdflatex({
            'shellEscape': false,
            'texInputs': []
        }))
        .pipe(gulp.dest('./build/'))
});
// Clean
gulp.task('clean', function() {
    return del(['*.aux', '*.log', '*.out', '*.pdf']);
});
