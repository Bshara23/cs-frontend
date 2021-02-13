import React, {useState, useEffect, useRef} from 'react';
import {Player, Controls} from '@lottiefiles/react-lottie-player';
import {Form, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {logIn} from '../API/API';
import TemporaryAlert from '../components/TemporaryAlert';
import {setCurrentUser} from '../data/Global';
var sha256 = require('js-sha256');

export default function LogInPage () {
  const history = useHistory ();
  const dispatch = useDispatch ();

  const [email, setemail] = useState ('');
  const [password, setPassword] = useState ('');
  function validateForm () {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = e => {
    e.preventDefault ();
    logIn (email, sha256(password)).then (res => {
      if (res.data.length != 0) {
        console.log ('log in');
        history.push ('/dashboard');
        dispatch (setCurrentUser (res.data[0]));
      } else {
        alertRef.current.showAlert ();
      }
    });
  };

  const onSignUpClick = () => {
    history.push ('/sign-up');
  };
  const alertRef = useRef ();

  const alertHeading = 'Log in failed';
  const alertBody = 'Password or email are not correct! try again.';

  return (
    <div className="Login">
      <TemporaryAlert
        body={alertBody}
        heading={alertHeading}
        type="warning"
        ref={alertRef}
      />
      <Player
        autoplay
        loop
        src="https://assets1.lottiefiles.com/datafiles/RvQQlJ3ODelSiQi/data.json"
        style={{height: '300px', width: '300px'}}
      />
      <Form
        className="d-flex flex-column align-items-md-center"
        onSubmit={handleSubmit}
      >
        <h3 className="pt-5 pb-3"> Welcome Back!</h3>

        <Form.Group size="lg" controlId="email">
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setemail (e.target.value)}
          />

        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            onChange={e => setPassword (e.target.value)}
          />
        </Form.Group>
        <Button
          className="mt-3 mb-3"
          size="m"
          type="submit"
          disabled={!validateForm ()}
        >
          Login
        </Button>
        <Button  className="mb-3"
          size="m" onClick={onSignUpClick}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
