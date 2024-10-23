const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const ETLService = require('../services/etl');
const AlertService = require('../services/alerts');
const ReportService = require('../services/reports');


router.post('/etl', async (req, res) => {
    try {
        const transformedData = ETLService.transformLeadData(req.body);
        const lead = new Lead(transformedData);
        await lead.save();
        // Check if environment variables are loaded
        console.log('Email User:', process.env.EMAIL_USER); // Should show your email
        console.log('Email Pass exists:', !!process.env.EMAIL_APP_PASSWORD); // Should be true
        await AlertService.checkLeadScoreThreshold(lead);
        res.json({ success: true, lead });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/report/csv', async (req, res) => {
    try {
        const leads = await Lead.find();
        const filename = `leads-report-${Date.now()}.csv`;

        await ReportService.generateCsvReport(
            leads,
            ['id', 'name', 'email', 'source', 'status', 'score'],
            filename
        );

        res.download(filename);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;