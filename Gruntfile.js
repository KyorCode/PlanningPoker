module.exports = function (grunt) {
    "use strict";

    //TODO: Split tasks up for each type , less, js, html

    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            concurrent: {
                server: {
                    tasks: ['nodemon:dev', 'watch', 'jasmine_node'],
                    options: {
                        logConcurrentOutput: true
                    }
                }
            },
            jshint: {
                all: ['Gruntfile.js', 'app.js', 'public/js/*.js', 'spec/**/*.js']
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
                    tasks: ['less:dev', 'jshint:all', 'jasmine:appRun'],
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
                    tasks: ['jshint:all', 'jasmine:appRun'],
                    options: {
                        nospawn: true,
                        livereload: true
                    }
                }, tests: {
                    files: ['spec/**/*.js'],
                    tasks: ['jshint:all', 'jasmine:appRun'],
                    options: {
                        nospawn: true,
                        livereload: true
                    }
                }
            },
            jasmine: {
                appRun: {
                    src: ['.public/js/app/*.js'],
                    options: {
                        keepRunner: true,
                        specs: 'spec/appRun/*Spec.js',
                        helpers: 'spec/Helpers/*Helper.js',
                        styles: 'public/css/styles.css',
                        template: require('grunt-template-jasmine-requirejs'),
                        templateOptions: {
                            requireConfigFile:'spec/requireConfig.js'
                        }
                    }
                }
            },
            jasmine_node: {
                specNameMatcher: 'NodeSpec'
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
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-markdown');

    grunt.registerTask('default', [ 'jasmine:appRun', 'less:dev', 'jshint:all', 'markdown', 'concurrent']);
}
;