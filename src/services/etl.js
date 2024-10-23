const {v4:uuidv4}=require('uuid');

class ETLService{
    static transformLeadData(rawData){
        return {
            id: uuidv4(),
            name: rawData.name,
            email: rawData.email,
            source: rawData.source,
            status: rawData.status,
            created_at: new Date(rawData.created_at),
            converted_at: rawData.converted_at ? new Date(rawData.converted_at) : null,
            company: rawData.company,
            score: this.calculateLeadScore(rawData),
            raw_data: rawData,
            processed_at: new Date()
        };
    }

    static calculateLeadScore(leadData) {
        let score = 50;
        if (leadData.source === 'Website') score += 10;
        if (leadData.company) score += 15;
        if (leadData.converted_at) score += 25;
        return Math.min(score, 100);
    }

    static transformCampaignData(rawData) {
        return {
            id: uuidv4(),
            name: rawData.name,
            platform: rawData.platform,
            status: rawData.status,
            start_date: new Date(rawData.start_date),
            end_date: new Date(rawData.end_date),
            budget: Number(rawData.budget),
            spend: Number(rawData.spend),
            impressions: Number(rawData.impressions),
            clicks: Number(rawData.clicks),
            conversions: Number(rawData.conversions),
            raw_data: rawData,
            processed_at: new Date()
        };
    }
}

module.exports=ETLService;