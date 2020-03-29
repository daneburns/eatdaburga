const express = require("express")
const router = express.Router()
const orm = require("../config/orm.js")

router.get("/",  function(req, res){
     orm.selectAll(function(result) {
        var data = result;
         res.render("index", {burgers: data})
      });   
})

router.put("/api/devour/:id",  function(req, res){
    console.log(req.params.id)
    orm.updateOne(req.params.id, function(result) {
       var data = result;
        res.render("index", {burgers: data})
     });   
})

router.post("/api/addburg/:val",  function(req, res){
    orm.insertOne(req.params.val, function(result) {
       var data = result;
       res.render("index", {burgers: data})
     }); 
     
})

module.exports = router