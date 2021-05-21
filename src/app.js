const express = require('express');
// const studentRouter = require('../router/student');

const Student = require('../module/student');
console.log(Student);
const app = express();

app.use(express.json());
// app.use(studentRouter);

var port = process.env.PORT || 4000;




// app.get("/student", async (req, res) => {
//     try {
//         const data = await Student.find();
//         res.status(201).send(data);

//     } catch (error) {
//         res.status(500).send(error);

//     }
// });
// app.get("/student/:id", (req, res) => {

//     const _id = req.params.id;

//     Student.findById({ _id })
//         .then(data => res.send(res.json(data)))
//         .catch((r) => { res.status(500).send("error"); });
// });


app.listen(port, () => { console.log(`connection is setup at port ${port}`) });