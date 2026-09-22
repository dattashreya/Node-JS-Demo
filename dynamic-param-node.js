    const express = require('express');

    const app = express();

    app.get('/', (req, res) => {
    res.send('Hello, World!');
    });
    app.get('/user', (req, res) => {
    res.send('Hello, user!');
    });
    app.get('/user/10', (req, res) => {
    res.send('Hello, user 10!');
    });
    app.get('/user/:id', (req, res) => {
       const id = req.params.id;
       res.send('Hello, user !'+id);
    });
    const PORT = process.env.PORT || 3000;  
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
