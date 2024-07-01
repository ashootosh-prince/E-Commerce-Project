const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser')
require('dotenv').config();
const router = require("./routes");



main().then(() => {
    console.log("connection to DB");
})
.catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(process.env.dbUrl);
}

const app =express();
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api",router);

const port = 8080

app.listen(port, () => {
    console.log(`app listening port ${port}`);
});
