module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
 	concat: {},
     uglify: {},
	clean: ["dist/"],
    imagemin: {
      options: {
        cache: false
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['*.{png,jpg,gif,ico}','gallery/1/*.{png,jpg,gif}','imgs/*.{png,jpg,gif}','retina/*.{png,jpg,gif}'],
          dest: 'dist/img/'
        }]
      }
    },
    cssmin:{},
	htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'dist/index.html',     // 'destination': 'source'
        'dist/contact.html': 'dist/contact.html',
        'dist/about.html': 'dist/about.html',
        'dist/404.html': 'dist/404.html',
      }
    }
  },

  useminPrepare: {
      html: ['dist/index.html','dist/about.html','dist/contact.html','dist/404.html']
    },
    usemin: {
        html: ['dist/index.html','dist/about.html','dist/contact.html','dist/404.html']
    },
copy: {
  main: {
    files: [
      // includes files within path
      {expand: true, src: ['*'], dest: 'dist/', filter: 'isFile'},
      {expand: true, src: ['js/**'], dest: 'dist/'},
      {expand: true, src: ['css/**'], dest: 'dist/'},
      {expand: true, src: ['contact_form/**'], dest: 'dist/'},
      {expand: true, src: ['.htaccess'], dest: 'dist/'}
    ],
  },
},
filerev: {
	      dist: {
	        files: {
	          src: [
	            'dist/css/minified/{,*/}*.css',
	            'dist/js/minified/{,*/}*.js'
	          ]
	        }
	      }
	    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-filerev');

  grunt.registerTask('default', ['clean','copy','useminPrepare','concat','cssmin','uglify','htmlmin','filerev','usemin','imagemin']);

};
