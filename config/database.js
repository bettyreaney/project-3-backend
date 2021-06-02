const mongoose = require('mongoose');

const connectionURI = process.env.DATABASE_URI;

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});