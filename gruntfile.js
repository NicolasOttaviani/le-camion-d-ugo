module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'compile-handlebars':{      
        allArray:{
            template: ['src/index.html', 'src/resources/css/pizza.xcss', 'src/resources/js/google.map.xjs'],
            templateData: ['src/data/data.json', 'src/data/data.json', 'src/data/data.json'],
            output: ['dist/index.html', 'dist/resources/css/pizza.css', 'dist/resources/js/google.map.js']
        }
    },
    copy: {
        dist: {
            cwd: 'src/',
            src: ['resources/images/**', 'resources/font/**', 'resources/css/*.css', 'resources/js/*.js'],
            dest: 'dist/',
            expand: true, 
        }
    },
    clean: ['dist'],
    connect: {
      server: {
        options: {
          port: 8080,
          livereload: 35729,
          hostname: '0.0.0.0'
        }
      },
      keepalive: true
    },
    watch: {
      client: {
        files: ['src/**/*'],
        tasks:['default'],
        options: {
          livereload:35729
        }
      }  
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-compile-handlebars');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'copy', 'compile-handlebars']);
  grunt.registerTask('preview', ['default', 'connect:server','watch:client']);


};
