const mongoose = require('mongoose');
const validator = require('validator');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(v) {
            if (!validator.isEmail(v)) {
                throw new Error
            }
        }
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        min: [10, "Minimum 10 digit required"]
    }
});
const Student = new mongoose.model("Student", studentSchema);
module.exports = Student;