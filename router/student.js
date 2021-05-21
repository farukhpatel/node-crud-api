const express = require('express');
const app = express();
const router = new express.Router();
// require('../db/connection');
const Student = require('../module/student');
app.use(router);
app.router("/student/:id", async (req, res) => {

    try {
        // const _id = req.params.id;
        // const _id = mongoose.Types.ObjectId(req.params.id)
        var person = await Student.findById({ _id: req.params.id });
        console.log(person);
        res.status(201).send(person);
    } catch (error) {
        res.status(500).send("eroor");
    }
});
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
router.patch("/student/:id", async (req, res) => {
    try {
        const data = await Student.findOneAndUpdate({ _id: req.params.id }, { name: "frk update patel", address: "up" }, { new: true, useFindAndModify: true });
        res.status(201).send(data);

    } catch (error) {
        res.status(500).send("error");
    }
});
router.put("/student/:id", async (req, res) => {
    try {
        const data = await Student.findOneAndUpdate({ _id: req.params.id }, { name: "frk update patel", address: "upadated address" }, { new: true, useFindAndModify: true });
        res.status(201).send(data);

    } catch (error) {
        res.status(500).send("error");
    }
});
router.delete("/student/:id", async (req, res) => {
    try {
        const deleteData = await Student.findOneAndDelete({ _id: req.params.id }, { useFindAndModify: true });
        res.status(201).send(deleteData);
    } catch (error) {
        res.status(500).send("error");
    }
});
module.exports = router;