const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/user");
const router = express.Router();
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");

const userController = require("../controllers/user");

// Signup Routes
router
  .route("/signup")
  .get(userController.renderSignupForm) // render signup form
  .post(wrapAsync(userController.signup)); // signup route

// Login Routes
router
  .route("/login")
  .get(userController.renderLoginForm) // render login form
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(userController.login)
  ); // login route

router.get("/logout", userController.logout);

module.exports = router;
