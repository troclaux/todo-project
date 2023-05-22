const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 3001;

app.get('/lists', (req, res) => {
    res.status(200).json({
        lists: ["list1", "list2", "list3"],
        tasks: ["task1", "task2", "task3"]
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});