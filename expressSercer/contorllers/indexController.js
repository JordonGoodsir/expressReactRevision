const {addThing} = require("../utils/indexUtils") 

const makeThing = (req, res) => {
    
    addThing(req) 
      .then((giftList) => {
        res.status(200);
        console.log(giftList);
        res.send(giftList);
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.send("error");
      }); 

  };
  
module.exports = {
    makeThing
  };