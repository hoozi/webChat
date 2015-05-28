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
	online: {type:Number, default:0},
	userName: String
});

var userSchema = new Schema({
	for_id: String,
	userName: String,
	passWord: String,
	friends:[friendSchema]
})
userSchema.index({userName:1});

mongoose.model('user', userSchema);