
// const express = require('express');
// const Booking = require('../models/bookingModel');
// const app = express();

// app.get('/api/bookings', async (req, res) => {
//   try {
//     const bookings = await Booking.find().sort({ date: 1 });
//     res.json(bookings);
//   } catch (error) {
//     console.error('Error fetching bookings:', error);
//     res.status(500).json({ message: 'Error fetching bookings' });
//   }
// });

// app.post('/api/bookings', async (req, res) => {
//   try {
//     const { name, email, date, service, stylist } = req.body;
//     const newBooking = new Booking({ name, email, date, service, stylist });
//     await newBooking.save();
//     res.json(newBooking);
//   } catch (error) {
//     console.error('Error saving booking:', error);
//     res.status(500).json({ message: 'Error saving booking' });
//   }
// });




//  const getAllBooks = async (req, res) => {
//     try {
//         const books = await Booking.find().sort({ date: 1 });
//         res.json(books);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//         res.status(500).json({ message: 'Error fetching bookings' });
//       }
//   };


//   const createBook = async (req, res) => {
//     try {
//         const { name, email, date, service, stylist } = req.body;
//         const newBooking = new Booking({ name, email, date, service, stylist });
//         await newBooking.save();
//         res.json(newBooking);
//       } catch (error) {
//         console.error('Error saving booking:', error);
//         res.status(500).json({ message: 'Error saving booking' });
//       }
//   };



  // module.exports = {
  //   getAllBooks,
  //   createBook,
  // };    


// exports.getAllBooking = async (req, res) => {
//     try {
//       const books = await Book.find();
//       res.json(books);
//     } catch (error) {
//       console.error('Error fetching books:', error);
//       res.status(500).json({ message: 'Error fetching books' });
//     }
//   };
  
//   exports.createBooking = async (req, res) => {
//     try {
//       const { title, author, genre } = req.body;
//       const newBook = new Book({ title, author, genre });
//       await newBook.save();
//       res.json(newBook);
//     } catch (error) {
//       console.error('Error creating book:', error);
//       res.status(500).json({ message: 'Error creating book' });
//     }
//   };

const Booking = require('../models/bookingModel'); // Ensure the correct path

// Controller to fetch all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: 1 });
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Error fetching bookings' });
  }
};

// Controller to create a new booking
const createBooking = async (req, res) => {
  try {
    const { name, email, date, service, stylist } = req.body;
    const newBooking = new Booking({ name, email, date, service, stylist });
    await newBooking.save();
    res.json(newBooking);
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Error saving booking' });
  }
};

// Export the controller functions
module.exports = {
  getAllBookings,
  createBooking,
};
