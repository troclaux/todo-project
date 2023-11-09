const dotenv = require('dotenv').config({ path: '../.env' });
const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Get all tasks
app.get('/api/v1/tasks', async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM tasks");
        console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                task: results.rows,
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// Get a single task
app.get('/api/v1/tasks/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        const results = await db.query("SELECT * FROM tasks WHERE id = $1", [req.params.id]);
        console.log('here', results.rows[0]);
        if (results.rows.length === 0) {
            res.status(404).json({
                status: "fail",
                data: {
                    task: "Task Not Found",
                },
            });
        } else {
            res.status(200).json({
                status: "success",
                data: {
                    task: results.rows[0],
                },
            });
        }
    } catch (err) {
        console.log(err);
    }
});

// Create a task
app.post('/api/v1/tasks', async (req, res) => {
    console.log(req.body);
    try {
        const results = await db.query("INSERT INTO tasks (user_id, description, completed) values ($1, $2, $3) RETURNING *", [req.body.user_id, req.body.description, req.body.completed]);
        console.log(results);
        res.status(201).json({
            status: "success",
            data: {
                task: results.rows[0],
            },
        });
    } catch (err) { 
        console.log(err); 
    } 
});

// Update a task
app.put('/api/v1/tasks/:id', async (req, res) => {
    console.log(req.body);
    try {
        const results = await db.query("UPDATE tasks SET description = $1, completed = $2 WHERE id = $3 RETURNING *", [req.body.description, req.body.completed, req.params.id])

        console.log({ results });

        if (results.rows.length === 0) {
            res.status(404).json({
                status: "fail",
                data: {
                    task: "Task Not Found",
                },
            });
        } else {
            res.status(200).json({
                status: "success",
                data: {
                    task: results.rows[0],
                },
            });
        }
    } catch (err) {
        console.log(err);
    }
});

// Delete a task
app.delete('/api/v1/tasks/:id', async (req, res) => {
    console.log(req.body);
    try {
        const results = await db.query("DELETE FROM tasks WHERE id = $1", [req.params.id]);

        res.status(204).json({
            status: 'success',
        });

    } catch (err) {
        console.log(err);
    }
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
