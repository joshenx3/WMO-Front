var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var reload = browserSync.reload;

gulp.task('sass', function() {
  return gulp.src([
    'dist/css/sass/main.scss'
  ])
  .pipe(sass({
    outputStyle: 'compressed'
  })
  .on('error', sass.logError))
  .pipe(gulp.dest("./dist/css/"));

});

gulp.task('watch', function() {
  gulp.watch('dist/css/sass/*.scss', ['sass']).on('change', function(e) {
      console.log("Compilando archivo SASS");
      browserSync.reload
      console.log("El navegador ha sido recargado");
  })
});

gulp.task('browser-sync', function() {
  var archivos  = [
    'dist/css/sass/*.scss'
  ]

  browserSync.init(archivos, {
    server: {
      baseDir: "./dist"
    },
    notify: false
  })
});
