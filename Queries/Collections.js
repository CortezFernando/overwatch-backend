const db =  require("../db/dbConfig.js");

const getAllCollectionsByOverwatch = async (id) => {
  try {
    const allCollections = await db.any("SELECT * FROM collections where overwatch_id= $1", [id]);
    return allCollections;
  } catch (err) {
    return {error: "error"}; //object error : key value of error
  }
};

const getCollectionByOverwatch = async (overwatchId, collectionId) => {
  try {
    const getCollectionByOverwatch = await db.one("SELECT * FROM collections WHERE overwatch_id = $1 and collection_id=$2", [overwatchId, collectionId]);
    
    return getCollectionByOverwatch;
  } catch (error) {
    return {error: "error"}; //object error : key value of error
  }
}

const createCollection = async (collection, overwatchId) => {
  try {
    const newCollection = await db.one(`INSERT INTO collections (name, size, type, color, price, is_owned, image, overwatch_id) VALUES ($1, $2, $3, $4,$5 ,$6, $7, $8) RETURNING *`, [collection.name, collection.size, collection.type, collection.color, collection.price, collection.is_owned, collection.image, overwatchId]);
    return newCollection; 
  } catch (err) {
    return {error: "error"};
   
  }  
  }
 
  const updateCollection = async (overwatchId, collectionId, collection) => {  
    try {
      const updatedCollection = await db.one(`UPDATE collections SET name = $1, size = $2, type = $3, color = $4, price = $5, is_owned = $6, image = $7 WHERE overwatch_id = $8 and collection_id = $9 RETURNING *`, [collection.name, collection.size, collection.type, collection.color, collection.price, collection.is_owned, collection.image, overwatchId, collectionId]); 
        return updatedCollection;
    } catch (err) {
      return {error: "error"};
    }
  }

  
 const deleteCollection = async (id) => {
    try {
      const deletedCollection = await db.one(`DELETE FROM collections WHERE overwatch_id = $1 RETURNING *`, [id]);
      return deletedCollection;
    } catch (err) {
      return {error: "error"}; 
    }
  }


module.exports = {
    getAllCollectionsByOverwatch, 
    getCollectionByOverwatch, 
    createCollection,
    updateCollection,
    deleteCollection,
  };