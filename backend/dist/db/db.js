import mongoose from "mongoose";
export const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("db connected");
    }
    catch (error) {
        console.error(error);
    }
};
//# sourceMappingURL=db.js.map