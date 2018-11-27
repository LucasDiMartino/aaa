module.exports = function(grunt)
{
    grunt.initConfig(
    {
        pkg: grunt.file.readJSON('package.json'),
        concat:
        {
            dist:
            {
                src: ['js/*.js', 'tests/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify:
        {
            dist: 
            {
                files:
                {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        qunit:
        {
            files: ['html/*.html']
        },
        jshint:
        {
            files: ['Gruntfile.js', 'js/*.js', 'tests/*.js'],
            options:
            {
                globals:
                {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch:
        {
            options: { livereload: true },
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('test', ['jshint', 'qunit']);

    grunt.registerTask('default', ['concat', 'uglify', 'jshint', 'qunit', 'watch']);
};
