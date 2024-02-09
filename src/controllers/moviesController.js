const db = require("../database/models")

let moviesController={


    /*            LISTADO   DE  PELICULAS                   */

   list:(req,res)=>{
        
      db.Movie.findAll()
      .then(function(movies){
        /* console.log("hola"+movies) */
     res.render("moviesList",{movies})
        
      }
      )
      .catch(function(error){
        res.send(error)
      })
 
    },


    /*           DETALLE DE PELICULA                  */

    detail:(req,res)=>{
        let id=req.params.id
          let generos=   db.Genre.findAll().
            then(resultado=>{
         
            })
        db.Movie.findByPk(id)
        .then(resultado=>{
            res.render("moviesDetail",{movie:resultado})
        })
        
    },


    /*                   PELICULAS ORDENADAS POR FECHA DE ESTRENO                */

    nuevo:(req,res)=>{
    db.Movie.findAll(
        {
            order:[["release_date","DESC"]]
        }
    )
    .then(movies=>{
        res.render("newestMovies", {movies})
    })

    .catch(error=>{
        res.send(error)})
    },


    /*PELICULAS RECOMENDADAS*/

    recommended:(req,res)=>{
        db.Movie.findAll({
            order:[["release_date","DESC"]],
            limit:5
        })
        .then(resultado=>{
            res.render("recommendedMovies",{movies:resultado})
        })
    },

}


module.exports=moviesController