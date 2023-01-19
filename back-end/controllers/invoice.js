import { setInvoicePayed } from "../models/invoiceModel.js";

export const payInvoice = (req, res) => {
    const data = req.body
    setInvoicePayed(data.Arve_ID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.send({success: true})
        }
    })
}