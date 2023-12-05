import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

(
    async (): Promise<void> => {
        const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
        const options = { autoIndex: true };
        try {
            mongoose.set("strictQuery", false);
            await mongoose.connect(uri, options,);
            console.log('successfully connect to services database'.toUpperCase());
        } catch (error) {
            console.log('mongoose error: '.toUpperCase(), error);
        }
    }
)
    ();