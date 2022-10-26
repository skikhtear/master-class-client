import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import { FaGoogle, FaGithub,FaUserAlt } from "react-icons/fa";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';




const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const form = location.state?.form?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(form, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
        
    }
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
        <div className='w-50 m-auto mt-5'>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
               <p className='text-light'>Don't have account please register</p>
            <div>
                <ButtonGroup vertical className='mt-5'>
                    <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-2 px-5'><FaGoogle></FaGoogle> Login With Google</Button>
                    <Button onClick={handleGithubSignIn} variant="outline-primary" className='mb-2 px-5'><FaGithub></FaGithub> Login With GitHub</Button>
                    <Link to={'/login'}><Button variant="outline-primary" className='mb-2 px-5'><FaUserAlt></FaUserAlt> Login/Password</Button></Link>
                    <Link to={'/register'}><Button variant="outline-primary" className='px-5'><FaUserAlt></FaUserAlt> Register</Button></Link>
                </ButtonGroup>
           </div>
           
        </div>

    );
};

export default Login;