import mongoose from 'mongoose';

mongoose.connect(
    // TODO: WHY>>>>>??
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/plantasia",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }
)

module.exports = mongoose.connection; 
