const express=require('express');
const app=express();
require('./modle/app.js')
 var userCtrl =require('./controller/userController.js');


app.get("/",(req,res)=>{
    res.send('Server Start....');
});
app.get("/add",userCtrl.addUser);
app.get("/crude",userCtrl.crudOperation);
app.get('/query',userCtrl.queryData);
app.get('/finder',userCtrl.findData);
app.get('/getset',userCtrl.GetSetData);
app.get('/validate',userCtrl.ValidateData);`c`
app.listen(4000,()=>console.log('port 4000 started...'));