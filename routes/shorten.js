const express = require("express");
const validUrl = require("valid-url");
const shortid = require("shortid");
const config = require("config");

const router = express.Router();

const Url = require("../models/Url");

router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;

  if (validUrl.isUri(longUrl)) {
    try {
      var data = await Url.findOne({ longUrl: longUrl });
      if (data) return res.status(200).send(data);

      const urlCode = shortid.generate();
      const baseUrl = config.get("baseUrl");

      const shortUrl = baseUrl + "/" + urlCode;

      data = await Url.create({
        urlCode,
        longUrl,
        shortUrl,
      });
      res.status(200).json(data);
    } catch (err) {
      console.error(err.message);
      res.status(500).json("server error");
    }
  } else {
    res.status(401).json("invalid URL");
  }
});

module.exports = router;
