const express = require("express");
const router = express();
router.get("/",(req,res)=>{
res.sendFile("views/index.html",{root:__dirname})
});
module.exports = router;