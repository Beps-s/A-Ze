import { getHotels, getHotelByName, insertHotel, deleteHotelById, getHotelById, getHotelsByOwnerId } from "../models/hotelModel.js";
import { sessions } from "./user.js";
 

export const showHotels = (req, res) => {
    getHotels((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
export const showHotelById = (req, res) => {
    let id = req.params.id
    getHotelById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showHotelsByOwnerId = (req, res) => {
    let id
    sessions.forEach((element) => {
        if (element.sessionID == req.headers.authorization){
            id = element.userID
            console.log(true)
        }  
    })
    if(!id){
            res.send({error: 'putsis'})
    }

    getHotelsByOwnerId(id, (err, results) => {
    if (err){
        res.send({error: 'putsis'}) 
    }else{
        res.json(results)
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
    let data = req.body;
    data.Hotelli_teenused = data.Hotelli_teenused.toString()
    sessions.forEach((element) => {
        if (element.sessionID == data.Omanik){
            data.Omanik = element.userID
        } else{
            res.json({error: 'putsis'})
            return
        }  
    })
    
    insertHotel(data, (err, results) => {
        if (err){
            res.send({error: 'putsis'});
        }else{
            res.json({success: true});
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



