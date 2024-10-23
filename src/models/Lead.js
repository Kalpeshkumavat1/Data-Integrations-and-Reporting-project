const mongoose=require('mongoose')
const schema=mongoose.Schema

const Lead= new schema({
    id:String,
    name:String,
    email: String,
    source: String,
    status: String,
    created_at: Date,
    converted_at: Date,
    company: String,
    score: Number,
    raw_data: Object,
    processed_at: Date
});

const leadSchema=mongoose.model('Leads',Lead);

module.exports=leadSchema;