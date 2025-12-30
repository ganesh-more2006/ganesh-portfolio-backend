const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, 'Please add a project title'] 
    },
    description: { 
        type: String, 
        required: [true, 'Please add a description'] 
    },
    techStack: { 
        type: [String], 
        required: true 
    },
    githubLink: { 
        type: String 
    },
    liveLink: { 
        type: String 
    },
    imageUrl: { 
        type: String,
        default: 'https://via.placeholder.com/150' 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Project', projectSchema);