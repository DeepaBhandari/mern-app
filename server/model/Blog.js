const mongoose = require('mongoose');
const schema = mongoose.schema;

const blogSchema = new Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Blog", blogSchema);