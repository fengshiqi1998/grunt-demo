module.exports = function(grunt) {
  grunt.initConfig({
    htmlhint: {
      html1: {
        options: {
          htmlhintrc:'.htmlhintrc'
        },
      src: ['*.html']
                           
      }
    }    
  });
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.registerTask('default', ['htmlhint']);
};

