const express = require('express');
const collections = express.Router({mergeParams: true});
// const OverwatchControllers = require("./OverwatchHeroControllers.js");

const {
    getAllCollectionsByOverwatch,
    getCollectionByOverwatch,
    createCollection,
    updateCollection,
    deleteCollection,
} =  require('../Queries/Collections');

//localhost:3345/OverwatchHero/:OverwatchsId/Collections
// index
collections.get("/", async (req, res) => {

  const {overwatch_id} = req.params;
  
  const allCollections = await getAllCollectionsByOverwatch(overwatch_id);
  if (!allCollections.error) {
    res.status(200).json(allCollections);
  } else {
    res.status(500).json({ error: "server error!!!" });
  } 
});

//show
//GET /Overwatch/ :id 
collections.get("/:collection_id", async(req, res) => {
  const { overwatch_id, collection_id } = req.params;
 
    const collection = await getCollectionByOverwatch(overwatch_id, collection_id);
    if (collection.error != "error") {
        res.status(200).json(collection);
    } else {
        res.status(404).json({ error: "server error" });
    }
});

  
//create one collection ---> insert into overwatchHero
//POST /OverwatchHero/:id/collections
//localhost:3345/overwatch
          collections.post("/", async (req, res) => {
            const { overwatch_id, collection_id } = req.params;
            const newCollection = await createCollection(req.body, overwatch_id, collection_id);
            if (!newCollection.error) {
                res.status(200).json(newCollection);
            } else {
                res.status(404).json({ error: "server error" });
            }
            
        }); 


//update

collections.put("/:collection_id",
async (req, res) => { 
    const { overwatch_id, collection_id } = req.params;
const updatedCollection = await updateCollection(overwatch_id, collection_id, req.body);
if (!updatedCollection.error) {
    res.status(200).json(updatedCollection);
} else {
    res.status(404).json({ error: "server error" });
}
});



collections.delete("/:overwatch_id", async (req, res) => {
    const { collection_id } = req.params;
    const deletedCollection = await deleteCollection(collection_id);
    if (!deletedCollection.error) {
        res.status(200).json(deletedAlbum);
    } else {
        res.status(404).json({ error: "server error !!!!!!!!!!!" });
    }
}); 

module.exports = collections;
