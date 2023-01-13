// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import Router from "./routes/routes.js";
// import fileupload
import fileUpload from "express-fileupload";


// init express
const app = express();
 
// use express json
app.use(express.json());
 
// use cors
app.use(cors());

// use fileUpload
app.use(fileUpload())

app.use(express.static('images'));

 
// use router
app.use(Router);
 
app.listen(5000, () => console.log('Server running at http://localhost:5000'));