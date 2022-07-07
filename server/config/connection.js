//requires mongoose
const mongoose = require('mongoose');

//connecting to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/Reel-Me-In-2',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
//exporting to server.js
module.exports = mongoose.connection;