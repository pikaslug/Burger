// *********************************************************************
// Edit this file and rename it to "connection.js"
// *********************************************************************
// Set up MySQL connection.
// *********************************************************************
// MySQL
// *********************************************************************
// Set up MySQL connection.
var mysql = require("mysql");
var connection;

//If deploying to Heroku, make sure you set up the JAWSDB add-on.
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "[user name]",
        password: "[pasword]",
        database: "burgers_db"
    });
}

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;