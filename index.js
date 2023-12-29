const express = require('express');
const app = express();
const studentRouter = require('./routes/student');
const adminRouter = require('./routes/admin');
const authRouter = require('./routes/auth');
const dbConnect = require('./config/dbConnect');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dbConnect();

app.get('/v1/', (req, res) => {
    res.send("API is running");
});

app.use('/v1/auth', authRouter);
app.use('/v1/student', studentRouter);
app.use('/v1/admin', adminRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
});