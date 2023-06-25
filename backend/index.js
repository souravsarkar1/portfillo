const express = require('express');
const cors = require('cors')
const { connectiion } = require('./db');
const { messageRoutes } = require('./Routes/message.routes');

require('dotenv').config()
const app = express();
app.use(cors())

app.use(express.json());
app.use('/message' , messageRoutes)

app.listen(process.env.port, async () => {
    try {
        await connectiion;
        console.log("connectd to db");
        console.log(`server is running on port no ${process.env.port}`);

    } catch (error) {
        console.log("Something Went To wrong");
        console.log(err.message);
    }
})