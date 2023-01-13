import { insertUser, getUser } from "../models/userModel.js";

export const createUser = (req, res) => {
    const data = req.body;
    insertUser(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// poolik login

export const loginUser = (req, res) => {
    const data = req.body
    getUser(data.Email, (err, results) => {
        if (err){
            res.send(err);
        }else{
            if (data.parool == results[0].parool && data.Email == results[0].Email){
                let sessionID = Math.round(Math.random() * 100000000)
                sessions.push({user: data.Email, sessionID: sessionID, userID: results[0].Kasutaja_ID})
                res.json({sessionID: sessionID});
            } else {
                res.json({ error: "Vale e-mail või parool"})
            }
        }
    });
}

export const logoutUser = (req, res) => {
    const data = req.body
    sessions.forEach((element) => {
        if (
          element.id == data.sessionId
        ) {
            sessions.splice(element);
            return res.status(201).send({ success: true });
        } else {
          return res.status(401).send({ error: "Invalid sessionId or username" });
        }
      });
}

export const sessions = [];