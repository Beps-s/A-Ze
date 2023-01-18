import db from "../config/db.js";

// get user's reservations
export const getReservationsByUserId = (id, result) => {
    db.query(`SELECT * FROM broneering WHERE Kasutaja_ID = ?`, [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}

export const insertReservation = (data, result) => {
    db.query(`INSERT INTO broneering set ?`, [data], (err, results) => {      
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const insertReservationRoom = (data, result) => {
    db.query(`INSERT INTO broneeritud_tuba set ?`, [data], (err, results) => {      
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}