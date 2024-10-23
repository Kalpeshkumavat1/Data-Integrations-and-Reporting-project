const Alert=require('../models/Alert')
const transporter=require('../config/email')

class AlertService{
    static async createAlert(type,message,metadata){
        const alert=new Alert({
            type,
            message,
            created_at: new Date(),
            status: 'NEW',
            metadata
        })

        await alert.save();
        await this.sendAlertEmail(alert);
        return alert;
    }

    static async sendAlertEmail(alert){
        const mailOptions={
            from:process.env.EMAIL_USER,
            to:process.env.ALERT_EMAIL_RECIPIENT,
            subject:`EzyMetrics Alert: ${alert.type}`,
            text:alert.message,
            html:`
                <h2>EzyMetrics Alert</h2>
                <p><strong>Type:</strong> ${alert.type}</p>
                <p><strong>Message:</strong> ${alert.message}</p>
                <p><strong>Created At:</strong> ${alert.created_at}</p>
                <p><strong>Metadata:</strong> ${JSON.stringify(alert.metadata)}</p>
            `
        };
        await transporter.sendMail(mailOptions);
    }

    static async checkLeadScoreThreshold(lead) {
        if (lead.score > 80) {
            await this.createAlert('HIGH_SCORE_LEAD', `High-scoring lead detected: ${lead.name}`, { leadId: lead.id });
        }
    }

    static async checkCampaignPerformance(campaign) {
        const costPerConversion = campaign.spend / campaign.conversions;
        if (costPerConversion > 100) {
            await this.createAlert('HIGH_CPC', `High cost per conversion in campaign: ${campaign.name}`, { campaignId: campaign.id });
        }
    }
}

module.exports=AlertService;