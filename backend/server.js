const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
connectDB();
app.use(express.json());
app.use("/api/student", studentRoutes),
app.use(cors());

app.get("/", (req, res) => {
 res.send("Student Management System API is running");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});
