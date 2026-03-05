const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:"Autumleafs@2026",
    database:"resortDB"
})

connection.connect((err) => {
    if(err){
        console.log("Databse connection failed:",err)
    }
    else{
        console.log("connected to mysql");
    }
})
module.exports = connection;