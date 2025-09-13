const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const DATA_PATH = path.join(__dirname, 'company-site-editor', 'data', 'site-data.json');

app.use(express.json());
app.use(express.static(__dirname)); // Serve static files

// Get JSON data
app.get('/api/data', (req, res) => {
    fs.readFile(DATA_PATH, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read data.' });
        res.json(JSON.parse(data));
    });
});

// Save JSON data
app.post('/api/data', (req, res) => {
    fs.writeFile(DATA_PATH, JSON.stringify(req.body, null, 2), err => {
        if (err) return res.status(500).json({ error: 'Failed to save data.' });
        res.json({ success: true });
    });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));