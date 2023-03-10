const { Router } =  require("express");



const { saveImage, getImage } = require("../controllers/images.controller")

const router = Router();

router.get("/api/:name", getImage)

router.post("/api/images", saveImage)

module.exports = router;
