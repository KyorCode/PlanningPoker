module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            concurrent: {
                server: {
                    tasks: ['nodemon:dev', 'watch'],
                    options: {
                        logConcurrentOutput: true
                    }
                }
            },
            jshint: {
                all: ['Gruntfile.js', 'app.js', 'public/js/*.js', 'tests/**/*.js'],
                options: {
                    curly: true,
                    eqeqeq: true,
                    immed: true,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    sub: true,
                    undef: true,
                    boss: true,
                    eqnull: true,
                    browser: true
                },
                globals: {
                    require: true,
                    define: true,
                    requirejs: true,
                    describe: true,
                    expect: true,
                    it: true
                }
            },
            less: {
                dev: {
                    files: {"public/css/styles.css": "styles/bootstrap.less"}
                }
            },
            nodemon: {
                dev: {
                    options: {
                        file: 'app.js',
                        args: ['development'],
                        watchedExtensions: ['js', 'html', 'less'],
                        watchedFolders: ['public', 'views'],
                        debug: true,
                        env: {
                            PORT: '35728'
                        },
                        cwd: __dirname
                    }
                }
            },
            watch: {
                html: {
                    files: ['views/*.html'],
                    tasks: ['less:dev', 'jshint:all'],
                    options: {
                        nospawn: true,
                        livereload: true
                    }
                },
                css: {
                    files: ['styles/*.less'],
                    tasks: ['less:dev'],
                    options: {
                        nospawn: true,
                        livereload: true
                    }
                },
                js: {
                    files: ['public/js/*.js'],
                    tasks: ['jshint:all'],
                    options: {
                        nospawn: true,
                        livereload: true
                    }
                }, tests: {
                    files: ['tests/**/*.js'],
                    tasks: ['jshint:all'],
                    options: {
                        nospawn: true,
                        livereload: true
                    }
                }
            },
            markdown: {
                all: {
                    files: [
                        {
                            expand: true,
                            src: '*.md',
                            dest: 'docs/html/',
                            ext: '.html'
                        }
                    ],
                    options: {
                        markdownOptions: {
                            gfm: true
                        }
                    }
                }
            },
            mocha: {
                index: ["http://localhost:10001/tests/module.login.html"]
            },
            connect:{
                test:{
                    options:{
                        port:10001
                    }
                }
            },
            copy: {
                main: {
                    files: [
                        {expand: true, flatten: true, src: ['node_modules/grunt-mocha/node_modules/mocha/mocha.css'], dest: 'tests/css/' },
                        {expand: true, flatten: true, src: ['node_modules/grunt-mocha/node_modules/mocha/mocha.js'], dest: 'tests/js/' },
                        {expand: true, flatten: true, src: ['node_modules/chai/chai.js'], dest: 'tests/js/' },
                        {expand: true, flatten: true, src: ['node_modules/sinon/lib/sinon.js'], dest: 'tests/js/' },
                        {expand: true, flatten: true, src: ['public/js/libs/requirejs/require.js'], dest: 'tests/js/' },
                        {expand: true, flatten: true, src: ['public/js/libs/jquery/jquery.js'], dest: 'tests/js/' },
                        {expand: true, flatten: true, src: ['public/js/libs/amplify/lib/amplify.js'], dest: 'tests/js/' },
                        {expand: true, flatten: true, src: ['node_modules/grunt-mocha/phantomjs/bridge.js'], dest: 'tests/js'},
                        {expand: true, flatten: true, src: ['public/js/app/module.*.js'], dest: 'tests/js/app'}
                    ]
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', [ 'less:dev', 'jshint:all', 'copy', 'connect:server', 'mocha', 'markdown', 'concurrent']);
    grunt.registerTask('test',['connect:test','mocha']);
}
;