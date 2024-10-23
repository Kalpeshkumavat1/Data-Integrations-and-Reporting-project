require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const leadsRouter = require('./routes/leads');
const campaignsRouter = require('./routes/campaign');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/leads', leadsRouter);
app.use('/api/campaigns', campaignsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;