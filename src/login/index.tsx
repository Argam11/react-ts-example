import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import './style.css';

export const Login = () => {
    const reCaptchaRef = useRef<ReCAPTCHA>(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = async () => {
        if (username && password) {


            const recaptchaToken = await reCaptchaRef.current?.executeAsync();
            console.log(11, recaptchaToken);
        }
    };


    return (
        <div className="login-container">
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <ReCAPTCHA
                ref={reCaptchaRef}
                sitekey="6Lct9YYqAAAAACNOIWR482BrqWs9InAiOKH0cM95"
            />
            <button onClick={handleClick}>Login</button>
        </div>
    );
};