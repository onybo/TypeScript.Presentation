'use strict';

var _ = require('lodash');
var path = require('path');
var spawn = require('child_process').spawn;

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt); // Load grunt tasks automatically
    require('time-grunt')(grunt); // Time how long tasks take. Can help when optimizing build times

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compilation =====================================================================================

        // LESS

        less: {
            options: {
                paths: ["Content"],
            },
            build: {
                files: {
                    "Content/Botox.css": "Content/Botox.less"
                }
            },
            dist: {
                options: {
                    cleancss: true,
                    compress: true
                },
                files: {
                    "dist/Content/css/Botox.css": "Content/Botox.less"
                }
            }
        },

        // TS

        ts: {
            build: {
                src: [
                    'Scripts/app/{,**/}*.ts',
                    'Scripts/*.ts'
                ],
                outDir: 'Scripts/'
            },
            dist: {
                src: [
                    'Scripts/app/{,**/}*.ts',
                    'Scripts/*.ts'
                ],
                outDir: 'Scripts/app',
                options: {
                    sourceMap: false,
                    removeComments: true
                }
            }
        },

        // Copying and cleaning files ======================================================================

        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '.',
                        dest: 'dist',
                        src: [
                            'Scripts/app/library/**/*', // CSS, Fonts, Images etc.
                            'Scripts/app/app.js',
                            '*.html',
                            'Scripts/app/templates/**/*.html'
                        ]
                    }
                ]
            }
        },

        clean: {
            dist: {
                src: ["dist/*.html", "dist/manifest.appcache", "dist/Scripts/"]
            },
        },

        // Transformation ==================================================================================

        // JS => app
        // bower => third party 

        // usemin plugin

        useminPrepare: {
            html: 'Index.html',
            options: {
                flow: {
                    html: {
                        steps: {
                            js: ['concat'],
                            css: ['concat']
                        },
                        post: {}
                    }
                }
            }
        },

        usemin: {
            html: 'dist/Index.html',
            options: {
                //assetsDirs: ['foo/bar', 'bar']
            }
        },

        // uglify minification

        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'dist/Scripts/app/dcm.js': ['dist/Scripts/app/dcm.js']
                }
            }
        },

        // concat

        concat: {
            generated: {
                //ToDo
            }
        },

        // Manifest generation =============================================================================

        appcache: {
            options: {
                basePath: 'dist/',
                preferOnline: true
            },
            all: {
                dest: 'dist/manifest.appcache',
                cache: {
                    patterns: [
                        "dist/Scripts/app/*.js",
                        "dist/Scripts/app/library/css/*.css",
                        "dist/Scripts/app/library/images/*.png",
                        "dist/Scripts/app/library/fonts/*.*",
                        "dist/*.html",
                        "dist/Scripts/app/templates/**/*.html"
                        //'!static/ignored/**/*' // except the 'static/ignored/' subtree
                    ],
                    //literals: '/' // insert '/' as is in the "CACHE:" section
                },
                network: '*',
            }
        },

        // Dependencies installation =======================================================================

        // Bower 

        "bower-install-simple": {
            "dist": {
                options: {
                    production: true,
                    directory: "dist/bower_components"

                }
            },
            "build": {
                options: {
                    production: false,
                    directory: "bower_components"
                }
            }
        }
    });

    //
    // Task registration
    //
    grunt.registerTask('build', [
        'clean:dist',
        'bower:dist',
        'ts:dist',
        'less:dist',
        'useminPrepare',
        'concat:generated',
        'copy:dist',
        'usemin',
        'uglify:dist',
        'appcache'
    ]);

    grunt.registerTask("bower", ["bower-install-simple"]);
};