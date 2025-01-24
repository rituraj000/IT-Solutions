const Contact = require('../models/contact-model'); // Assuming you have a Contact model

const contactForm = async (req, res) => {
    try {
        const { username, email, message } = req.body;

        // Validate the input
        if (!username || !email || !message) {
            return res.status(400).json({ msg: 'All fields are required' });
        }

        // Save the contact form data to the database
        const newContact = new Contact({
            username,
            email,
            message
        });

        await newContact.save();

        res.status(201).json({ msg: 'Message Sent Successfully', contact: { username, email, message } });
    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

module.exports = contactForm;
