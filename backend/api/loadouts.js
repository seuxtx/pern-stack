// backend/api/loadouts.js

const express = require('express');
const router = express.Router();
const {
    getAllLoadouts,
    getLoadoutById,
    createLoadout,
    updateLoadout,
    deleteLoadout,
} = require('../models/loadoutModel'); // Import the loadout model functions

// Get all loadouts
router.get('/', async (req, res) => {
    try {
        const loadouts = await getAllLoadouts();
        res.json(loadouts); // Send the loadouts as JSON
    } catch (error) {
        console.error('Error fetching loadouts:', error);
        res.status(500).json({ error: 'Failed to fetch loadouts' });
    }
});

// Get loadout by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params; // Get the ID from the route parameters
    try {
        const loadout = await getLoadoutById(id);
        if (loadout) {
            res.json(loadout); // Send the loadout as JSON
        } else {
            res.status(404).json({ error: 'Loadout not found' });
        }
    } catch (error) {
        console.error('Error fetching loadout:', error);
        res.status(500).json({ error: 'Failed to fetch loadout' });
    }
});

// Create a new loadout
router.post('/', async (req, res) => {
    const loadoutData = req.body; // Get loadout data from request body
    try {
        const newLoadout = await createLoadout(loadoutData);
        res.status(201).json(newLoadout); // Send the created loadout as JSON
    } catch (error) {
        console.error('Error creating loadout:', error);
        res.status(500).json({ error: 'Failed to create loadout' });
    }
});

// Update an existing loadout
router.put('/:id', async (req, res) => {
    const { id } = req.params; // Get the ID from the route parameters
    const loadoutData = req.body; // Get updated loadout data from request body
    try {
        const updatedLoadout = await updateLoadout(id, loadoutData);
        if (updatedLoadout) {
            res.json(updatedLoadout); // Send the updated loadout as JSON
        } else {
            res.status(404).json({ error: 'Loadout not found' });
        }
    } catch (error) {
        console.error('Error updating loadout:', error);
        res.status(500).json({ error: 'Failed to update loadout' });
    }
});

// Delete a loadout
router.delete('/:id', async (req, res) => {
    const { id } = req.params; // Get the ID from the route parameters
    try {
        await deleteLoadout(id); // Call the delete function
        res.status(204).send(); // Send a 204 No Content response
    } catch (error) {
        console.error('Error deleting loadout:', error);
        res.status(500).json({ error: 'Failed to delete loadout' });
    }
});

// Export the router
module.exports = router;
