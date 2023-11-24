PORT = 8002;

const { get } = require('http');
let connection = require('./db.js'); // to make a var accessible, use module.exports

//express Setup
let express = require('express');
let app = express();
app.use(express.urlencoded({extended : true}));  //to use .body


//--------------Paths-----------------------
app.get('/', (req, res)=>{
    res.send('Hello');
    console.log(req.body);
    //response.render("home.ejs", {});
});

app.get("/user", (req, res)=>{
    connection.query("SELECT * FROM user;", function(err, resSQL){
        if (err) {
            res.status(400).send(err);  //400 : err
            console.log(err);}
        else {res.status(200);} //200 : OK 
        res.render("userList.ejs", {users:resSQL});
    })
});


app.get("/user/add", (req, res)=>{res.render("userAdd.ejs")});


app.post("/user", (req, res)=>{
    let user = {"lastname": req.body.lastname, 
                "firstname" : req.body.firstname};
    connection.query("INSERT INTO user SET ? ", user, function(err, res){ // "?" replaced with value
        if (err) console.log(err);
    });
    res.redirect("/user");
});

//send update form
app.get("/user/update/:i", (req, res) => {
    let i = req.params.i;
    connection.query("SELECT * FROM user WHERE iduser= ?;", i, function(err, resSQL) {
        if(err) console.log(err);
        res.render("userUpdate.ejs", {"iduser": resSQL[0].iduser, "lastname": resSQL[0].lastname, "firstname":resSQL[0].firstname })
    })
})

//Update user in db
app.post("/user/update", (req, res) => {
    let i = req.body.iduser;
    let user = {"lastname": req.body.lastname, "firstname" : req.body.firstname};
    connection.query("UPDATE user SET ? WHERE iduser = ?;", [user, i], function(err, res2) {if(err) console.log(err);})
    res.redirect("/user");
})

//Delete User
app.get("/user/delete/:i", (req, res) => {
    let i = req.params.i;
    connection.query("DELETE FROM user WHERE iduser= ?;", i, function(err, res2) {if(err) console.log(err);})
    res.redirect("/user");
})


//--------------Server Start-------------------------------------
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});









