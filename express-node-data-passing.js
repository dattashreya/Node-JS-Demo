    const express = require('express');

    const app = express();

    app.get('/', (req, res) => {
    res.send('Hello, World!');
    });
    app.get('/user', (req, res) => {
    res.send('Hello, user!');
    });

    const PORT = process.env.PORT || 3000;  
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
