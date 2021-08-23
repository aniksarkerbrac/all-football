import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import twitter from '../../Icon/Twitter.png';
import facebook from '../../Icon/Facebook.png';
import youtube from '../../Icon/YouTube.png';
import founded from '../../Icon/found 1.png';
import country from '../../Icon/flag (1) 1.png';
import football from '../../Icon/football (1) 1.png';
import gender from '../../Icon/male-gender-sign 1.png';
import maleImage from '../../Photo/male.png';
import femaleImage from '../../Photo/female.png';
import './ClubDetails.css';


const ClubDetails = () => {
    const { clubId } = useParams();
    const [club, setClub] = useState({});

    const { strTeam, strCountry, strDescriptionEN, strStadiumDescription,strGender, strTeamBadge,strSport,intFormedYear,strTwitter,strWebsite,strYoutube } = club;
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`)
            .then(res => res.json())
            .then(data => setClub(data.teams[0]))
    }, [clubId])
    
    // const strGender  ="Female";
    return (
        <div>
            <Header logo={strTeamBadge}></Header>
            <div className="container mt-5">
                <div className="infoImage-container d-flex justify-content-between">
                    <div className="info-container">
                        <h1>{strTeam}</h1>
                        <p><img src={founded} /> Founded: {intFormedYear}</p>
                        <p><img src={country} /> Country: {strCountry}</p>
                        <p><img src={football} /> Sports Type: {strSport}</p>
                        <p><img src={gender} /> Gender: {strGender}</p>
                    </div>
                    <div className="image-container">
                        {
                            (strGender === 'Male') ? <img src={maleImage} alt="" /> : <img src={femaleImage} alt="" />
                        }
                    </div>
                </div>
                
                <p>{strDescriptionEN}</p>
                <p>{strStadiumDescription}</p>
                <div className="icon mb-5">
                    <Link to={strTwitter}><img src={twitter} alt="" /></Link>
                    <Link to={strWebsite}><img src={facebook} alt="" /></Link>
                    <Link to={strYoutube}><img src={youtube} alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default ClubDetails;