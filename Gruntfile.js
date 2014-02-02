module.exports = function(grunt){
  grunt.initConfig({
    clean: {
      build: {
        src: ['public/js', 'public/css']
      }
    },
    browserify: {
      dist: {
        files: {
          'public/js/bundle.js': ['src/**/*.coffee']
        },
        options: {
          transform: ['coffeeify'],
          debug: true
        }
      }
    },
    connect: {
      server: {
        options: {
          base: './public',
          port: '4000',
          host: '*'
        }

      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['*.scss'],
          dest: './public/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      js: {
        files: ['src/**/*.coffee'],
        tasks: ['browserify']
      },
      styles: {
        files: ['styles/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('build', ['clean', 'sass', 'browserify'])
  grunt.registerTask('default', ['build', 'connect', 'watch']);

};