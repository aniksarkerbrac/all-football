import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Club = (props) => {
    const { strTeam, strSport, idTeam, strTeamBadge } = props.club;
    const logoStyle = {
        width: '30%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    }

return (
    <div style={{float:'left'}}>
        <Card style={{ width: '18rem', border: '2px solid #16b13a', padding: '30px',margin:'15px'}}>
            <Card.Img style={logoStyle} variant="top" src={strTeamBadge} />
            <Card.Body>
                <Card.Title>{strTeam}</Card.Title>
                <Card.Text>
                    Sports Type: {strSport}
                </Card.Text>
                <Link to={`/club/${idTeam}`}>
                    <Button variant="success">Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                </Link>
            </Card.Body>
        </Card>
    </div>
);
};

export default Club;