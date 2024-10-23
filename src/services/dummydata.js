const {v4:uuidv4}=require('uuid');

class DummayDataGenerator{
    static randomDate(start,end){
        return new Date(start.getTime()+Math.random()*(end.getTime()-start.getTime()))
    }

    static generateLeads(){
        const sources = ["Website", "LinkedIn", "Facebook", "Google Ads", "Referral"];
        const statuses = ["New", "Contacted", "Qualified", "Converted", "Lost"];
        const companies = ["Tech Corp", "Marketing Inc", "Sales Pro", "Digital Solutions", "Analytics Co"];
        
        const createdAt = this.randomDate(new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), new Date());
        const isConverted = Math.random() > 0.5;
        
        return {
            id: uuidv4(),
            name: `Lead ${Math.floor(Math.random() * 9000) + 1000}`,
            email: `lead${Math.floor(Math.random() * 9000) + 1000}@example.com`,
            source: sources[Math.floor(Math.random() * sources.length)],
            status: statuses[Math.floor(Math.random() * statuses.length)],
            created_at: createdAt,
            converted_at: isConverted ? new Date(createdAt.getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000) : null,
            company: companies[Math.floor(Math.random() * companies.length)],
            score: Math.floor(Math.random() * 101)
        };
    }

    static generateCampaign(){
        const platforms = ["Facebook", "Google Ads", "LinkedIn", "Twitter"];
        const statuses = ["Active", "Paused", "Completed"];
        
        const startDate = randomDate(new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), new Date());
        const budget = Math.random() * 9000 + 1000;
        
        return {
            id: uuidv4(),
            name: `Campaign ${Math.floor(Math.random() * 9000) + 1000}`,
            platform: platforms[Math.floor(Math.random() * platforms.length)],
            status: statuses[Math.floor(Math.random() * statuses.length)],
            start_date: startDate,
            end_date: new Date(startDate.getTime() + (Math.random() * 60 + 30) * 24 * 60 * 60 * 1000),
            budget: Number(budget.toFixed(2)),
            spend: Number((Math.random() * budget).toFixed(2)),
            impressions: Math.floor(Math.random() * 99000) + 1000,
            clicks: Math.floor(Math.random() * 4900) + 100,
            conversions: Math.floor(Math.random() * 490) + 10
        };
    }

    static generateBulkData(count = 50) {
        return {
            leads: Array.from({ length: count }, () => this.generateLead()),
            campaigns: Array.from({ length: Math.floor(count/5) }, () => this.generateCampaign())
        };
    }
}
module.exports=DummayDataGenerator;