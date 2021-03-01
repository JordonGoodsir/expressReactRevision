const Thing = require("../models/indexModel") 

const addThing = (req) =>{  
    
    let holder = new Thing({ 
        thing: req.body.thing 
    }) 
    holder.save() 

    return holder
} 

module.exports = { 
    addThing
}