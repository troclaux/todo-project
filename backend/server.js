const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');

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
app.get('/api/v1/tasks/:id', (req, res) => {
    console.log(req.params);
    res.status(200).json({
        status: 'success',
        data: {
            task: 'shopping',
        },
    });
});

// Create a task
app.post('/api/v1/tasks', (req, res) => {
    console.log(req.body);
});

// Update a task
app.put('/api/v1/tasks/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            task: 'shopping',
        },
    });
});

// Delete a task
app.delete('/api/v1/tasks/:id', (req, res) => {
    res.status(204).json({
        status: 'success'
    });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
