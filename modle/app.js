const  {Sequelize ,DataTypes }=require('sequelize');

const sequelize=new Sequelize('Sequelize','root','root',{
    host:'localhost',
    dialect:'mysql',
    logging:true,
    pool:{max:10,min:0,idle:10000}
});

sequelize.authenticate()
.then(()=>{
    console.log('connected');
})
.catch(err=>{
    console.log('Error',err);
});
const db ={} ;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user=require('./user.js')(sequelize,DataTypes);
db.sequelize.sync({force:false})
.then(()=>{
    console.log('re-sync');
});
db.user =require('./user.js')(sequelize,DataTypes);
module.exports=db;