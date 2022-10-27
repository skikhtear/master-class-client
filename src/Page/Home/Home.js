import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const githubProvider = new GithubAuthProvider()

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="12">
                        <div className='text-light'>
                            <h1>Join The Master Class</h1>
                            <h2>Build Your Skill</h2>
                            <h2>Zero TO Hero</h2>
                        </div>
                        <div className='mt-5'>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-4"
                                        src="https://d1lf7jq9a5epx3.cloudfront.net/wp-content/uploads/sites/2/2020/08/ultrafast_blog_1200x600.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-4"
                                        src="https://localadvertisingjournal.com/wp-content/uploads/2018/07/10-Tips-For-Killer-Web-Design-2.jpeg"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-4"
                                        src="https://d6f6d0kpz0gyr.cloudfront.net/uploads/images-archive/Blog/adobe-illustrator-reviewed-title.jpg"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className='mt-5'>
                            <ButtonGroup vertical className='mt-5'>
                                <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-2 px-5'><FaGoogle></FaGoogle> Login With Google</Button>
                                <Button onClick={handleGithubSignIn} variant="outline-primary" className='mb-2 px-5'><FaGithub></FaGithub> Login With GitHub</Button>
                                <Link to={'/login'}><Button variant="outline-primary" className='mb-2 px-5'><FaUserAlt></FaUserAlt> Login/Password</Button></Link>
                                <Link to={'/register'}><Button variant="outline-primary" className='px-5'><FaUserAlt></FaUserAlt> Register</Button></Link>
                            </ButtonGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Home;