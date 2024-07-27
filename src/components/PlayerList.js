import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players/')
            .then(response => {
                setPlayers(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Player List</h1>
            <ol>
                {players.map(player => (
                    <li key={player.id}>{player.first_name} {player.last_name}</li>
                ))}
            </ol>
        </div>
    );
};

export default PlayerList;
