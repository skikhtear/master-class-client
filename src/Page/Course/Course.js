import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Course = () => {
    const course = useLoaderData();
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

export default Course;