/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-05-26 10:55:51
 * @version : 0.0.1
 */
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema;
var friendSchema = new Schema({
	id: Schema.Types.ObjectId,
	userName: String
});

var userSchema = new Schema({
	userName: String,
	passWord: String,
	friends:[friendSchema]
})

mongoose.model('user', userSchema);