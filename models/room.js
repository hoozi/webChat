/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-05-26 11:08:03
 * @version : 0.0.1
 */
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema;

var userSchema = new Schema({
	roomName: String
})

mongoose.model('room', userSchema);