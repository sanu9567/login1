import { Button, Card, TextField, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import Image from './Image/blur.png';
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [name]: value }));
  };

  const signUpHandler = () => {
    axios.post("http://localhost:8080/signup", inputs)
      .then((response) => {
        console.log(response.data);
        alert("Sign up successful");
      })
      .catch((err) => {
        console.error(err);
        alert("Sign up failed");
      });
  };

  return (
    <div>
      <img
        src={Image}
        alt="background"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />

      <Card variant='outlined' style={{
        padding: '40px',
        margin: 'auto',
        marginTop: '100px',
        alignContent: 'center',
        width: '300px',
        backgroundColor: '',
        border: '0.5px solid black',
        cursor: 'pointer',
        borderRadius: '30px',
        opacity: '90%',
      }}>
        <Typography variant='h3'>SIGN UP</Typography><br /><br />
        <TextField
          label="First Name"
          name="firstName"
          value={inputs.firstName}
          onChange={inputHandler}
          variant='standard'
          InputProps={{
            startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>),
          }}
          style={{ cursor: 'pointer' }}
        /><br /><br />
        <TextField
          label="Last Name"
          name="lastName"
          value={inputs.lastName}
          onChange={inputHandler}
          variant='standard'
          InputProps={{
            startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>),
          }}
          style={{ cursor: 'pointer' }}
        /><br /><br />
        <TextField
          label="Email"
          name="email"
          value={inputs.email}
          onChange={inputHandler}
          variant='standard'
          InputProps={{
            startAdornment: (<InputAdornment position="start"><EmailIcon /></InputAdornment>),
          }}
          style={{ cursor: 'pointer' }}
        /><br /><br />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={inputs.password}
          onChange={inputHandler}
          variant='standard'
          InputProps={{
            startAdornment: (<InputAdornment position="start"><LockIcon /></InputAdornment>),
          }}
          style={{ cursor: 'pointer' }}
        /><br /><br />
        <Button variant='contained' color='primary' onClick={signUpHandler}>SIGN UP</Button>
      </Card>
    </div>
  );
};

export default SignUp;
