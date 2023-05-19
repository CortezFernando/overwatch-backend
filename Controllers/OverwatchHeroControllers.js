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

 //localhost:3345/OverwatchHero/:OverwatchsId/Collections
OverwatchHero.use("/:getOverwatchId/Collections",CollectionsController)


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
OverwatchHero.get("/:OverwatchId", async(req, res) => {
  const { overwatchId } = req.params;
 
    const  OverwatchHero = await getOverwatchHero(overwatchId);
    if (OverwatchHero.error != "error") {
        res.status(200).json(album);
    } else {
        res.status(404).json({ error: "server error" });
    }
});

  
//create one OverwatchHero ----> insert into OverwatchHero
//POST /OverwatchHero
//localhost:3345/albums
          OverwatchHero.post("/", async (req, res) => {
            const newOverHero = await createOverwatchHero(req.body);
            if (!newOverHero.error) {
                res.status(200).json(newOverHero);
            } else {
                res.status(404).json({ error: "server error" });
            }
            
        }); 


//update

 OverwatchHero.put("/:overwatchId",
    async (req, res) => { 
        const { overwatchId } = req.params;
    const updateHero = await updateOverwatchHero(overwatchId, req.body);
    if (!updatedAlbum.error) {
        res.status(200).json(updateHero);
    } else {
        res.status(404).json({ error: "server error" });
    }
});



OverwatchHero.delete("/:overwatchId", async (req, res) => {
    const { overwatchId } = req.params;
    const deleteHero = await deleteOverwatchHero(overwatchId);
    if (!deleteHero.error) {
        res.status(200).json(deleteHero);
    } else {
        res.status(404).json({ error: "server error" });
    }
}); 

module.exports = OverwatchHero;