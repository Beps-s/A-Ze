import db from "../config/db.js";

export const insertUser = (data,result) => {
    db.query("INSERT INTO kasutaja SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
// poolik login
export const getUser = (data, result) => {
    db.query("SELECT Email, parool FROM kasutaja where ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}