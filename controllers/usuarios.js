const mysql = require("../database/dbmysql");

const conn = mysql();

const getUsuarios = async (req, res) => {
    let qr = `SELECT * FROM usuario`;
    conn.query(qr, (err, results) => {
        if (err) console.log(err);
        if (results.length > 0)
            res.send({ message: "Todos los usuarios", data: results });
    });
};

const crearUsuarios = async (req, res) => {
    let nombre = req.body.nombre;
    let email = req.body.email;
    let password = req.body.password;
    let curp = "";
    let role = "admin";

    let qr = `INSERT INTO usuario(nombre, email, password, curp, role)
     VALUES ('${nombre}','${email}','${password}','${curp}','${role}')`;

    conn.query(qr, (err, results) => {
        if (err) console.log(err);
        res.send({ message: "Usuario registrado correctamente", data: results });
    });
};

const actualizarUsuarios = async (req, res) => {
    let qrID = req.params.id;
    let nombre = req.body.nombre;
    let email = req.body.email;
    let password = req.body.password;
    let curp = req.body.curp;
    let role = req.body.role;

    let qr = `UPDATE usuario SET nombre = '${nombre}', email = '${email}', password = '${password}', curp = '${curp}', role = '${role}' WHERE id='${qrID}'`;

    conn.query(qr, (err, results) => {
        if (err) console.log(err);
        res.json({ message: "Usuario actualizado correctamente", data: results });
    });
};

const eliminarUsuarios = async (req, res) => {
    let qrID = req.params.id;

    let qr = `DELETE FROM usuario WHERE id = '${qrID}'`;

    conn.query(qr, (err, results) => {
        if (err) console.log(err);
        res.json({ message: "Usuario eliminado correctamente", data: results });
    });
};

module.exports = {
    getUsuarios,
    crearUsuarios,
    actualizarUsuarios,
    eliminarUsuarios,
};
