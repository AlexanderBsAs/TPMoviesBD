module.exports=(sequelize,dataTypes)=>{
    let nombre="Movie"
    let columnas={
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
          title:{
            type:dataTypes.STRING(500),
            allowNull:false,
          },
          rating:{
            type:dataTypes.DECIMAL(3,1),
            allowNull:false,
            unsigned:true
          },
          awards:{
            type:dataTypes.INTEGER,
            allowNull:false,
            unsigned:true,
          },
          release_date:{
            type:dataTypes.DATE,
          allowNull:false,},
          length:{
            type:dataTypes.INTEGER,
            unsigned:true
          },
          genre_id:{
            type:dataTypes.INTEGER,

          }

    }

let config = {
    tableName:"movies",
    timestamps:false
}
const Pelicula=sequelize.define(nombre,columnas,config)
return Pelicula
}

