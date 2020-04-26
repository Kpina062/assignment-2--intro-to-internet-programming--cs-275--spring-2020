const { src, dest, series, watch }= require(`gulp`);
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
    return src([`dev/html/*.html`, `dev/html/**/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod/html`));
};

let validateHTML = () => {
    return src(`dev/*.html`)
        .pipe(htmlValidator());
};

let compressJS = () => {
    return src(`dev/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/js`));
};

let transpileJSForProd = () => {
    return src (`dev/js/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe( dest(`prod/js`));
};

let compressCSS = () => {
    return src ([`dev/css/*.css`,`dev/css/**/*.css`])
        .pipe(cssCompressor({collapseWhitespace: true}))
        .pipe( dest(`prod/css`));
};

let lintCSS = () => {
    return src(`dev/css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};
let lintJS = () => {
    return src (`dev/js/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};
let serve = () => {
    browserSync({
        reloadDelay: 50,
        notify: true, // A delay is sometimes helpful when reloading at the
        server: {       // end of a series of tasks.
            baseDir: [
                `temp`,
                `dev`,
                `dev/html`
            ]
        }
    });
    watch(`dev/html/**/*.html`, series(validateHTML)).on(`change`, reload);
    watch(`dev/js/*.js`, series(lintJS, compressJS)).on(`change`, reload);
    watch (`dev/css/**/*.css`, series(compressCSS)) .on(`change`, reload);
};
exports.serve = series(lintJS, transpileJSForProd, validateHTML, serve);
exports.compressHTML = compressHTML;
exports.validateHTML = validateHTML;
exports.compressJS = compressJS;
exports.transpileJSForProd = transpileJSForProd;
exports.compressCSS= compressCSS;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.build = series (
    compressCSS,
    compressHTML,
    transpileJSForProd
);
exports.serve = serve;
