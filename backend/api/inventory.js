// backend/api/inventory.js

const express = require("express");
const axios = require("axios");
const router = express.Router();
const db = require("./db");

router.get("/:steamId", async (req, res) => {
  const { steamId } = req.params;
  try {
    const response = await axios.get(
      `https://api.steampowered.com/IEconItems_440/GetPlayerItems/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamId}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching inventory:", error);
    res.status(500).json({ error: "Error fetching inventory data" });
  }
});

module.exports = router;
