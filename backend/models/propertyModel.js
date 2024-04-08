const db = require('../config/dbConfig');

class Property {
    static getAllProperties(callback) {
        db.query('SELECT * FROM Properties', callback);
    }

    static createProperty(propertyData, callback) {
        db.query('INSERT INTO Properties SET ?', propertyData, callback);
    }

    // Implement other CRUD operations as needed
}

module.exports = Property;
