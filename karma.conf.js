/* global module */
module.exports = function (config) {
    config.set({
        singleRun: false,
        autoWatch: false,
        frameworks: ['jspm', 'mocha'],
        files: [
            'node_modules/babel-polyfill/dist/polyfill.js'
        ],
        jspm: {
            config: 'config.js',
            loadFiles: [
                'tests/init-mocks.js',
                'tests/**/*.js'
            ],
            serveFiles: [
                'src/**/*.js'
            ]
        },
        browsers: ['PhantomJS'],
        preprocessors: {
            'src/**': ['babel', 'sourcemap', 'coverage']
        },
        babelPreprocessor: {
            options: {
                presets: ['react', 'es2015'],
                sourceMap: 'inline'
            },
            sourceFileName: function (file) {
                return file.originalPath;
            }
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            instrumenters: {isparta: require('isparta')},
            instrumenter: {
                'src/**': 'isparta'
            },
            instrumenterOptions: {
                istanbul: {noCompact: true}
            },
            reporters: [
                {
                    type: 'text-summary',
                    subdir: '.'
                },
                {
                    type: 'html',
                    dir: 'coverage/',
                    subdir: '.'
                },
                {
                    type: 'teamcity'
                },
                {
                    type: 'json',
                    subdir: '.',
                    file: 'coverage.json'
                }
            ]
        }
    });
};
