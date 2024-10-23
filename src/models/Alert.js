const mongoose=require('mongoose');
const schema=mongoose.Schema;

const alert=new schema({
    type: String,
    message: String,
    created_at: Date,
    status: String,
    metadata: Object
});

const alertSchema=mongoose.model('Alerts',alert);
module.exports=alertSchema;