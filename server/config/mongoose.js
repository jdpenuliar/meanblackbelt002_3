var mongoose = require("mongoose");
var fs = require("fs");
var models_path = path.join(__dirname,"./../models");
mongoose.connect("mongodb://localhost/meanblackbelt002");
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf(".js")>=0){
		require(models_path+"/"+file);
	}
});