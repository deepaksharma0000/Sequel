module.exports= (Sequelize,DataTypes)=>{
    const User=Sequelize.define("user",{
        name:{
           type: DataTypes.STRING,
           set(value){
            this.setDataValue('name',value);

           },
           get(){
            return this.getDataValue('name');
           }
        },
        email:{
            type:DataTypes.STRING,
            // defaultValue:'Test@gmail.com',
            allowNull:true,
            unique:true,
            set(value){
                this.setDataValue('email',value+'@Gmail.com');
            }
        },
        gender:{
            type:DataTypes.STRING,
            validate:{
                equals:'Male'
            }
        }
    },{
        //timestamps:false
        updatedAt:false,
        createdAt:false
    }
    );
    return User;
}