const mongoose=require('mongoose')
const schema=mongoose.Schema;

const campaign=new schema({
    id: String,
    name: String,
    platform: String,
    status: String,
    start_date: Date,
    end_date: Date,
    budget: Number,
    spend: Number,
    impressions: Number,
    clicks: Number,
    conversions: Number,
    raw_data: Object,
    processed_at: Date
});

const campaignSchema=mongoose.model('campaigns',campaign)
module.exports=campaignSchema

