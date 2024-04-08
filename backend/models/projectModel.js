// models/Project.js
const db = require('../config/dbConfig.js');

class Project {
    static getAll(callback) {
        db.query('SELECT * FROM Projects', (err, result) => {
            if (err) {
                return callback(err);
            }
            callback(null, result);
        });
    }

    static getById(id, callback) {
        db.query('SELECT * FROM Projects WHERE id = ?', [id], (err, result) => {
            if (err) {
                return callback(err);
            }
            if (result.length === 0) {
                return callback({ message: 'Project not found' });
            }
            callback(null, result[0]);
        });
    }

    static create(newProject, callback) {
        db.query('INSERT INTO Projects SET ?', newProject, (err, result) => {
            if (err) {
                return callback(err);
            }
            callback(null, result);
        });
    }

    // Add update and delete methods as needed
}

module.exports = Project;
