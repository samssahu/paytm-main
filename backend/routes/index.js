const express = require('express');
const router = express.Router();


//to handle the all user req 
const userRouter = require("./user");
const accountRouter = require("./account");


router.use("/user",userRouter);
router.use("/account", accountRouter);

module.exports = router;

// /api/v1/user
// /api/v1/transaction ...