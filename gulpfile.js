const { src, dest, watch, series }= require(`gulp`);
const htmlCompressor  = require (`gulp-htmlmin`);
const jsCompressor = require(`gulp-uglify`);
const babel = require(`gulp-babel`);
const cssLinter = require(`gulp-stylelint`);
const cssCompressor = require(`gulp-uglifycss`);
const jsLinter = require(`gulp-eslint`);
const htmlValidator = require(`gulp-html`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;

let compressHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let validateHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlValidator());
};

let compressJS = () => {
    return src(`js*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`js`));
};
let compressCSS = () => {
    return src (`./css/**/*.css`)
        .pipe(cssCompressor({collapseWhitespace: true}))
        .pipe(dest(`css`));
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
    return src(`js/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};
let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 0, // A delay is sometimes helpful when reloading at the
        server: {       // end of a series of tasks.
            baseDir: [
                `./temp`,
                `html`
            ]
        }
    });

    watch(`html/**/*.html`,`js/*.js`).on(`change`, reload);
};

exports.compressHTML = compressHTML;
exports.validateHTML = validateHTML;
exports.compressJS = compressJS;
exports.compressCSS= compressCSS;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.build = series (
    compressHTML,
);
exports.serve = serve;
