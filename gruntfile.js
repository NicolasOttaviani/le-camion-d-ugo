module.exports = function(grunt) {
  var port = process.env.PORT || 8080;
  var ip = process.env.IP || '0.0.0.0';
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
      'server-debug': {
        options: {
          port: port,
          livereload: 35729,
          hostname: ip
        }
      },
      server: {
        options: {
          port: port,
          hostname: ip,
          keepalive: true
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
    
  grunt.registerTask('build', ['clean', 'copy', 'compile-handlebars']);
  grunt.registerTask('debug', ['build', 'connect:server-debug','watch:client']);
  grunt.registerTask('default', ['build', 'connect:server']);


};
