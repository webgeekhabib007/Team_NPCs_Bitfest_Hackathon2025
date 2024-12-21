const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect('your-mongo-atlas-connection-string', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
    return connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
