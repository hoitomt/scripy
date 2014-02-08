module.exports = function(grunt){
  grunt.initConfig({
    clean: {
      build: {
        src: ['public/js', 'public/css']
      }
    },
    coffee: {
      compile: {
        options: {
          bare: true
        },
        files: [{
          expand: true,
          cwd: 'app/assets/javascripts',
          src: ['**/*.coffee', '**/*.js'],
          dest: 'public/js',
          ext: '.js'
        }]
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
    copy: {
      main: {
        expand: true,
        cwd: 'vendor/assets',
        src: ['**/*.js', '**/*.css'],
        dest: 'public/vendor/'
      },
      css: {
        expand: true,
        cwd: 'app/assets/stylesheets/zocial',
        src: ['**/*'],
        dest: 'public/css/zocial'
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/assets/stylesheets',
          src: ['*.scss'],
          dest: 'public/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      js: {
        files: ['app/assets/javascripts/**/*.coffee'],
        tasks: ['coffee']
      },
      styles: {
        files: ['app/assets/stylesheets/**/*.scss'],
        tasks: ['sass']
      },
      copy: {
        files: ['vendor/assets/**'],
        tasks: ['copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['clean', 'sass', 'coffee', 'copy'])
  grunt.registerTask('default', ['build', 'connect', 'watch']);

};