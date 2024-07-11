const pg = require('pg')
const { Pool } = pg
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'toshu',
    port: 5432
});

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })
   

const CRUD = {
    Read: async (req = "") => {
        try {
            const client = await pool.connect();
            const result = await client.query('SELECT * FROM users');
            // console.log('res',result.rows)
            client.release();
            return result.rows
        } catch (err) {
            console.error(err)
            return err;
        }
    },
    Create: async (req) => {
        try {
            const { firstname, email, lastname, age, phone, statue } = req.body
            const result = await pool.query(`INSERT INTO users (email, firstname, lastname, age, phone, status, created) VALUES ($1,
            $2, $3, $4, $5, $6, $7) RETURNING *`, [email, firstname, lastname, age, phone, statue, 'now()'])
            return result.rows[0];
        } catch (err) {
            console.error(err)
            return err;
        }
    },
    Edit: async (req) => {
        try {
            const id = req.params.id
            const result = await pool.query(`SELECT * FROM users WHERE userid = $1`, [id])
            if (result.rows.length === 0) {
                return 'No user found'
            } else {
                return result.rows[0];
            }
        } catch (err) {
            console.error(err)
            return err;
        }
    },
    Update: async (req) => {
        try {
            const id = req.params.id
            const { name, phone } = req.body
            const result = await pool.query(`UPDATE users SET firstname=$1, phone=$2 WHERE userid = $3`, [name, phone, id
            ])
            return result;
        } catch (err) {
            console.error(err)
            return err;
        }
    },
    Delete: async (req) => {
        try {
            const id = req.params.id
            const result = await pool.query(`DELETE FROM users WHERE userid = $1`, [id])
            if (result.rows.length === 0) {
                return 'No user found'
            } else {
                return result.rows[0];
            }
        } catch (err) {
            console.error(err)
            return err;
        }
    },
    callProcedure: async (req) => {
        try {
            const result = await pool.query(`CALL updateuser($1,$2,$3)`, ['Abhishek',37,3]);
            // console.log('RESULT :',result);
            if (result.rows.length == 0) {
                return 'record updated!'
            } else {
                return 'something wrong!';
            }
        } catch (err) {
            console.error(err)
            return err;
        }
    },
    UserDetail: async () => {
        try {
            const result = await pool.query(`select u.firstname, u.phone, u.age, a.line1 from users u join address a on u.userid=a.userid;`, [])
            return result.rows;
        } catch (err) {
            console.error(err)
            return err;
        }
    }


}
//Insert records
const insert = {
    body: {
        "firstname": "John",
        "email": "john@example.com",
        "lastname": "Doe",
        "age": 30,
        "phone": "1234567890",
        "statue": "1"
    }
}
//edit records
const edit = {
    params: {
        "id": 9
    }
}
//update records
const update = {
    params: {
        "id": 9
    },
    body: {
        "name": "Jane",
        "phone": "9876543210"
    }
}
//delete user
const Delete = {
    params: {
        "id": -1
    }
}
//edit the user
/* let EditUser = CRUD.Edit(edit);
EditUser.then(res=>{
    console.log('Edit ',res);
}) */

//insert user
/* let InsertUser = CRUD.Create(insert);
InsertUser.then(res=>{
    console.log('Insert ',res);
}); */

//update user
/* let updateUser = CRUD.Update(update);
updateUser.then(res=>{
    console.log('update ',res)
}); */

//delete user
/* let deleteUser = CRUD.Delete(Delete);
deleteUser.then(res=>{
    console.log(res);
}) */

//get the user list
let users = CRUD.Read();
/* users.then(res=>{
    console.log('RESS :',res)
}); */

//calling stored procedure
/* let pros_user = CRUD.callProcedure('');
pros_user.then(res=>{
    console.log('Procedure res :',res)
}) */

// calling user details 
let details = CRUD.UserDetail();
details.then(res=>{
    console.log("User Details", res)
})