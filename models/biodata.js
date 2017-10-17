var mongoose = require('mongoose');


//
var bioDataSchema = mongoose.Schema({
    surName: {
        type: String,
        require: true
    },

    otherNames: {
        type: String,
        require: true
    },

    sex: {
        type: String,
        require: true
    },

    age: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    phoneNumber: {
        type: String,
        require: true
    },

    address: {
        type: String,
        require: true
    },

    matricNumber: {
        type: String,
        require: true
    },

    stateOfOrigin: {
        type: String,
        require: true
    },


    imageUrl: {
        type: String,
        require: true
    },


    create_date: {
        type: Date,
        default: Date.now
    }
});

var bioData = module.exports = mongoose.model('bioData', bioDataSchema);

//Get All Students
module.exports.getStudents = function(callback, limit) {
    bioData.find(callback).limit(limit);
}

module.exports.getStudentById = function(id, callback) {
    bioData.findById(id, callback);
}

module.exports.addStudent = function(student, callback) {
    bioData.create(student, callback);
}

module.exports.updateStudent = function(id, student, options, callback) {
    var query = { _id: id };
    var update = {
        surName: student.surName,
        otherNames: student.otherNames,
        sex: student.sex,
        age: student.age,
        email: student.email,
        phoneNumber: student.phoneNumber,
        matricNumber: student.matricNumber,
        address: student.address,
        stateOfOrigin: student.stateOfOrigin,
        imageUrl: student.imageUrl,
    }
    bioData.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteStudent = function(id, callback) {
    var query = { _id: id };
    bioData.remove(query, callback);
}