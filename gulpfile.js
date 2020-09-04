const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const babel = require('gulp-babel')

gulp.task('app.js', () =>
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['env'],
        }))
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
)