// backend/models/loadoutModel.js

const pool = require('../db'); // Assuming you have your db connection pool set up in db.js

// Get all loadouts
const getAllLoadouts = async () => {
    const result = await pool.query('SELECT * FROM loadouts');
    return result.rows; // Return the rows from the result
};

// Get loadout by ID
const getLoadoutById = async (id) => {
    const result = await pool.query('SELECT * FROM loadouts WHERE id = $1', [id]);
    return result.rows[0]; // Return the single loadout
};

// Create a new loadout
const createLoadout = async (loadoutData) => {
    const { name, class_type, items } = loadoutData; // Destructure the loadout data
    const result = await pool.query(
        'INSERT INTO loadouts (name, class_type, items) VALUES ($1, $2, $3) RETURNING *',
        [name, class_type, items]
    );
    return result.rows[0]; // Return the created loadout
};

// Update an existing loadout
const updateLoadout = async (id, loadoutData) => {
    const { name, class_type, items } = loadoutData; // Destructure the loadout data
    const result = await pool.query(
        'UPDATE loadouts SET name = $1, class_type = $2, items = $3 WHERE id = $4 RETURNING *',
        [name, class_type, items, id]
    );
    return result.rows[0]; // Return the updated loadout
};

// Delete a loadout
const deleteLoadout = async (id) => {
    await pool.query('DELETE FROM loadouts WHERE id = $1', [id]);
};

// Export the model functions
module.exports = {
    getAllLoadouts,
    getLoadoutById,
    createLoadout,
    updateLoadout,
    deleteLoadout,
};
