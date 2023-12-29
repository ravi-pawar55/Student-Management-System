const express = require('express');
const app = express();
const studentRouter = require('./routes/student');
const adminRouter = require('./routes/admin');
const authRouter = require('./routes/auth');
const dbConnect = require('./config/dbConnect');
require('dotenv').config();

app.use(express.json());
dbConnect();

app.get('/v1/', (req, res) => {
    res.send("API is running");
});

app.use('/v1/auth', require('./routes/auth'));
app.use('/v1/student', studentRouter);
app.use('/vq/admin', adminRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
});