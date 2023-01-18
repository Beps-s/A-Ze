import db from "../config/db.js";

export const insertInvoice = (data, result) => {
    db.query(`INSERT INTO arve set?`, [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}

export const getLatestInvoiceId = (result) => {
    db.query(`select MAX(Arve_ID) FROM arve LIMIT 1`, (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}