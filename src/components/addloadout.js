// src/components/AddLoadout.js

import React, { useState } from 'react';
import axios from 'axios';

const AddLoadout = ({ onLoadoutAdded }) => {
    const [name, setName] = useState('');
    const [classType, setClassType] = useState('');
    const [items, setItems] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newLoadout = {
            name,
            class: classType,
            items: items.split(',').map(item => item.trim()),
        };

        try {
            await axios.post('http://localhost:5000/api/loadouts', newLoadout);
            onLoadoutAdded(); // Callback to refresh the loadouts list
            setName('');
            setClassType('');
            setItems('');
        } catch (error) {
            console.error("Error adding loadout:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Loadout</h2>
            <input
                type="text"
                placeholder="Loadout Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Class Type"
                value={classType}
                onChange={(e) => setClassType(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Items (comma separated)"
                value={items}
                onChange={(e) => setItems(e.target.value)}
                required
            />
            <button type="submit">Add Loadout</button>
        </form>
    );
};

export default AddLoadout;
