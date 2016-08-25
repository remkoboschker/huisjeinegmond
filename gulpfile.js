var gulp = require('gulp'),
    imageResize = require('gulp-image-resize'),
    imagemin = require('gulp-imagemin');

gulp.task('images', function () {
    gulp.src('./bron/*.*')
        .pipe(imageResize({
            width: 1024,
            height: 920,
            imageMagick: true,
            crop: true
        }))
        .pipe(imagemin({progressive:true}))
       // .pipe(flatten())
        .pipe(gulp.dest('./images/'));
});
