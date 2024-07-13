const mongoose = require("mongoose");

//Defining the Schema.
//schema defines document properties through an object where the key name corresponds to the property name in the collection.
const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minLength: 3,
        maxLength: 20,
        trim: true,
        validate: { //Validation function
            validator: function(value){
                const nameRegex = /^[a-zA-Z\s]*$/;
                return nameRegex.test(value);
            },
            message: "First name MUST only contain alphabetic characters"
        }
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: false
    }
});

//Exporting a model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;