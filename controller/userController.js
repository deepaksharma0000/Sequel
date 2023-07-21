var db =require('../modle/app.js');
const User=db.user;

const {Sequelize} =require('sequelize');
var addUser=async(req,res)=>{
    // let data = await User.build({name:'Ram',email:'ram@gmail.com'});
    // await data.save();
    let data =await User.create({name:'Shyam',email:'shyam@gmail.com'});
   
    data.name='Sita';
    data.save();
    console.log(data.dataValues);
    let response ={
        data:'ok'
    } 
    res.status(200).json(response);
}
var crudOperation=async(req,res)=>{
    // Insert
    // let datas=await User.create({name:'Manoj',email:'manoj@gmail.com',gender:'Male'},{
    //     fields:['name','email','gender']
    
    //     });

    // Update
    // let data =await User.update({name:'Mahi',email:'mahi@gmail.com',gender:"Female"},{
    //     where:{
    //         id:3
    //     }
    // });

    //Delete 
    // let data = await User.destroy({
    //     where:{
    //         id:4
    //     }
    // });

    //Truncate

    // let data =await User.destroy({
    //     truncate:true
    // });

    //Bulk Insert
    // let data=await User.bulkCreate([
    //     {name:'Ram',email:'ram@gmail.com',gender:'Male'},
    //     {name:'Sita',email:'sita@gmail.com',gender:'Female'},
    //     {name:'Shyam',email:'shyam@gmail.com',gender:'Male'},
    //     {name:'Mahesh',email:'mahesh@gmail.com',gender:"Male"},
    //     {name:'Priya',email:'priya@gmail.com',gender:'Female'}
    // ]);

    //Find
    let data=await User.findAll({});
    let response={
        data:data
    }
    res.status(200).json(response);
}
var queryData=async(req,res)=>{
    // let data=await User.findAll({
    //     attributes:[
    //         'name','email','gender',
    //         [Sequelize.fn('COUNT',Sequelize.col('email'),'ID'),'EmailCount']
    //     ]
    // })

    // let data=await User.findAll({
    //     where:{
    //         id:1
    //     }
    // });
    let data =await User.count({});
    let response={
        data:data
    }
    res.status(200).json(response);
}
var findData= async (req,res)=>{
    // let data = await User.findAll({});
    // let data =await User.findOne({});
    // let data =await User.findByPk(5);
    // let data = await User.findAndCountAll({
    //     where:{
    //         email:'ram@gmail.com'
    //     }
    // });
    let [data,created]= await User.findOrCreate({
        where:{name:'Annu'},
        defaults:{
            email:'Annu@gmail.com',
            gender:'Female'
        }
    });
     
    let response={
        data:data,
        add:created
    }
    res.status(200).json(response);

}
var GetSetData = async (req,res)=>{
    // let data=await User.findAll({});
    let data= await User.create({name:'Raman',email:'Raman12',gender:"Male"});
    let response={
        data:data
    }
    res.status(200).json(response);

}
var ValidateData= async (req,res)=>{
    let data= await User.create({name:'Ravi',email:'ravi',gender:'Males'});
    let response={
        data:data
    }
    res.status(200).json(response);
}
module.exports={
    addUser,
    crudOperation,
    queryData,
    findData,
    GetSetData,
    ValidateData,
}