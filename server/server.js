require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const authMiddleware = require("./middlewares/auth-middleware");

// Lets Tackle Cors
const corsOptions = {
  origin: "http://localhost:5173" || "https://it-solutions-five.vercel.app/" ,
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute); // Ensure this matches the frontend request

// Admin Routes
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

const PORT = 5000;
// Connect to MongoDB
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => {
  console.error('Error connecting to the database:', error);
});
