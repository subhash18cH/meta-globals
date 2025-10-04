import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./db/db.js";
import userRoutes from "./routes/user.routes.js";
dotenv.config();
const app = express();
connectToDB();
const PORT = process.env.PORT || 3000;
const Frontend_url = process.env.FRONTEND_URL;
app.use(express.json());
app.use(cors({
    origin: Frontend_url,
    credentials: true
}));
app.use("/api/auth", userRoutes);
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
//# sourceMappingURL=index.js.map