var sql = require('../db.js');


// Display list of all Authors.
exports.user_list = function(req, res) {
    sql.query("Select * fullname from user where status_id = 3 ", function (err, data) {
        if(err) {
            console.log("error: ", data);
        }
        else{
          console.log('user : ', data);
          res.json(data);
        }
    });
};

exports.user_detail = function(req, res) {
    sql.query("Select * from user where status_id = 3 " + req.params.id, function (err, data) {
        if(err) {
            console.log("error: ", data);
        }
        else{
          console.log('user : ', data);
          res.json(data);
        }
    });
};

exports.user_create_post = function(req, res) {

    var jsondata = req.body;
    sql.query("INSERT INTO user set ?", jsondata, function (err, data) {

        if(err) {
            console.log("error: ", err);
            //result(err, null);
        }
        else{
            console.log(data.insertId);
            res.json(data);
        }
    });
};

exports.user_update_put = function(req, res) {

    var jsondata = req.body;
    sql.query("UPDATE user set ? where id = ? ", [jsondata, req.params.id] , function (err, data) {

        if(err) {
            console.log("error: ", err);
            //result(err, null);
        }
        else{
            res.json(data);
        }
    });
};

exports.user_delete = function(req, res) {

    var jsondata = req.body;
    sql.query("UPDATE user set status_id = ? where id = ? ", [3, req.params.id] , function (err, data) {

        if(err) {
            console.log("error: ", err);
            //result(err, null);
        }
        else{
            res.json(data);
        }
    });
};
