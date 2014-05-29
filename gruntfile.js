module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'compile-handlebars':{
      allStatic:{
        template: 'src/index.html',
        templateData: 'src/data/test.json',
        output: 'dist/index.html'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-compile-handlebars');

  // Default task(s).
  grunt.registerTask('default', ['compile-handlebars:allStatic']);

};
