angular.module('config', [])

.constant('global', {gitrepo:'https://github.com/shawnaparadee/pmt-test'})

.constant('config', {theme:{alias:'spatialdev',name:'Spatial Development International, LLC',url:'http://www.spatialdev.com'},links:{socialmedia:{google:'http://plus.google.com/112965145498262825170',linkedin:'http://linkedin.com/spatial-development-international',github:'http://github.com/spatialdev',twitter:'http://www.twitter.com/spatialdev'}},login:{title:'The Portfolio Mapping Tool (PMT)',subtitle:'Login here to the Portfolio Managment Tool (PMT). This is an AngularJS application, using a modular framework approach.'},about:{info:{enable:true},map:{enable:true,location:{lat:47.6,lng:-122.33,zoom:12}},linechart:{enable:true,labels:['2010','2011','2012','2013','2014'],series:['Staff','Projects','Countries'],data:[[2,4,8,12,16],[2,8,9,12,18],[1,3,6,8,12]]}}})

;