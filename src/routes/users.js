var express = require('express');
var router = express.Router();

/* /users */
router
    .get('/login')
    .post("/login")
    .get("/profile/:id")
    .get('/registro')
    .post("/storeUsers")
    .get("/logout")
    .put("/updateUser/:id")

module.exports = router;
