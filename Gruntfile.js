/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        jshint: {
            options: {
                node: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {}
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib_test: {
                src: ['lib/**/*.js', 'test/**/*.js']
            }
        },
        sass: {
            dev: {
                options: {
                    outputStyle: 'nested',
                    sourceMap: false,
                    includePaths: [
                        'sass'
                    ]
                },
                files: {
                    'css/app.css': 'sass/app.sass'
                }
            },
            prod: {
                options: {
                    outputStyle: 'compressed',
                    sourceMap: true,
                    includePaths: [
                        'sass'
                    ]
                },
                files: {
                    'css/app.css': 'sass/app.sass'
                }
            }
        },
        watch: {
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'index.html',
                    'css/app.css'
                ]
            },
            sass: {
                tasks: ['sass:dev'],
                files: [
                    'sass/*.sass'
                ]
            },
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'qunit']
            }
        },
        connect: {
            all: {
                options: {
                    port: 3000,
                    hostname: '0.0.0.0',
                    base: '.',
                    livereload: true
                }
            }
        },
        open: {
            all: {
                path: 'http://localhost:3000/index.html'
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-open');

    // Default task.
    grunt.registerTask('default', ['jshint', 'connect', 'open', 'watch']);

};
