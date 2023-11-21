const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let DB = new Schema({
    
  }, {
    collection: "jobss"
  })

module.exports = mongoose.model('jobss',DB)