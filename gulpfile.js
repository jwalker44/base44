const gulp = require("gulp");
const concat = require('gulp-concat');
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const uglifycss = require("gulp-uglifycss");
const browserify = require("browserify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");

const jsMain = "./src/js/main.js";
const jsAdmin = "./src/js/admin.js";

// ADD BOOTSTRAP JS
gulp.task('bootstrap-js', function() {
  return gulp.src([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    // Add other Bootstrap JS files if needed
  ])
  .pipe(concat('bootstrap.min.js'))
  .pipe(gulp.dest('./build/src/js'));
});

// Compile scss to main.css file in same folder
gulp.task("scss", function () {
  return gulp
    .src("./src/scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./src/scss/"));
});
// Rename to main-min.css, minify, and copy to build folder
gulp.task("min", function () {
  return gulp
    .src("./src/scss/main.css")
    .pipe(rename({ suffix: "-min" }))
    .pipe(
      uglifycss({
        uglycomments: true,
      })
    )
    .pipe(gulp.dest("./build"));
});
gulp.task("js", function () {
  return browserify({
    entries: [jsMain],
  })
    .transform(babelify, {
      presets: ["env"],
    })
    .bundle()
    .pipe(source(jsMain))
    .pipe(rename({ extname: ".min.js" }))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./build"));
});
gulp.task("jsadmin", function () {
  return browserify({
    entries: [jsAdmin],
  })
    .transform(babelify, {
      presets: ["env"],
    })
    .bundle()
    .pipe(source(jsAdmin))
    .pipe(rename({ extname: ".min.js" }))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./build"));
});
// Run all build tasks
gulp.task("build", gulp.series("scss", "js", "min"));
// Watch scss files and run scss and minify tasks
gulp.task("watch", function () {
  gulp.watch("./src/scss/parts/*.scss", gulp.series("scss"));
  gulp.watch("./src/scss/*.css", gulp.series("min"));
  gulp.watch("./src/js/parts/*.js", gulp.series("js"));
});
