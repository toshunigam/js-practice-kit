"use strict";

const pg = require('pg');

const config = {
//   connectionString: 'postgres://username:password@server/database'
  connectionString: 'postgres://postgres:toshu@localhost/postgres'
};

const pool = new pg.Pool(config);

const DB = {
    query: function(query, callback) {
        pool.connect((err, client, done) => {
            if(err) return callback(err)
            client.query(query, (err, results) => {
                done()
                if(err) { console.error("ERROR: ", err) }
                if(err) { return callback(err) }
                callback(null, results.rows)
            })
        });
    }
}
var query = "select * from users";
// var query = "insert into users(userid,email,firstname,lastname,age,status,phone,created) values('4','bambahadur@email.com','Bam','Bahadur','35','1','7898778774',now())";
DB.query(query,(err,result)=>{
    if(err){
        console.log(err)
    }
    console.log(result)
})
// const { Client } = require('pg')
// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'toshu',
//   port: 5432,
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });