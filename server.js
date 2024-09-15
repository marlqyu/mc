const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Enable CORS

// Serve the admin.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('/data', (req, res) => {
    fs.readFile('data.json', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

app.post('/add-lesson', (req, res) => {
    const newLesson = req.body;
    fs.readFile('data.json', (err, data) => {
        if (err) throw err;
        const jsonData = JSON.parse(data);
        jsonData.lessons.push(newLesson);
        fs.writeFile('data.json', JSON.stringify(jsonData), (err) => {
            if (err) throw err;
            res.status(200).send('Lesson added');
        });
    });
});

app.post('/add-problem', (req, res) => {
    const newProblem = req.body;
    fs.readFile('data.json', (err, data) => {
        if (err) throw err;
        const jsonData = JSON.parse(data);
        jsonData.problems.push(newProblem);
        fs.writeFile('data.json', JSON.stringify(jsonData), (err) => {
            if (err) throw err;
            res.status(200).send('Problem added');
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});