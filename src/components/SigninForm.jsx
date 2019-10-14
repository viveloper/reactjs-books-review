import React, { useState } from 'react';
import './SigninForm.scss';

export default function SigninForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
    else { }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      const reqData = {
        email: email,
        password: password
      };
      const url = 'Authorization Server Endpoint URL';
      const reqOpt = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(reqData), // body data type must match "Content-Type" header
      };
      const response = await fetch(url, reqOpt);
      const resData = await response.json();

      const { username, accessToken } = resData;

      console.log(username, accessToken);
    })();
  }

  return (
    <div className="SigninForm">
      <header className="Header">log in. start searching.</header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input className="TextInput" type="email" name="email" id="email" value={email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input className="TextInput" type="password" name="password" id="password" value={password} onChange={handleChange} />
        </div>
        <div>
          <input className="SigninBtn" type="submit" value="SIGN IN" />
        </div>
      </form>
      <div>
        <hr />
      </div>
      <footer className="Footer">
        <div>
          <p>Need to create an account?</p>
          <button>SIGN UP</button>
        </div>
        <div>
          <p>Forgot your password?</p>
          <button>RECOVERY</button>
        </div>
      </footer>
    </div>
  );
}