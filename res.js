'use strict';

exports.ok = function(values, res){
    var data = {
        'message':values,
        'status':200
    };

    res.json(data);
    res.end();
};