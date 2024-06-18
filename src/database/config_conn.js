const pg = require('pg')
const { Pool } = pg
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mydatabase',
    password: 'mypassword',
    port: 5432
})
const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/api/v1/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users')
        res.json(result.rows)
        } catch (err) {
            console.error(err)
            res.status(500).json({ message: 'Internal Server Error' })
        }   
})
app.post('/api/v1/users', async (req, res) => {
    try {
        const { firstname, email, lastname,age, phone, statue } = req.body
        const result = await pool.query(`INSERT INTO users (email, firstname, lastname, age, phone, statue, created) VALUES ($1,
            $2, $3, $4, $5, $6, $7) RETURNING *`, [email, firstname, lastname, age, phone, statue, now()])
            res.json(result.rows[0])
            } catch (err) {
                console.error(err)
                res.status(500).json({ message: 'Internal Server Error' })
            }
        })
app.get('/api/v1/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id
            ])
            if (result.rows.length === 0) {
                res.status(404).json({ message: 'User not found' })
                } else {
                    res.json(result.rows[0])
                }
                } catch (err) {
                    console.error(err)
                    res.status(500).json({ message: 'Internal Server Error' })
                }
})
app.put('/api/v1/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const { name, phone } = req.body
        const result = await pool.query(`UPDATE users SET firstname=$1, phone=$2 WHERE id = $3`, [name, phone, id
        ])
        if (result.rows.length === 0) {
            res.status(404).json({ message: 'User not found' })
            } else {
                res.json(result.rows[0])
            }
            } catch (err) {
                console.error(err)
                res.status(500).json({ message: 'Internal Server Error' })
            }
})

