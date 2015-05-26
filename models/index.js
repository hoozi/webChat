/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-05-26 11:05:16
 * @version : 0.0.1
 */
var mongoose = require('mongoose')
   ,db = 'mongodb://localhost/data'
mongoose.connect(db);

require('./user')
require('./room')

exports.user = mongoose.model('user');
exports.room = mongoose.model('room');