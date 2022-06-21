const express = require('express');

//Routers
const { recordRouter } = require('./routes/record.routes');

//db conection , utils
const { db } = require('./utils/database.util');

//Init express app
const app = express();

app.use(express.json());

//Define endpoints
app.use('/api/v1/records', recordRouter);

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

try {
    db.sync();
    console.log('Database synchronized successfully.');
} catch (error) {
    console.error('Failed to sync database', error);
}


app.listen(4000, () => {
    console.log('Express app corriendo');
})