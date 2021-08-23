import React, { useEffect } from 'react';
import { useState } from 'react';
import Club from '../Club/Club';
import './Clubs.css';

const Clubs = () => {
    const [clubs, setClubs] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setClubs(data.teams))
    },[])
   
    return (   
        <div className="container text-center mt-5">
            {
                clubs.map(club => <Club club={club}></Club>)
            }
        </div>      
    );
};

export default Clubs;