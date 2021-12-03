import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// Initialize express package
const app = express();
// Set up body-parser
app.use(bodyParser.json({limit: "32mb"}));
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}));
// Set up cors
app.use(cors());

// Connect to MongoDB database
const  CONNECTION_URL = 'mongodb+srv://kazunobu:gansu1806@cluster0.vwoxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000
mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch(err => console.log(err.message))