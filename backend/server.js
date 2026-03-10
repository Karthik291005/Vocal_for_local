const path = require("path");
const express = require('express');
const http = require('http');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const SellerModel = require('./models/seller_model');
const BuyerModel = require('./models/buyer_model');

const app = express();
const httpServer = http.createServer(app);
require('dotenv').config();

const PORT = process.env.PORT || 6969;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/handicraft_marketplace';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Successfully ✅'))
    .catch(err => console.log(err));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(cors());

// Helper to serve files from your project directory
const serveFile = (file) => (req, res) => {
    res.sendFile(file, {root: path.join(__dirname, '../public')});
};

// Authentication & Registration
app.get('/', serveFile("index.html"));
app.get('/buyer-login', serveFile("buyer-login.html"));
app.get('/buyer-register', serveFile('buyer-register.html'));
app.get('/seller-register', serveFile('seller-register.html'));
app.get('/seller-login', serveFile('seller-login.html'));
app.get('/shipper-register', serveFile('shipper-register.html'));
app.get('/shipper-login', serveFile('shipper-login.html'));

// Core Shop Pages
app.get('/buyer-home', serveFile('buyer-home.html'));
app.get('/categories', serveFile('categories.html'));
app.get('/product', serveFile('product.html'));
app.get('/product-detail', serveFile('product-detail.html'));
app.get('/shipper-dashboard', serveFile('shipper-dashboard.html'));

// User & Order Management
app.get('/cart', serveFile('cart.html'));
app.get('/my-orders', serveFile('my-orders.html'));
app.get('/orders-seller', serveFile('orders-seller.html'));

app.post('/api/auth/register-seller', async (req, res) => {
    try {
        const { name, email, password, phone, city, state, craft, experience, locationType, organization } = req.body;
        if(!name || !email || !password || !phone || !city || !state || !craft || !experience || !locationType) {
            return res.status(400).json({ message : 'Missing mandatory fileds!' });
        }
        const existingSeller = await SellerModel.find({ $or: [{ email }, { phone }] });
        if(existingSeller.length > 0) {
            return res.status(403).json({ message: 'Existing Seller! Please Login!' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new SellerModel({
            name, email, password: hashedPassword, phone, city, state, craft, experience, locationType, organization
        });
        user.save();
        return res.status(200).json({});
    } catch(error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
});

app.post('/api/auth/register-buyer', async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        if(!name || !email || !password || !phone ) {
            return res.status(400).json({ message: 'Missing mandatory fileds!' });
        }
        const existingBuyer = await BuyerModel.find({ $or: [{ email }, { phone }] });
        if(existingBuyer.length > 0) {
            return res.status(403).json({ message: 'Existing user! Please Login!' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new BuyerModel({
            name, email, password: hashedPassword, phone
        });
        user.save();
        return res.status(200).json({});
    } catch(error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
});

app.post('/api/auth/buyer-login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Missing Credentials!' });
        }
        const user = await BuyerModel.findOne({ email: email });
        if(!user) {
            return res.status(401).json({ message: 'Invalid Credentials!' });
        } 
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid Credentials!' });
        } 
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        return res.status(200).json({ token });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/api/auth/seller-login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Missing Credentials!' });
        }
        const user = await SellerModel.findOne({ email: email });
        if(!user) {
            return res.status(401).json({ message: 'Invalid Credentials!' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid Credentials!' });
        } 
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        return res.status(200).json({ token });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
})