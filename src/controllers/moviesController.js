const db = require("../database/models")

let moviesController={
    peliculas:(req,res)=>{
        console.log(db.Movie)
      let movies=db.Movie.findAll()
      .then(function(peliculas){
        if(!peliculas){
            return false
        }
        return peliculas
      }
      )
      .catch(function(error){
        console.log(error)
      })
    res.render("moviesList",movies)
    },
    
}