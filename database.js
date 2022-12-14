const {createPool} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "rmysql",
    connectionLimit: 10
})

// ! pool.query(`SELECT * FROM mysql where id = ?`,[1], yazarak istenilen id çağırılır.
pool.query(`SELECT * FROM mysql`, (err, result, fields) => {
    if(err){
        return console.log(err);
    }
    return console.log(result);
})
