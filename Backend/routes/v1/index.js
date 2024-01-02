const express = require("express");

const {userController} = require('../../controllers/user-controller');
const { AuthRequestValidators } = require('../../middleware/auth-request-validator');
const { Addurl, Removeurl,getUrlsOfUser } = require("../../controllers/url-controller");
const {authenticate} = require('../../middleware/authenticate')

const router = express.Router();

router.post("/url",authenticate, Addurl);
router.delete("/url/:id",authenticate, Removeurl);
router.get("url/:id",authenticate, getUrlsOfUser);
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
