module.exports = function (grunt) {
  grunt.initConfig({
    mochacli: {
      run: {
        api: {
          options: { wait: false  },
          args: ['./app.js']
        }
      },
      options: {
        reporter: 'spec',
         bail: true
      },
      all: ['test/*.js']
    }
  });
  grunt.loadNpmTasks('grunt-run')
  grunt.loadNpmTasks('grunt-mocha-cli')
  grunt.registerTask('default', ['run', 'mochacli', 'stop:api']);
};
