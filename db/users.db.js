module.exports = Db;
'use strict';
function Db()
{

    var connection = require('../db/db.js').connection;
    return {

        getUser: function ( sotialId, profileId)
        {
            var sql = `SELECT id, userName, sotialId, photoURL, created FROM  \`users\` 
            WHERE sotialId='${sotialId}' AND profileId ='${profileId}';`;
            connection.query(sql, function (err, data) {
                if (err || data.length < 1) return;
                return data[0];
            })
        },
        addUser: function ( user )
        {
            var sql = `INSERT INTO \`users\` (username, sotialId, profileId, photoURL) VALUES ('${user.username}','${user.sotialId}','${user.profileId}','${user.photoURL}');`;
            connection.query( sql);
        }
    };
}

