// import express
import express from "express";
 
// import function from controller
import { showHotels, showHotelByName, createHotel, deleteHotel } from "../controllers/hotel.js";
import { createRoom } from "../controllers/room.js";
import { createUser, loginUser, logoutUser } from "../controllers/user.js";
 
// init express router
const router = express.Router();
 
// Get All hotels
router.get('/hotels', showHotels);
 
// Get Single hotel by name
router.get('/hotels/:name', showHotelByName);
 
// Add hotel
router.post('/hotels', createHotel);

// Delete hotel
router.delete('/hotels/:id', deleteHotel);

/* Update Product
router.put('/products/:id', updateProduct);
 */

// Add room
router.post('/rooms', createRoom);
 
// Add user
router.post('/users', createUser);

// Login
router.post('/sessions', loginUser);

// Log out
router.delete('/sessions', logoutUser)
 
// export default router
export default router;