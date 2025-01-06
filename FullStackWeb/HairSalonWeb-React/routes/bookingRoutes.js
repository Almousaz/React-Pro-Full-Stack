// const express = require('express');
// const bookController = require('../controllers/bookController');
// const router = express.Router();

// router
//     .route('/')
//     .get(bookController,getAllBooks)
//     .post(bookController ,createBook);   
    

// module.exports = router;

// const express = require('express');
// const bookingController = require('../controllers/bookingController');
// const router = express.Router();

// // GET all books and POST a new book
// router
//   .route('/')
//   .get(bookingController.getAllBooking)  // Correct method usage
//   .post(bookingController.createBooking);  // Correct method usage

// module.exports = router;
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController'); // Ensure the correct path

// Route to get all bookings
router.get('/', bookingController.getAllBookings);

// Route to create a new booking
router.post('/', bookingController.createBooking);

module.exports = router;
