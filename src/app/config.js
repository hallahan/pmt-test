angular.module('config', [])

.constant('global', {gitrepo:'https://github.com/shawnaparadee/pmt-test'})

.constant('config', {theme:{alias:'bmgf',name:'Bill & Melinda Gates Foundation',url:'http://www.gatesfoundation.org/'},links:{socialmedia:{google:'http://plus.google.com/explore/GatesFoundation',linkedin:'http://www.linkedin.com/company/bill-&-melinda-gates-foundation',github:'',twitter:'http://www.twitter.com/gatesfoundation'}},login:{title:'Welcome to the BMGF Portfolio Mapping Tool (PMT)!',subtitle:'By logging into this demo site you are reaffirming your acceptance of the previously acknowledged terms of use.'},about:{info:{enable:true},map:{enable:true,location:{lat:0.35,lng:26.28,zoom:4}},linechart:{enable:true,labels:['Cassava','Legumes','Maize','Rice','Sorghum','Sweet Potato','Wheat','Yams','Millet'],series:['AGRA','BMGF'],data:[[0,5,8,1,6,8,0,7,8],[15,10,28,5,25,24,7,18,21]],colours:['#A237AB','#40AB37','#C797CD','#CDAC97','#FDF25C','#949FB1','#4D5360']}}})

;