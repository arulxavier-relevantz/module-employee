var gulp = require("gulp");
var tsc  = require("gulp-typescript-compiler");
var nodemon = require("gulp-nodemon");
var gulpTypings = require("gulp-typings");
var ts = require('gulp-typescript');

gulp.task("default", ["installTypings", "compile"]);

gulp.task("compile", function () {
  return gulp
    .src("*.ts") 
    .pipe(ts({
        module: "commonjs",
        target: "ES5",
        sourcemap: false,
        logErrors: true
    }))
    .pipe(gulp.dest("."))
});


 
gulp.task("installTypings",function(){
    gulp.src("./typings.json")
        .pipe(gulpTypings()); //will install all typingsfiles in pipeline. 
});

