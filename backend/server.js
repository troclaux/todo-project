const dotenv = require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

// app.use(morgan('dev';));
app.use(express.json());

// Get all lists
app.get('/api/v1/lists', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            lists: ["list1", "list2", "list3"],
        },
    });
});

// Get a single list
app.get('/api/v1/lists/:id', (req, res) => {
    console.log(req.params);
    res.status(200).json({
        status: 'success',
        data: {
            list: 'shopping',
        },
    });
});

// Create a list
app.post('/api/v1/lists', (req, res) => {
    console.log(req.body);
});

// Update a list
app.put('/api/v1/lists/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            list: 'shopping',
        },
    });
});

// Delete a list
app.delete('/api/v1/lists/:id', (req, res) => {
    res.status(204).json({
        status: 'success'
    });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
