import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import './Login.css';
export default function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const responseFromMutation = await login({
                variables: { email: formState.email, password: formState.password }, 

            });
            const token = responseFromMutation.data.login.token;
            Auth.login(token);

        } catch (err) {
            console.log(err);
        }
    }    
    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={handleFormSubmit}>
                {/* <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p> */}
                <p>
                    <label>Email address</label><br/>
                    <input 
                        type="email"
                        name="email" 
                        placeholder="dracorrisX@theunderworld.com" 
                        onChange={handleChange}
                        required 
                    />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input 
                        type="password" 
                        name="password" 
                        onChange={handleChange}
                        required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                {error ? (
                    <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                ) : null}
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
                
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
};


    



