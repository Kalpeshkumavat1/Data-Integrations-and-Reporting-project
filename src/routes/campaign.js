const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');
const ETLService = require('../services/etl');
const AlertService = require('../services/alerts');
const ReportService = require('../services/reports');


router.post('/etl', async (req, res) => {
    try {
        const transformedData = ETLService.transformCampaignData(req.body);
        const campaign = new Campaign(transformedData);
        await campaign.save();
        await AlertService.checkLeadScoreThreshold(campaign);
        res.json({ success: true, campaign });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/report/csv', async (req, res) => {
    try {
        const campaigns = await Campaign.find();
        const filename = `campaigns-report-${Date.now()}.csv`;
        
        await ReportService.generateCsvReport(
            campaigns,
            ['id', 'name', 'platform','status', 'spend', 'clicks'],
            filename
        );
        
        res.download(filename);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;