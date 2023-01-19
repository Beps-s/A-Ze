import db from "../config/db.js";

// get user's reservations
export const getReservationsByUserId = (id, result) => {
    db.query(`select h.*, t.*, b.*, a.* from broneeritud_tuba bt INNER JOIN broneering b ON b.Broneeringu_ID = bt.Broneeringu_ID inner join tuba t ON t.Toa_ID = bt. Toa_ID INNER JOIN hotell h ON h.Hotelli_ID = t.Hotelli_ID INNER JOIN arve a ON b.Arve_ID = a.Arve_ID WHERE b.Kasutaja_ID = ?`, [id], (err, results) => {
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