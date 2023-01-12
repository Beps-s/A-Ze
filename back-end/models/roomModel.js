import db from "../config/db.js";

// Add room
export const insertRoom = (data, result) => {
    db.query("INSERT INTO tuba SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}