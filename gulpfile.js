const { src, dest, watch }= require(`gulp`);
const htmlCompressor  = require (`gulp-htmlmin`);
const jsCompressor = require(`gulp-uglify`);
const babel = require(`gulp-babel`);
const cssLinter = require(`gulp-stylelint`);
const jsLinter = require(`gulp-eslint`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;

let compressHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`compressed-html/`));
};
let compressJS = () => {
    return src(`js*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`compressed-scripts`));
};
let lintCSS = () => {
    return src(`css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};
let lintJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};
let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 0, // A delay is sometimes helpful when reloading at the
        server: {       // end of a series of tasks.
            baseDir: [
                `html`,
            ]
        }
    });

    watch(`html/**/*.html`,`js/**/*.js`).on(`change`, reload);
};

exports.compressHTML = compressHTML;
exports.compressJS = compressJS;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.serve = serve;
