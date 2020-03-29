const express = require("express")
const router = express.Router()
const orm = require("../config/orm.js")

router.get("/",  function(req, res){
     orm.selectAll(function(result) {
        var data = result;
         res.render("index", {burgers: data})
      });
    
    
    
})

module.exports = router