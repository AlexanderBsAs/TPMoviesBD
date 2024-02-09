
const db = require("../database/models")


let actorsController={
      list:(req,res)=>{
      db.Actor.findAll()
      .then(resultado=>{
        res.render("actorsList",{actores:resultado})
      })
      },

      detail:(req,res)=>{
        let id=req.params.id
        db.Actor.findByPk(id)
        .then(resultado=>{
          res.render("actorsDetail",{actor:resultado})
        })
      }



}

module.exports=actorsController