const Contact = require('../models/Contact');


exports.submitMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        // Save the message to MongoDB
        const newMessage = await Contact.create({ name, email, message });
        
        console.log("New contact message received from:", email);
        res.status(201).json({ success: true, data: newMessage });
    } catch (error) {
        console.error("Database Error while saving message:", error.message);
        res.status(500).json({ success: false, error: "Server Error" });
    }
};