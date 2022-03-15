require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const userRouter = require("./api/users/user.router");


app.use(express.json());
app.use(morgan('dev'));
app.use("/users", userRouter);
app.use((req, res) => {
    res.status(404).json({msg: "404 NOT FOUND"})
})


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`server is runnning on port: ${port}`));

