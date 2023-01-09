// import express
import express from "express";
 
// import function from controller
import { showHotels, showHotelByName, createHotel, deleteHotel } from "../controllers/hotel.js";
 
// init express router
const router = express.Router();
 
// Get All Product
router.get('/hotels', showHotels);
 
// Get Single Product
router.get('/hotels/:name', showHotelByName);
 
// EI TÖÖTA VIST :D
router.post('/hotels', createHotel);
 
/* Update Product
router.put('/products/:id', updateProduct);
 */
// Delete Product
router.delete('/hotels/:id', deleteHotel);
 
// export default router
export default router;