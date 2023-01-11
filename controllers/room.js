import { insertRoom } from "../models/roomModel.js";

export const createRoom = (req, res) => {
    const data = req.body;
    insertRoom(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}