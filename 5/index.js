require('dotenv').config()

const express = require("express");

require("./config/mongoose");
const mainRoute = require("./routes/main");
const userRoute = require("./routes/user");
const middlewares = require("./middlewares");

const app = express();

app.use(middlewares.morgan());
app.use(middlewares.bodyParser());

app.use("/", mainRoute);
app.use("/user", userRoute);

app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server Is Running on PORT ${process.env.PORT}`);
})