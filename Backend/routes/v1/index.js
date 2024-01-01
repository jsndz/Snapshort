const express = require("express");

const {userController} = require('../../controllers/user-controller');
const { AuthRequestValidators } = require('../../middleware/auth-request-validator');
const { Addurl, Removeurl } = require("../../controllers/url-controller");

const router = express.Router();

router.post("/url", Addurl);
router.delete("/url/:id", Removeurl);
router.post(
    '/signup',
    AuthRequestValidators.validateAuthUser,
    userController.create
    );
router.post
(
    '/signin',
    AuthRequestValidators.validateAuthUser,
    userController.signin
    );

router.get(
    '/isAuthenticated',
    userController.isAuthenticated
)
module.exports = router;
