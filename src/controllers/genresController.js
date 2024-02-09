
const db = require("../database/models")


let genresController={
/* ● /genres (GET)
○ Se deberán listar todos los géneros de la base de datos. Cada género
deberá ser un hipervínculo para ver el detalle del mismo.
○ El controlador deberá utilizar la conexión a la base de datos y el
modelo de Genre ya creado. El método findAll permitirá obtener
todos los géneros de la base de datos.
 */
list:(req,res)=>{
    db.Genre.findAll()
    .then(resultado=>{
        res.render("genresList",{genres:resultado})
    })
    .catch(error=>{
        res.send(error)
    })
},

/*● /genres/detail/:id (GET)
○ Detalle del género. Se deberá mostrar del género correspondiente al
id que aparezca en la URL. Cada género deberá listar sus datos (Id,
name, ranking).
○ El controlador deberá utilizar la conexión a la base de datos y el
modelo de Genre ya creado. De esta manera, el método findByPk
permitirá obtener el género buscado. Recordemos utilizar req.params
para obtener el id de la URL. */

detail:(req,res)=>{
    let id=req.params.id
    db.Genre.findByPk(id)
    .then(resultado=>{
        res.render("genresDetail",{genre:resultado})
    })
    .catch(error=>{
        res.send(error)
    })
}
}


module.exports=genresController