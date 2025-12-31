const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config({ path: path.resolve(__dirname, './.env') });


connectDB();


const app = express();

app.use(cors({
  origin: "https://ganesh-portfolio-frontend.vercel.app", 
  methods: ["GET", "POST"]
}));
app.use(express.json());

// 5. Routes
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

// 6. Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`✅ System: Backend is ready for deployment!`);
});