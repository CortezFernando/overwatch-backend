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

  const {overwatchId} = req.params;
  const allCollections = await getAllCollectionsByOverwatch(overwatchId);
  if (!allCollections.error) {
    res.status(200).json(allCollections);
  } else {
    res.status(500).json({ error: "server error" });
  } 
});

//show
//GET /Album/ :id 
collections.get("/:overwatchId", async(req, res) => {
  const { overwatchId, collectionId } = req.params;
 
    const collection = await getCollectionByOverwatch(overwatchId);
    if (collection.error != "error") {
        res.status(200).json(album);
    } else {
        res.status(404).json({ error: "server error" });
    }
});

  
//create one album ----> insert into albums
//POST /album
//localhost:3345/albums
          collections.post("/", async (req, res) => {
            const { overwatchId } = req.params;
            const newCollection = await createCollection(req.body, overwatchId);
            if (!newCollection.error) {
                res.status(200).json(newCollection);
            } else {
                res.status(404).json({ error: "server error" });
            }
            
        }); 


//update

collections.put("/:collectionId",
async (req, res) => { 
    const { overwatchId, collectionId } = req.params;
const updatedCollection = await updateCollection(overwatchId, collectionId, req.body);
if (!updatedCollection.error) {
    res.status(200).json(updatedCollection);
} else {
    res.status(404).json({ error: "server error" });
}
});



collections.delete("/:overwatchId", async (req, res) => {
    const { collectionId } = req.params;
    const deletedCollection = await deleteCollection(collectionId);
    if (!deletedCollection.error) {
        res.status(200).json(deletedAlbum);
    } else {
        res.status(404).json({ error: "server error !!!!!!!!!!!" });
    }
}); 

module.exports = collections;
