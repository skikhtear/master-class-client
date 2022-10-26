import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const SummaryCard = ({ course }) => {
    const { id, name, picture, about } = course;
    return (
        <div>
            <Card key={id}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Link to={'/courses'}>
                        <Button variant="primary">All Courses</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SummaryCard;