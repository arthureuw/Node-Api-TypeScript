import mongoose from 'mongoose'

export default async () => {
    const {DATABASE_URL} = process.env;
    if(!DATABASE_URL) {
        throw new Error('Error Database URL ! 😡');
    }

    mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to MongoDB');
        }).catch((err) => console.log(err));
}
