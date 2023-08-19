


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../actions/userActions';

import "./style.css"


const SignupForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSignup() {
        if (fullName && email && password && confirmPassword) {
            if (password === confirmPassword) {
                const user = {
                    fullName,
                    email,
                    password,
                    accessToken: generateAccessToken(),
                };

                dispatch(setUser(user));
                setError('');
                console.log(success)
                setSuccess('Signup successful! Redirecting to profile page...');
                navigate('/profile');
            } else {
                setError('Passwords do not match');
            }

        } else {
            setError('All fields are mandatory');
        }

    }

    const generateAccessToken = () => {
        // Generate a random 16-byte access token string
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < 16; i++) {
            token += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return token;
    };

    return (
        <div className='signupForm'>
            <div className='signup'>
                <h1>Sign Up</h1>
            </div>
            <div className="input">

                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {error ? <p style={{ color: 'red' }}>{error}</p> : null}
                {/* {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>} */}
                <button onClick={handleSignup}>Sign Up</button>

            </div>

        </div>
    );
};

export default SignupForm;














// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../actions/userActions';

// import './style.css';

// const SignupForm = () => {
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     useEffect(() => {
//         let successTimeout;
//         if (success) {
//             successTimeout = setTimeout(() => {
//                 navigate('/profile');
//             }, 2000);
//         }

//         return () => {
//             clearTimeout(successTimeout);
//         };
//     }, [success, navigate]);

//     function handleSignup() {
//         if (fullName && email && password && confirmPassword) {
//             if (password === confirmPassword) {
//                 const user = {
//                     fullName,
//                     email,
//                     password,
//                     accessToken: generateAccessToken(),
//                 };

//                 dispatch(setUser(user));
//                 setError('');
//                 setSuccess('Signup successful! Redirecting to profile page...');
//             } else {
//                 setError('Passwords do not match');
//             }
//         } else {
//             setError('All fields are mandatory');
//         }
//     }

//     const generateAccessToken = () => {
//         // Generate a random 16-byte access token string
//         const characters =
//             'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         let token = '';
//         for (let i = 0; i < 16; i++) {
//             token += characters.charAt(Math.floor(Math.random() * characters.length));
//         }
//         return token;
//     };

//     return (
//         <div className="signupForm">
//             <div className="signup">
//                 <h1>Sign Up</h1>
//             </div>
//             <div className="input">
//                 <input
//                     type="text"
//                     placeholder="Full Name"
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Confirm Password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 {error ? <p style={{ color: 'red' }}>{error}</p> : null}
//                 {success ? <p style={{ color: 'green' }}>{success}</p> : null}
//                 <button onClick={handleSignup}>Sign Up</button>
//             </div>
//         </div>
//     );
// };

// export default SignupForm;




