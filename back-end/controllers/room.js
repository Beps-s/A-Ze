import { getRoomsByHotelID, insertRoom } from "../models/roomModel.js";
import { getLatestHotelByOwnerId } from "../models/hotelModel.js"
import { sessions } from "./user.js";

export const createRoom = (req, res) => {
    const data = req.body;
    data.Mugavused = data.Mugavused.toString()

    let id

    sessions.forEach((element) => {
        if (element.sessionID == req.headers.authorization){
            id = element.userID
        }  
    })

    if(!id){
            res.send({error: 'putsis'})
    }

    getLatestHotelByOwnerId(id, (err, results) => {
        if (err){
            res.send({error: 'putsis'}) 
        }else{
            try{
                for(let i = 0; i < parseInt(data.Arv); i++){
                    let insertData = {
                    Toa_ID: results[0].Nimi.replace(' ', '_') + Math.round(Math.random() * 10000),
                    Hind: data.Hind,
                    Liik: data.Liik,
                    Voodikohad: data.Voodikohad,
                    Lisa_voodikohad: data.Lisa_voodikohad,
                    Mugavused: data.Mugavused,
                    Hotelli_ID: results[0].Hotelli_ID
                    }
                    console.log(insertData)
                    insertRoom(insertData, (err, results) => {
                        if (err){
                            res.send(err);
                            return
                        }
                    })
                }
            }catch(err){
                res.send(err)
            }
        }
    });
}

export const showRoomsByHotelId = (req, res) => {
    let id = req.params.id
    getRoomsByHotelID(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}