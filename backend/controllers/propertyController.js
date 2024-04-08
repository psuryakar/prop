const Property = require('../models/propertyModel');

exports.getAllProperties = (req, res) => {
    Property.getAllProperties((err, Properties) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(Properties);
    });
};

exports.createProperty = (req, res) => {
    const propertyData = req.body;
    Property.createProperty(propertyData, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Property created successfully' });
    });
};

// Implement other controller functions as needed
