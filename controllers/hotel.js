import { getHotels, getHotelByName, insertHotel, deleteHotelById } from "../models/hotelModel.js";
 

export const showHotels = (req, res) => {
    getHotels((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
export const showHotelByName = (req, res) => {
    let name = req.params.name
    name = name.slice(1)
    name = '%' + name + '%'
    getHotelByName(name, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 

export const createHotel = (req, res) => {
    const data = req.body;
    insertHotel(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

 
/* Update Product
export const updateProduct = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}*/
 

export const deleteHotel = (req, res) => {
    const id = req.params.id;
    deleteHotelById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}



