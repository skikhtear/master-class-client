import React,{useContext} from 'react';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Master Class</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/courses'>All Courses</Link></Nav.Link>
                            <Nav.Link >Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link >
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login'>Login</Link>
                                            <Link to='/register'>Register</Link>
                                        </>
                                }
                            </Nav.Link>
                            <Nav.Link eventKey={2} >
                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image>
                                    : <FaUser></FaUser>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;