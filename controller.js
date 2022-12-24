'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API Berjalan", res)
};

//menampilkan semua data game
exports.tampilsemuagame = function (req, res) {
    connection.query('SELECT * FROM games', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

// Menampilkan semua data Game berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM games WHERE id = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }

        });
};

// menambahkan data game
exports.tambahGame = function (req, res) {
    var id = req.body.id;
    var provider_name = req.body.provider_name;
    var game_name = req.body.game_name;
    var img_url = req.body.img_url;
    var rtp_percentage = req.body.rtp_percentage;
    var bet_start = req.body.bet_start;
    var bet_end = req.body.bet_end;
    var gacor_time_start = req.body.gacor_time_start;
    var gacor_time_end = req.body.gacor_time_end;

    connection.query('INSERT INTO games (id,provider_name,game_name,img_url,rtp_percentage,bet_start,bet_end,gacor_time_start,gacor_time_end) VALUES (?,?,?,?,?,?,?,?,?)',
        [id, provider_name, game_name, img_url, rtp_percentage, bet_start, bet_end, gacor_time_start, gacor_time_end],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambah game Baru", res)
            }
        });

};

// Mengubah Data Berdasarkan ID
exports.editGame = function (req, res) {
    var id = req.body.id;
    var rtp_percentage = req.body.rtp_percentage;
    var bet_start = req.body.bet_start;
    var bet_end = req.body.bet_end;
    var gacor_time_start = req.body.gacor_time_start;
    var gacor_time_end = req.body.gacor_time_end;

    connection.query('UPDATE games SET rtp_percentage =?, bet_start=?, bet_end=?, gacor_time_start=?, gacor_time_end=? WHERE id=?', [rtp_percentage, bet_start, bet_end, gacor_time_start, gacor_time_end,id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Merubah Data Game", res)
            }
        });

};

// Menghapus Data Berdasarkan ID
exports.hapusGame = function (req, res) {
    var id = req.body.id;
    connection.query('DELETE FROM games WHERE id=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menghapus Data Game", res)
            }
        });

};