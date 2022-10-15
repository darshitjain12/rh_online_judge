const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const problemSchema=new Schema({
    title: String,
    problem_statement: String,
    sample_input: String,
    sample_output: String,
    input: String,
    output: String,
    time_limit: Number,
    memory_limit: Number,
    tags: String,
},{timestamps: true});

const Problem=mongoose.model('Problem', problemSchema);
module.exports = Problem;