//Contact Routes
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

//CREATE Functionality - POST method.
router.post("/contact", async(req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save()
        .then((savedContact) => {
            console.log(savedContact);
            res.status(201).json({msg: "Contact saved successfuly"});
        })
        .catch((error) => {
            console.log(error);

            if (error.code === 11000 && error.keyPattern && error.keyPattern.emailAddress) {
                es.status(500).json({msg: "Email Address already in use"});
            }
            res.status(500).json({msg: "Unable to create new contact"});
        })

    }catch(error){
        console.log(error);
        res.status(500).json({msg: "Unable to save new Contact"});
    }
})

//READ Functionality - Read all contacts
router.get("/contact", async (req, res) => {
    try {
        Contact.find()
        .then((contacts) => {
            console.log(contacts);
        })
        .catch((error) => {
            console.log(error);
            ReadableByteStreamController.status(500).json({msg: "Unable to get contacts"})
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg: "Unable to get contacts"})
    }
});

//READ Functionality - Read Single contact
// api/contact/123456
router.get("/contact/:id", async (req, res) => {
    try {
        const id = req.params.id;
        Contact.findById(id)
        .then((contact) => {
            console.log(contact);
            res.status(200).json({contact: contact});
        })
        .catch(error =>{
            console.log(error);
            res.status(500).json({msg: "Unable to find the contact"});
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg: "Unable to find the contact"})
    }
})

//Search functionality - Search contacts
router.get("/search", async (req, res) => {
    try{
        const searchTerm = req.query.searchTerm;
        console.log(searchTerm);

        const searchRegex = new RegExp(searchTerm, "i");

        await Contact.find({
            $or:[
                {firstName: searchRegex},
                {lastName: searchRegex},
                {emailAddress: searchRegex},
            ]
        })
        .then((contacts) => {
            console.log(contacts);
            res.status(200).json({contacts: contacts});
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({msg: "Unable to find contacts"})
        })

    }catch(error){
        console.log(error);
        res.status(500).json({msg: "No matching records found"});
    }
})

// UPDATE Functionality
router.put("/contact/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const updatedContact = req.body;
        await Contact.findOneAndUpdate({_id:id}, updatedContact, {new: true})
        .then((updatedContact) => {
            console.log(updatedContact);
            res.status(200).json({msg: "Contact succesfully updated", contact: updatedContact});
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({msg: "Unable to update Contact"});
        })
    }catch(error) {
        console.log(error);
        res.status(500).json({msg: "Unable to update contact"})
    }
})

router.delete("/contact/:id", async (req, res) => {
    try{

        const id = req.params.id;
        await Contact.findByIdAndDelete(id)
        .then((deletedContact) => {
            console.log(deletedContact);
            res.status(200).json({msg: "Contact successfully deleted", contact: deletedContact});
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({msg: "Unable to delete contact"})
        })

    }catch(error){
        console.log(error);
        res.status(500).json({msg: "Unable to delete contact"})
    }
});

module.exports = router;