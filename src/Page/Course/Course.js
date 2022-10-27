import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Pdf from '../../Pdf/Pdf';

const Course = () => {
    const course = useLoaderData();
    const { id, name, picture, about } = course;
    return (
        <div className='mt-5'>
            <Card key={id}>
                <Card.Header> <h3>{name}</h3> </Card.Header>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>Details</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <div className='d-flex justify-content-evenly'>
                        <Link to={'/courses'}>
                            <Button variant="primary">All Courses</Button>
                        </Link>
                        <Link to={'/GetPremiumAccess'}>
                            <Button variant="primary">Get Premium Access</Button>
                        </Link>
                        <Link><Pdf></Pdf></Link>

                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;