module.exports=(sequelize,dataTypes)=>{
    let nombre="Genre"
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
        name:{
            type:dataTypes.STRING(100),
            allowNull:false,
        },
        ranking:{
            type:dataTypes.INTEGER,
            allowNull:false,
            unique:true,
            unsigned:true
       },
       active:{
        type:dataTypes.INTEGER(1),
        allowNull:false
       }

    }

let config = {
    tableName:"genres",
    timestamps:false
}
const Pelicula=sequelize.define(nombre,columnas,config)
return Pelicula
}
