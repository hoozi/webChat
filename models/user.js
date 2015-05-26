/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-05-26 10:55:51
 * @version : 0.0.1
 */
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema;

var userSchema = new Schema({
	userName: String,
	passWord: String,
	friends:[{userName:String,id:String}]
})

mongoose.model('user', userSchema);