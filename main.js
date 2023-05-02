const express = require("express");
const app = express();
const PORT = 8080;
const homeRouter = require("./routers/homepage");
app.use("/",homeRouter)

// Routers
// Listen on port 
app.listen(PORT)
