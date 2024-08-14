import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import showIcon from '../Assets/eye.png';
import hideIcon from '../Assets/eye-slash.png';
import newsImage from '../Assets//newsread.png'; // Import the uploaded image

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const logincred = { email, password };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Attempting login with email:', email);
    try {
      const response = await axios.post('http://localhost:9001/Fitfreak/login', logincred);

      console.log('Response status:', response.status);
      console.log('Response data:', response.data);

      if (response.status === 200) {
        console.log('Login Successful');
        navigate('/home');
      } else {
        console.error('Login Failed:', response.status, response.statusText);
        alert(`Invalid email or password: ${response.data}`);
      }
    } catch (error) {
      console.error('Network Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='bg'>
      <div className="login-container">
        <div className='login-inner'>
          <div className='image-container'>
            <img src={newsImage} alt='News' className='news-image' />
          </div>
          <div className="form-container">
            <h2>Log in or create an account</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email Address:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Password:</label>
                <div className="password-containers">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <img
                    src={showPassword ? hideIcon : showIcon}
                    alt={showPassword ? 'Hide Password' : 'Show Password'}
                    className='password-toggle'
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>
              <button type="submit" className='submit'>Continue</button>
              <h6 className='or'>-----------------------or-------------------------</h6>
              <h6 className='pp'>By continuing, you agree to the Terms of Sale, Terms of Service, and Privacy Policy.</h6>
              <button type="button" className='submit' onClick={() => navigate('/Signup')}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
