// src/components/Loadouts.js
import './loadouts.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';



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
