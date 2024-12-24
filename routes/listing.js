const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingSchema, reviewSchema } = require("../schema");
const Listing = require("../models/listing");
const { isLoggedIn, validateListing } = require("../middleware");
const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });

const listingController = require("../controllers/listing");

router
  .route("/")
  .get(wrapAsync(listingController.index)) // index route
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing) // create route
  );

// New Route
router.get("/new", isLoggedIn, listingController.renderNewListingForm);

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing)) // show route
  .put(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  ) // update route
  .delete(isLoggedIn, wrapAsync(listingController.destroyListing)); // delete route

// Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  wrapAsync(listingController.renderEditListingForm)
);

module.exports = router;
