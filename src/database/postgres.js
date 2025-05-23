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
// var query = "select * from users";
// var query = "insert into users(email,firstname,lastname,age,status,phone,created) values('hunney@email.com','hunney','Bahadur','3','1','9998778777',now())";
// DB.query(query,(err,result)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(result)
// })
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
/**
 * calling store procedure and display the output of the procedure
 */
let proc_query = "CALL post_insert_users('arsh', 'arsh@gmail.com1', '8989898990',0);"
DB.query(proc_query,(err,result)=>{
    if(err){
        console.log(err)
    }
    console.log(result)
});