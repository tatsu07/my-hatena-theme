'use strict';

var gruntConfig = {
  sass: {
    dist:{
      options:{
        style:'compressed'
      },
      files:{
        'blog.css':'mixin.scss'
      }
    }
  },
  uncss: {
    dist: {
      options: {
        ignore: [/entry-content/, /page-archive/, /page-about/, /#zenback/,
          /blog-description/, /entry-see-more/, /hatena-bookmark-count/, /search-module-input/, 
          /search-module-button/, /comment-user-id/, /hatena-id-link/, /archive-entry/],
        stylesheets: ['blog.css']
      },
      files: {
        'blog.css' : ['hatena.html']
      }
    }
  },
  cssmin: {
    options: {
      shorthandCompacting: true,
      roundingPrecision: -1
    },
    target: {
      files: {
        'blog.min.css' : ['blog.css', 'header.css', 'archive.css']
      }
    }
  }
};


module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig(gruntConfig);

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.registerTask('default', ['sass', 'uncss', 'cssmin']);
};
