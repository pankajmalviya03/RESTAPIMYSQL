var express=require("express")
var route=express.Router()
var getdata=require("../controller/getdata")
route.get('/customer',getdata.getcustomer)
route.post('/customer',getdata.postcustomer)
route.get('/customer/:id',getdata.getbyid)
route.put('/customer',getdata.updatebyid)
route.delete('/customer',getdata.deletebyid)
module.exports=route;