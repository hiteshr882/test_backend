const express = require('express');
const { UploadFile, Fetch } = require("../controllers/upload");

const router = express.Router();

router.get('/', Fetch)
router.post('/', UploadFile);

module.exports = router;