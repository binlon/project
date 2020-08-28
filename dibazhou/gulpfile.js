var {series, src, dest} = require("gulp");

 
function doCss() {
    return src("./origin/css/**/*.css")
    .pipe(dest("./publish/css"));
}
function doJs() {
    return src("./origin/js/**/*.js")
    .pipe(dest("./publish/js"));
}
function doHtml() {
    return src("./origin/html/**/*.html")
    .pipe(dest("./publish/html"));
}
function doResourse() {
    return src("./origin/reourse/")
    .pipe(dest("./publish/reourse"));
}
module.exports.a = series([doCss,doJs,doHtml,doResourse]);