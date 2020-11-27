const express = require ('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "CRUDReact"
});

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));

app.post("/api/insert", (req, res) =>{

    const MovieName = req.body.MovieName;
    const MovieReview = req.body.MovieReview;

    const sqlInsert = "INSERT INTO reviewtable(ID,MovieName,MovieReview) VALUES (NULL,?,?)";
    db.query(sqlInsert,[MovieName,MovieReview],(err, result) => {
        console.log(result);
    });
});
   

app.listen(3001, () => {
    console.log("running on port 3001");
});