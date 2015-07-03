module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        files: {
          'dist/react-ellipsis.js': ['src/umd.js']
        }
      },
      test: {
        files: {
          'test/dist/specs.js': ['test/spec/*.test.js']
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v <%= pkg.version %> - <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'dist/react-ellipsis.min.js': ['dist/react-ellipsis.js']
        }
      }
    },
    clean: ['dist/react-ellipsis.js', 'test/dist'],
    mocha: {
      test: {
        src: ['test/**/*.html'],
        options: {
          reporter: 'Spec',
          run: true,
          log: true
        }
      }
    },
    jshint: {
      options: {
        indent: 2,
        camelcase: true,
        nonew: true,
        plusplus: true,
        quotmark: true,
        bitwise: true,
        forin: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        undef: true,
        unused: true,
        regexp: true,
        trailing: true,
        node: true,
        browser: true
      },
      gruntfile: {
        files: {
          src: ['Gruntfile.js']
        }
      },
      dev: {
        files: {
          src: ['src/**/*.js']
        },
        options: {
          debug: true,
          devel: true
        }
      },
      dist: {
        files: {
          src: ['src/**/*.js']
        }
      },
      test: {
        files: {
          src: ['test/spec/*.js']
        },
        options: {
          globals: {
            describe: true,
            it: true,
            before: true,
            after: true,
            beforeEach: true,
            afterEach: true
          }
        }
      }
    },
    watch: {
      test: {
        files: ['src/**/*.js', 'test/spec/*.test.js', 'test/*.test.html'],
        tasks: ['test']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('dist', ['browserify:dist', 'uglify', 'clean']);
  grunt.registerTask('test', ['lint', 'browserify:test', 'mocha']);
  grunt.registerTask('default', ['jshint', 'dist']);
};
