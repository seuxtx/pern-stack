// backend/index.js

const express = require("express");
const cors = require("cors");
const inventoryRoutes = require("./api/inventory"); // Import the inventory route

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/inventory", inventoryRoutes); // Mount the inventory route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
