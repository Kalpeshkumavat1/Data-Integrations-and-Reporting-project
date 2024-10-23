# EzyMetrics API

EzyMetrics is a Node.js/Express-based API for managing marketing leads and campaign data with ETL capabilities, reporting, and automated alerts.

## 🚀 Features

- Lead and campaign data management
- ETL processing with automatic data transformation
- Automated alerting system for high-value leads and campaign performance
- Report generation in CSV and PDF formats
- MongoDB integration for data persistence
- Email notifications for important alerts

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Gmail account for email notifications

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ezymetrics-api
cd ezymetrics-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
ALERT_EMAIL_RECIPIENT=alerts_recipient@example.com
```

4. Start the server:
```bash
npm start
```

## 🔌 API Endpoints

### Leads

#### POST /api/leads/etl
Transform and store lead data.

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "source": "Website",
  "status": "New",
  "created_at": "2024-01-01T00:00:00Z",
  "company": "Tech Corp"
}
```

#### GET /api/leads/report/csv
Generate and download a CSV report of all leads.

### Campaigns

Similar endpoints are available for campaign data management.

## 📊 Data Models

### Lead
- id: String
- name: String
- email: String
- source: String
- status: String
- created_at: Date
- converted_at: Date
- company: String
- score: Number
- raw_data: Object
- processed_at: Date

### Campaign
- id: String
- name: String
- platform: String
- status: String
- start_date: Date
- end_date: Date
- budget: Number
- spend: Number
- impressions: Number
- clicks: Number
- conversions: Number
- raw_data: Object
- processed_at: Date

## 🔔 Alert System

The system automatically generates alerts for:
- Leads with scores above 80
- Campaigns with cost per conversion exceeding $100

Alerts are:
1. Stored in the database
2. Sent via email to the configured recipient

## 📝 Reports

### Available Formats
- CSV: Detailed data exports
- PDF: Formatted reports with summaries and analytics

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 🔒 Security Considerations

1. Ensure your `.env` file is never committed to version control
2. Use environment variables for all sensitive data
3. Use secure Gmail app passwords instead of account passwords
4. Implement rate limiting for API endpoints (recommended)

## 🚧 Error Handling

The API implements centralized error handling middleware. All errors are:
- Logged to the console
- Returned as JSON responses
- Include appropriate HTTP status codes

## 📦 Dependencies

- express: Web framework
- mongoose: MongoDB ODM
- nodemailer: Email sending
- csv-writer: CSV report generation
- pdfkit: PDF report generation
- uuid: Unique ID generation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Support

For support, email support@ezymetrics.com or open an issue in the GitHub repository.
