const express = require("express");
const bodyParser = require("body-parser");
var connection = require("express-myconnection");
var mysql = require("mysql");

const app = express();
app.use(bodyParser.json());

app.use(
    connection(
        mysql,
        {
            host: "localhost", //'localhost',
            user: "userEHX",
            password: "hMmx56FN4GHpMXOl",
            port: 3306, //port mysql
            database: "sampledb",
        },
        "pool"
    )
); //or single

app.post("/add_book", (req, res) => {
    let { book_name, author } = req.body;

    if (!book_name) return res.status(400).json("Book Name cant be blank");
    if (!author) return res.status(400).json("Author cant be blank");

    var data = { book_name: book_name, author: author };

    var query = connection.query(
        "INSERT INTO books set ? ",
        data,
        function (err, rows) {
            if (err) {
                //If error
                res.status(400).json("Sorry!!Unable To Add");
                console.log("Error inserting : %s ", err);
            }
            //If success
            else res.status(200).json("Book Added Successfully!!");
        }
    );
});

app.listen(3000, () => {
    console.log(`app is running on port 3000`);
});
