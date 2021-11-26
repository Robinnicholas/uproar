const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps'); 
const autoprefixer = require('gulp-autoprefixer');
const image = require('gulp-image');
const htmlmin = require('gulp-htmlmin');
const webp =  require('gulp-webp');
const { watch, series, parallel } = require('gulp');

function imageOpti(cb){
    gulp.src('src/images/*')
        .pipe(image())                                  // img optimization
        .pipe(gulp.dest('dist/images'));
    cb();
}

function webpConversion(cb){
    gulp.src('src/images/*')
    .pipe(webp())                                   // webp conversion
    .pipe(gulp.dest('src/images/'))
    .pipe(gulp.dest('dist/images'));
    cb();
}

function htmlMin(cb){
    gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
    cb();
}

function cssTasks(cb){
    gulp.src('src/sass/**/*.scss')
    .pipe(sourcemaps.init())                    // sourcemap initialise
    .pipe(sass().on('error', sass.logError))    // sass to css
    .pipe(gulp.dest('src/css'))
    .pipe(cssmin({advanced:false}))             // css minification
    .pipe(autoprefixer({                        // autoprefixer
        cascade: false
    }))
    .pipe(sourcemaps.write(''))               // sourcemap write
    .pipe(gulp.dest('dist/css/'));
    cb();
}

exports.cssCompile = cssTasks;

function minifyJs(cb){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
    cb();
}

function defaultTask(cb) {
    watch('src/*.html' , htmlMin);
    watch('src/sass/**/*.scss' , cssTasks);
    watch('src/js/*.js' , minifyJs);   
    cb();
}

exports.default = series(htmlMin,imageOpti,webpConversion,minifyJs,cssTasks,defaultTask);

