import React /*, { useState }*/ from 'react';
// import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
// import { LOGIN } from '../utils/mutations';
// import Auth from '../utils/auth';
import './Login.css';

// const Login = (props) => {
//     const [formState, setFormState] = useState({ email: '', password: '' });
//     // const login, { error } = useMutation(LOGIN);
//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const responseFromMutation = await login({
//                 variables: { email: formState.email, password: formState.password }, 

//             });
//             const token = responseFromMutation.data.login.token;
//             Auth.login(token);

//         } catch (err) {
//             console.log(err);
//         }
//     }
//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormState({
//             ...formState,
//             [name]: value,
//         });
//     };

export default function Login() {
    return (
        <div className='test2'>
            <h2>Login Page</h2>
        </div>
    )
}

    



