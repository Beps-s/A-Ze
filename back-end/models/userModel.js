import db from "../config/db.js";

export const insertUser = (data,result) => {
    db.query("SELECT * from kasutaja WHERE Email = ?", [data.Email], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else if(results == null){
            db.query("INSERT INTO kasutaja SET ?", [data], (err, results) => {
                if(err) {
                    console.log(err);
                    result(err, null);
                } else {
                    result(null, results);
                }
            })
        } else {
            result({Error: 'account already exists'})
        }
    })

    
}
// login
export const getUser = (data, result) => {
    db.query("SELECT Email, parool FROM kasutaja where Email = ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}