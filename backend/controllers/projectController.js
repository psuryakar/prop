// controllers/projectController.js
const Project = require('../models/ProjectModel');

exports.getAllProjects = (req, res) => {
    Project.getAll((err, projects) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(projects);
    });
};

exports.getProjectById = (req, res) => {
    const projectId = req.params.id;
    Project.getById(projectId, (err, project) => {
        if (err) {
            if (err.message === 'Project not found') {
                return res.status(404).json({ message: err.message });
            }
            return res.status(500).json({ error: err.message });
        }
        res.json(project);
    });
};

exports.createProject = (req, res) => {
    const newProject = req.body;
    Project.create(newProject, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Project created successfully', id: result.insertId });
    });
};

// Add update and delete controllers as needed
