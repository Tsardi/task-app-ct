import { useState } from 'react';
import axios from 'axios';
import User from './User';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://reqres.in/api/login', {
                email,
                password
            });
            console.log("The returned data", response.data)
            const jwtToken = response.data.token;
            setToken(jwtToken)

            sessionStorage.setItem('jwtToken_key',jwtToken);
        } catch (error) {
            console.error('Login failed', error);
        }
    };
    const logoutUser = () => {
        sessionStorage.clear();
        setToken("");
    };

    return (
        <div>
            <h2>Login</h2>
            <h3> Must use this email: eve.holt@reqres.in</h3>
            <h4> the passowrd can be anything </h4>
            <form onSubmit = {handleLogin}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
            <button onClick = {logoutUser}>Logout</button>
            {token &&
            <User />
            }
        </div>
    );
};

export default Login;