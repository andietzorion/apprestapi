'use strict';

exports.ok = function(values, res){
    var data = {
        'items':values,
        'status':200
    };

    res.json(data);
    res.end();
};