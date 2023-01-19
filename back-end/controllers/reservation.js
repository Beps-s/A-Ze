import { deleteReservationById, getReservationsByUserId, insertReservation, insertReservationRoom } from "../models/reservationModel.js";
import { insertInvoice, getLatestInvoiceId } from "../models/invoiceModel.js";
import { sessions } from "./user.js"

export const showUserReservations = (req, res) => {
    let id = req.headers.authorization
    sessions.forEach((element) => {
        if (element.sessionID == id){
            id = element.userID
            getReservationsByUserId(id, (err, results) => {
                if (err){
                    res.send(err);
                }else{
                    res.json(results);
                }
            });
        } else{
          //  res.json({error: 'putsis'})
        }  
    })
}

export const createReservation = async (req, res) => {
    let data = req.body;
    let arveId
    sessions.forEach((element) => {
        if (element.sessionID == data.SessionID){
            data.SessionID = element.userID
            getLatestInvoiceId(async (err, results) => {
                if(err){
                    res.send({error: 'putsis'});
                }else{
                    console.log(data.SessionID)
                    arveId = Object.values(results[0])[0]
                    let invoiceData = {
                        Arve_ID: arveId + 1,
                        Makse_Liik: data.Makse_Liik,
                        Summa: data.Summa,
                        Sooritatud: 0,
                        Broneeringu_ID: arveId + 1
                    }
        
                    let reservationData = {
                        Broneeringu_ID: arveId + 1,
                        Algus_kuupaev: data.Algus_kuupaev,
                        Lopp_kuupaev: data.Lopp_kuupaev,
                        Inimeste_arv: data.Inimeste_arv,
                        Laste_arv: data.Laste_arv,
                        Arve_ID: arveId + 1,
                        Kasutaja_ID: data.SessionID
                    }
                    
                    let reservationRoomData = {
                        Toa_ID: data.Toa_ID,
                        Broneeringu_ID: arveId + 1
                    }
        
                    console.log(reservationData)
                    console.log(invoiceData)
                    console.log(reservationRoomData)
        
                    try {
                        await insertReservation(reservationData, (err, results) => {
                            if (err){
                                throw err
                            }else {
                                console.log(results)
                            }
                        })
                        await insertInvoice(invoiceData, (err, results) => {
                            if (err){
                                throw err
                            }else {
                                console.log(results)
                            }
                        })
                        await insertReservationRoom(reservationRoomData, (err, results) => {
                            if (err){
                                throw err
                            }else {
                                console.log(results)
                            }
                        })
                        return res.send({success: true}) 
                    } catch (error) {
                        return res.send({error: error})
                    }
                }
            })
        } else{
            return res.json({error: 'putsis'})
        }  
    })

}

export const deleteReservation = (req, res) => {
    const id = req.params.id;
    deleteReservationById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}