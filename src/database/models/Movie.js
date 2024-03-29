module.exports=(sequelize,dataTypes)=>{
    let nombre="Peliculas"
    let columnas={
        id:{
            type:DataTypes.INTEGER,
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
            type:datatypes.DATE,
          allowNull:false,},
          length:{
            type:dataTypes.INTEGER,
            unsigned:true
          },
          genre_id:{
            type:datatypes.INTEGER,

          }

    }

let config = {
    tableName:"movies",
    timestamps:true
}
const Pelicula=sequelize.define(nombre,columnas,config)
return Pelicula
}

