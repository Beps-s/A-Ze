import { insertUser, getUser } from "../models/userModel.js";

export const createUser = (req, res) => {
    const data = req.body;
    insertUser(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            let sessionID = Math.round(Math.random() * 100000000)
            getUser(data.Email, (err, results) => {
                if (err){
                    res.send(err);
                }else{
                    sessions.push({user: data.Email, sessionID: sessionID, userID: results[0].Kasutaja_ID})
                    res.json({success: true, sessionID: sessionID});
                }
            })
        }
    })
}

export const loginUser = (req, res) => {
    const data = req.body
    getUser(data.Email, (err, results) => {
        if (err){
            res.send(err);
        }else{
            try{
                if (data.parool == results[0].parool && data.Email == results[0].Email){
                    sessions.forEach((element, index) => {
                        if (element.userID == results[0].Kasutaja_ID){
                            sessions.splice(index, 1)
                        }})
                    let sessionID = Math.round(Math.random() * 100000000)
                    sessions.push({user: data.Email, sessionID: sessionID, userID: results[0].Kasutaja_ID})
                    res.json({sessionID: sessionID});
            } else {
                res.json({ error: "Vale e-mail või parool"})
            }
            }catch(err){
                res.json({error: err})
            }
        }
    });
}

export const logoutUser = (req, res) => {
    const data = req.body
    sessions.forEach((element, index) => {
        if (element.sessionID == data.sessionID) {
            sessions.splice(index, 1);
            console.log(sessions)
            return res.status(201).send({ success: true });
        }
    });
}


export const sessions = [];