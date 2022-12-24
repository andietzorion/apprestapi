'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API Berjalan",res)
};

//menampilkan semua data game
exports.tampilsemuagame = function(req,res){
    connection.query('SELECT * FROM games', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};