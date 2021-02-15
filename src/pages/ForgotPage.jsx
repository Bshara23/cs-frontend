import React, {useState, useRef} from 'react';
import {Player, Controls} from '@lottiefiles/react-lottie-player';
import TemporaryAlert from '../components/TemporaryAlert';
import {
  setUserSpare1byEmail,
  sendMail,
  generateUserSpare1ByEmail,
} from '../API/API';

var sha256 = require ('js-sha256');

export default function ForgotPage () {
  const [email, setEmail] = useState ('');

  const [alertType, setAlertType] = useState ('');
  const [alertHeading, setAlertHeading] = useState ('');
  const [alertBody, setAlertBody] = useState ('');

  const handleSubmit = e => {
    e.preventDefault ();

    generateUserSpare1ByEmail (email).then (res => {
      if (res.data) {
        const userId = res.data.id;
        const newToken = res.data.spare1;

        const url = `http://localhost:3000/ch/${userId}/${newToken}`;
        const to = email;
        const subject = 'Recovery Email';
        const text = `Click on this link to reset your password: ${url}`;
        const onSuccess = e => {
         
        };
        sendMail (to, subject, text, onSuccess);
        setAlertType ('success');
        setAlertHeading ('Success');
        setAlertBody ('Check your email for a reset link');
        alertRef.current.showAlert ();
      } else {
        console.log ("email is not valid, don't tell the user...");
        setAlertType ('success');
        setAlertHeading ('Success');
        setAlertBody ('Check your email for a reset link');
    }
    });
  };
  function validateForm () {
    return email.length > 0;
  }

  const alertRef = useRef ();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Player
          src="https://assets4.lottiefiles.com/packages/lf20_IQ2Fuq.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          style={{height: '300px', width: '300px'}}
        />
        <TemporaryAlert
          body={alertBody}
          heading={alertHeading}
          type={alertType}
          ref={alertRef}
        />

        <div className=" d-flex flex-column align-items-md-center">
          <h3 className="mt-5 mb-5">Reset Password</h3>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={e => setEmail (e.target.value)}
            />
          </div>

          <button
            disabled={!validateForm ()}
            type="submit"
            className="btn btn-primary mt-3"
          >
            Send reset email
          </button>

          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </div>
      </form>       {' '}
    </div>
  );
}
