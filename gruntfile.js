module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'compile-handlebars':{
      allStatic:{
        template: 'src/index.html',
        templateData: 'src/data/data.json',
        output: 'dist/index.html'
      }
    },
    copy: {
        dist: {
            cwd: 'src/',
            src: 'resources/**',
            dest: 'dist/',
            expand: true, 
        }
    },
    clean: ['dist'],
    connect: {
      server: {
        options: {
          port: 9000,
          livereload: 35729,
          hostname: 'localhost'
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
  grunt.registerTask('default', ['clean', 'copy', 'compile-handlebars:allStatic']);
  grunt.registerTask('preview', ['connect:server','watch:client']);


};
