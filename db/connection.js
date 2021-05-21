const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/student-api";
mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("database connected")).catch((e) => { console.log("database connection field") });