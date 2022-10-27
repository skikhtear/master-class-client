import React,{useContext} from 'react';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import './Header.css'
import Toggle from '../../Toggle/Toggle';
import logo from '../../../Assate/Image/logo.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='nav-bar'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <img src={logo} alt="" />
                    <Navbar.Brand  className='me-5 ms-2'>Master Class</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
                            <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
                            <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                            <Toggle></Toggle>
                        </Nav>
                        <Nav>
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
                            <Nav.Link >
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button className='ms-3' variant="light" onClick={handleLogOut}>Log out</Button>
                                        </>
                                        :
                                        <>
                                            <Link className='m-2' to='/login'>Login</Link>
                                            <Link className='m-2' to='/register'>Register</Link>
                                        </>
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