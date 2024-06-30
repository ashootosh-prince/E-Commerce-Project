const mongoose = require("mongoose");


const dbUrl ="mongodb://127.0.0.1:27017/E-commerce";

main().then(() => {
    console.log("connection to DB");
})
.catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(dbUrl);
}