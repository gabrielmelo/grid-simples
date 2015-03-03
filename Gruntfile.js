module.exports = function(grunt) {

// Configuração do projeto
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* sass */
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/demo.css': 'scss/demo.scss',
          'css/grid.css': 'scss/grid.scss',
        }
      }
    }

});

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-sass');

// Default task(s).
grunt.registerTask('default', ['sass']);

};

