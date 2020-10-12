const express = require("express");
const validUrl = require("valid-url");
const shortid = require("shortid");
const config = require("config");

const router = express.Router();

const Url = require("../models/Url");

router.post("/shorten", async (req, res) => {
  console.log(req.body);
  const { longUrl } = req.body;
  console.log(longUrl);

  try {
    var data = await Url.findOne({ longUrl: longUrl });
    if (data) return res.status(200).send(data);

    const urlCode = shortid.generate();
    const baseUrl = config.get("baseUrl");

    let shortUrl = baseUrl + "/" + urlCode;
    data = await Url.create({
      urlCode,
      longUrl,
      shortUrl,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json("server error");
  }
});

module.exports = router;
