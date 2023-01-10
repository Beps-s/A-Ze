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
    let email = req.body.email
    let dbData
    getUser(email, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}