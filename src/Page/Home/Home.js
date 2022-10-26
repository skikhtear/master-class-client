import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

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
                    <Col lg="8">
                        
                    </Col>
                    <Col lg="4">
                        <ButtonGroup vertical className='mt-5'>
                            <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-2 px-5'><FaGoogle></FaGoogle> Login With Google</Button>
                            <Button onClick={handleGithubSignIn} variant="outline-primary" className='mb-2 px-5'><FaGithub></FaGithub> Login With GitHub</Button>
                            <Link to={'/login'}><Button variant="outline-primary" className='mb-2 px-5'><FaUserAlt></FaUserAlt> Login/Password</Button></Link>
                            <Link to={'/register'}><Button variant="outline-primary" className='px-5'><FaUserAlt></FaUserAlt> Register</Button></Link>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Home;