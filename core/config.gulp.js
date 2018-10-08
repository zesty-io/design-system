var gulp = require("gulp");
var concatCss = require("gulp-concat-css");

gulp.task("vendor-css", function() {
  return gulp
    .src("src/vendor.css")
    .pipe(
      concatCss("vendor.css", {
        inlineImports: true
      })
    )
    .pipe(gulp.dest("dist/"));
});

gulp.task("default", ["vendor-css"]);
