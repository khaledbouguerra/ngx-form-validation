const gulp = require('gulp');
const inlineNg2Template = require('gulp-inline-ng2-template');

gulp.task('inline-build-templates', function() {
    return gulp.src(['./src/app/ngx-form-validation/**/*.ts', '!./src/app/ngx-form-validation/**/**.spec.ts'])
        .pipe(inlineNg2Template({
            target: 'es5',
            useRelativePaths: true
        }))
        .pipe(gulp.dest('./build'));

});
