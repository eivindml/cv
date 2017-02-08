var gulp = require('gulp'),
    pdflatex = require('gulp-pdflatex'),
    del = require('del');

// Watch source files
gulp.task('watch', ['latex'], function() {
    gulp.watch(['**/*.tex'], ['latex']);
});

// Compile LaTeX file with PDFLaTeX
gulp.task('latex', function() {
    return gulp
        .src('eivindml-cv.tex')
        .pipe(pdflatex({
            'shellEscape': false,
            'texInputs': []
        }))
        .pipe(gulp.dest('./build/'))
});

// Clean build files
gulp.task('clean', function() {
    return del(['*.aux', '*.log', '*.out', '*.pdf']);
});

// Set default task
gulp.task('default', ['latex']);
