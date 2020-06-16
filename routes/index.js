const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Url = require("../models/Url");

router.get("/:urlCode", async (req, res) => {
  try {
    const urlData = await Url.findOne({ urlCode: req.params.urlCode });

    if (urlData) {
      res.redirect(urlData.longUrl);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
