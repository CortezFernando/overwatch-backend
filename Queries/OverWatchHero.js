const db = require('../db/dbConfig.js');

const getAllOverwatchHero = async () => {
    try {
        const allOverwatchHero = await db.any("SELECT * FROM overwatch_hero ORDER BY overwatch_id");
        return allOverwatchHero;
    } catch (err) {
        return {error: "error"}; //object error : key value of error
    }
};
const getOverwatchHero = async (id) => {
    try {
        const  getOverwatchHero = await db.one("SELECT * FROM overwatch_hero WHERE overwatch_id = $1", [id]);
        return getOverwatchHero;
    } catch (error) {
        return { error: error }
    }
};

const createOverwatchHero = async (OverwatchHero) => {
    try {
        const newOverHero = await db.one(`INSERT INTO overwatch_hero(name, role, base_of_operations, image) VALUES ($1, $2, $3, $4 ) RETURNING *`, [OverwatchHero.name, OverwatchHero.role, OverwatchHero.base_of_operations, OverwatchHero.image]);
        return newOverHero; 
      } catch (err) {
        return {error: "error"};
       
      }  
      }

const updateOverwatchHero = async (overwatchid, OverWatchHero) => {
    try {
        const updatedHero = await db.one(
            "UPDATE overwatch_hero SET name = $1, role = $2, base_of_operations = $3, image = $4 WHERE  overwatch_id = $5 RETURNING *",
            [OverWatchHero.name, OverWatchHero.role, OverWatchHero.base_of_operations, OverWatchHero.image, overwatchid]
        );
        return updatedHero;
    } catch (error) {
        return { error: error }
    }
}

const deleteOverwatchHero = async (id) => {
    try {
        const deletedHero = await db.one("DELETE FROM overwatch_hero WHERE overwatch_id = $1 RETURNING *", [id]);
        return deletedHero;
    } catch (error) {
        return { error: error }
    }
}

module.exports = {
    getAllOverwatchHero,
     getOverwatchHero,
     createOverwatchHero,
     updateOverwatchHero,
     deleteOverwatchHero,
};