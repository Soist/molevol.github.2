const express = require("express");
const router = express.Router();
const multer = require("multer");

const clientExcelUpload = require("../middlewares/excelUpload");

router.get("/", (req, res) => {
  res.send("upload file here");
});

router.post(
  "/",
  clientExcelUpload.single("clientExcel"),
  function (req, res) {
    res.send(req.file);
  },
  (error, req, res, next) => {
    console.log(`req: ${JSON.stringify(req)}`);
    console.log(`res: ${JSON.stringify(res)}`);
    res.status(400).send({ error: error.message });
  }
);

module.exports = router;
