const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));


app.use('/css', express.static('css'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/guide', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'guide.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.get('/media', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'media.html'));
});

app.get('/social', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'social.html'));
});

app.get('/system', (req, res) => {
    res.sendFile(path.join(__dirname, 'system', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server Running On http://localhost:${PORT} `);
});