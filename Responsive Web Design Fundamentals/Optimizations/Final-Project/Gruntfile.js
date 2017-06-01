module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        // can squeeze multi js into one. Sequence matters in here 
        // think about the dependency before do it
        src: ['js/bootstrap.js'], 
        dest: 'js/build/bootstrap.min.js' // output
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};