module.exports = function(grunt) {

// Configuração do projeto
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* uglify */
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
            src: 'src/<%= pkg.name %>.js',
            dest: 'build/<%= pkg.name %>.min.js'
        }
    },

    /* sass */
    sass: {                              // Task
        dist: {                            // Target
            options: {                       // Target options
                style: 'expanded',
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            files: {
                'css/main.css': 'css/main.scss',
            }
        }
    }
});

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['uglify, sass']);

};

