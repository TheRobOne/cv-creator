const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create cv schema
const cvSchema = new Schema({
    user: { type: String },
    cvName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    dateOfBirth: { type: String },
    bio: { type: String },
    contactInfo:{
        mobile: { type: String },
        email: { type: String },
        address: { type: String },
    },
    websites:{
        ownWebsite: { type: String },
        linkedin: { type: String },
        github: { type: String }
    },
    education: { type: [{
        school: { type: String },
        yearFrom: { type: String },
        yearTo: { type: String },
        faculty: { type: String },
        description: { type: String }
    }]},
    experience: { type: [{
        company: { type: String },
        yearFrom: { type: String },
        yearTo: { type: String },
        position: { type: String },
        description: { type: String }
    }]},
    hobbies: { type: Array }
});

const Cv = mongoose.model('Cv', cvSchema);
module.exports = Cv;

module.exports.getUserCvs = (userID, callback) => {
    const query = { user: userID };
    Cv.find(query, callback);
}

module.exports.getUserCvByName = (userID, cvName, callback) => {
    const query = { user: userID, cvName: cvName };
    Cv.findOne(query, callback);
}

module.exports.createCv = (cv, callback) => {
    Cv.create(cv, callback);
}

module.exports.removeCv = (userID, cvName, callback) => {
    const query = { user: userID, cvName: cvName };
    Cv.deleteOne(query, callback);
}