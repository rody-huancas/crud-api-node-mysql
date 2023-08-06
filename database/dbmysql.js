const mysql = require('mysql2');

// conexion a la bd
module.exports = () => {
    return mysql.createConnection({
        host: process.env.MYSQL_HOST, //localhost
        port: process.env.MYSQL_PORT, //3306
        user: process.env.MYSQL_USER, //root
        database: process.env.MYSQL_DBNAME, //crud_node
        password: process.env.MYSQL_PASSWORD //tu contraseña
    });
}