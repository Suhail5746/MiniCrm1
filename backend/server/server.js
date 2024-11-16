require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("../config/db");
const contactRoutes = require("../routes/contactRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", contactRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));