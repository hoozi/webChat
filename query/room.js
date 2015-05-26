/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-05-26 16:06:38
 * @version : 0.0.1
 */
 var Room = require('../models').room;

/**
 * 根据房间ID查找
 * Callback:
 * - err, 数据库异常
 * - room, 房间
 * @param {String} id 房间id
 * @param {Function} cb 回调函数
 */
 exports.getRoomByID = function(id, cb) {
 	Room.findById(id, cb);
 }

 /**
 * 根据房间名查找
 * Callback:
 * - err, 数据库异常
 * - room, 房间
 * @param {String} name 房间名称
 * @param {Function} cb 回调函数
 */
 exports.getRoomByName = function(name, cb) {
 	Room.findOne({'name': name}, cb);
 }
 
 /**
 * 添加房间
 * Callback:
 * - err, 数据库异常
 * @param {String} room_name 房间名称
 * @param {Function} cb 回调函数
 */
 exports.newAndSave = function(room_name, cb) {
 	var room = new Room();
 	room.roomName = room_name;
 	room.save(cb);
 }