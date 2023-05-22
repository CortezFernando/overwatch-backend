const express = require('express');
const OverwatchHero = express.Router();
const CollectionsController = require("./CollectionsController");

const {
    getAllOverwatchHero,
     getOverwatchHero,
     createOverwatchHero,
     updateOverwatchHero,
     deleteOverwatchHero,
} =  require('../Queries/OverWatchHero');
const collections = require('./CollectionsController');

 //localhost:3345/OverwatchHero/:OverwatchsId/Collections
OverwatchHero.use("/:overwatch_id/Collections",CollectionsController)


// index
OverwatchHero.get("/", async (req, res) => {

  const allOverwatchHero = await getAllOverwatchHero();
  if (!allOverwatchHero.error) {
    res.status(200).json(allOverwatchHero);
  } else {
    res.status(500).json({ error: "server error" });
  } 
});

//show
//GET /OverwatchHero/ :id 
OverwatchHero.get("/:overwatch_id", async(req, res) => {
  const { overwatch_id } = req.params;
 
    const  OverwatchHero = await getOverwatchHero(overwatch_id);
    if (OverwatchHero.error != "error") {
        res.status(200).json(OverwatchHero);
    } else {
        res.status(404).json({ error: "server error" });
    }
});

  
//create one OverwatchHero ----> insert into OverwatchHero
//POST /OverwatchHero
//localhost:3345/OverwatchHero
          OverwatchHero.post("/", async (req, res) => {
            const newOverHero = await createOverwatchHero(req.body);
            if (!newOverHero.error) {
                res.status(200).json(newOverHero);
            } else {
                res.status(404).json({ error: "server error" });
            }
            
        }); 


//update

 OverwatchHero.put("/:overwatch_id",
    async (req, res) => { 
        const { overwatch_id } = req.params;
    const updateHero = await updateOverwatchHero(overwatch_id, req.body);
    if (!updateHero.error) {
        res.status(200).json(updateHero);
    } else {
        res.status(404).json({ error: "server error" });
    }
});



OverwatchHero.delete("/:overwatch_id", async (req, res) => {
    const { overwatch_id } = req.params;
    const deleteHero = await deleteOverwatchHero(overwatch_id);
    if (!deleteHero.error) {
        res.status(200).json(deleteHero);
    } else {
        res.status(404).json({ error: "server error" });
    }
}); 

module.exports = OverwatchHero;