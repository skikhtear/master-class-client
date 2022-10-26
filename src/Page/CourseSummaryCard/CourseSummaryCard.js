import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const courseSummaryCard = ({course}) => {
    const { id, name, picture, about } = course;
    return (
        <div>
                    <Card style={{ width: '22rem' }} key={id} >
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {about}
                            </Card.Text>
                    <Link to={`/courses/${id}`}>
                                <Button variant="primary">Course Details</Button>
                            </Link>
                        </Card.Body>
                    </Card>
        </div>
    );
};

export default courseSummaryCard;


