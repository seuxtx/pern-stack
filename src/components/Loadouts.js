// src/components/Loadouts.js
import './loadouts.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const loadouts = [
    {
        id: 1,
        name: 'Scout',
        description: 'A fast and agile character who excels at hit-and-run tactics.',
        image: 'https://wiki.teamfortress.com/w/images/0/0f/Scout_icon.png', // Class image
        wikiLink: 'https://wiki.teamfortress.com/wiki/Scout' // Scout wiki link
    },
    {
        id: 2,
        name: 'Soldier',
        description: 'A versatile class that uses rocket launchers for high damage.',
        image: 'https://wiki.teamfortress.com/w/images/4/4e/Soldier_icon.png', // Class image
        wikiLink: 'https://wiki.teamfortress.com/wiki/Soldier' // Soldier wiki link
    },
    {
        id: 3,
        name: 'Pyro',
        description: 'A close-range class that uses fire to deal damage.',
        image: 'https://wiki.teamfortress.com/w/images/6/69/Pyro_icon.png', // Class image
        wikiLink: 'https://wiki.teamfortress.com/wiki/Pyro' // Pyro wiki link
    },
    {
        id: 4,
        name: 'Demoman',
        description: 'An explosive expert who uses grenades and sticky bombs.',
        image: 'https://wiki.teamfortress.com/w/images/1/19/Demoman_icon.png', // Class image
        wikiLink: 'https://wiki.teamfortress.com/wiki/Demoman' // Demoman wiki link
    },
    {
        id: 5,
        name: 'Heavy',
        description: 'A tanky class with a powerful minigun.',
        image: 'https://wiki.teamfortress.com/w/images/9/9b/Heavy_icon.png', // Class image
        wikiLink: 'https://wiki.teamfortress.com/wiki/Heavy' // Heavy wiki link
    },
    {
        id: 6,
        name: 'Engineer',
        description: 'A supportive class that builds turrets and teleports.',
        image: 'https://wiki.teamfortress.com/w/images/4/4f/Engineer_icon.png', // Class image
        wikiLink: 'https://wiki.teamfortress.com/wiki/Engineer' // Engineer wiki link
    },
    {
        id: 7,
        name: 'Medic',
        description: 'A healer who can revive and support teammates.',
        image: 'https://wiki.teamfortress.com/w/images/1/17/Medic_icon.png', // Class image
        wikiLink: 'https://wiki.teamfortress.com/w/images/1/17/Medic_icon.png' // Medic wiki link
    },
    {
        id: 8,
        name: 'Sniper',
        description: 'A long-range marksman with a rifle.',
        image: 'https://wiki.teamfortress.com/w/images/e/e2/Sniper_icon.png', // Class image
        wikiLink: 'https://wiki.teamfortress.com/wiki/Sniper' // Sniper wiki link
    },
    {
        id: 9,
        name: 'Spy',
        description: 'A stealthy class that can disguise as enemies.',
        image: 'https://wiki.teamfortress.com/w/images/3/3e/Spy_icon.png', // Class image
        wikiLink: 'https://wiki.teamfortress.com/w/images/3/3e/Spy_icon.png' // Spy wiki link
    }
];

const Loadouts = ({ loadoutsChanged}) => {
    const [loadouts, setLoadouts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLoadouts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/loadouts');
                setLoadouts(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLoadouts();
    }, [loadoutsChanged]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Loadouts</h1>
            {loadouts.length === 0 ? (
                <p>No loadouts found.</p>
            ) : (
                <ul>
                    {loadouts.map(loadout => (
                        <li key={loadout.id}>
                            <h2>{loadout.name}</h2>
                            <p>Class: {loadout.class}</p>
                            <p>Items:</p>
                            <ul>
                                {loadout.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Loadouts;
