const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
//const projectRoutes = require('./routes/projectRoutes');
const app = express();

app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manager',
    database: 'prop'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected');
});

// Routes
//const userRoutes = require('./routes/userRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const projectRoutes = require('./routes/projectRoutes');

//app.use('/users', userRoutes);
app.use('/properties', propertyRoutes);
app.use('/projects', projectRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

