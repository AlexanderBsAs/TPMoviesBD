module.exports=(sequelize,dataTypes)=>{
    let nombre="Actor"
    let columnas={
/*         id int UN AI PK 
created_at timestamp 
updated_at timestamp 
first_name varchar(100) 
last_name varchar(100) 
rating decimal(3,1) 
favorite_movie_id int UN */
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            unsigned:true,
            autoIncrement:true
        },
        created_at:{
            type:dataTypes.DATE,
          },
          updated_at:{
            type:dataTypes.DATE,
          },
        first_name:{
            type:dataTypes.STRING(100),
            allowNull:false,
        },
        last_name:{
            type:dataTypes.STRING(100),
            allowNull:false,
        },
        rating:{
            type:dataTypes.DECIMAL(3,1),
            unsigned:true
       },
      favorite_movie_id:{
        type:dataTypes.INTEGER(1),
      unsigned:true
       }

    }

let config = {
    tableName:"actors",
    timestamps:false
}
const Pelicula=sequelize.define(nombre,columnas,config)
return Pelicula
}
