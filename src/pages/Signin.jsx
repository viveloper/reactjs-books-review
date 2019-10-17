import React, { useState } from 'react';

export default function Signin(props) {
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
    <div id="signin-page">
      <div className="container">
        <header id="signin-header">
          <h1>viveloper review service for books</h1>
          <h2>please share your opinion on web development books.</h2>
        </header>

        <div id="signin-underline">
          <div></div>
        </div>

        <div className="flex-container">
          <aside id="signin-aside">
            <img src="/images/signin-books.jpg" alt="Signin Background" />
          </aside>

          <section id="signin-section">
            <h3>log in. start searching.</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <input className="textInput" type="email" name="email" id="email" value={email} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input className="textInput" type="password" name="password" id="password" value={password} onChange={handleChange} />
              </div>
              <div>
                <input className="singinBtn" type="submit" value="SIGN IN" />
              </div>
            </form>
            <div>
              <hr />
            </div>
            <div>
              <p>Need to create an account?</p>
              <button>SIGN UP</button>
            </div>
            <div>
              <p>Forgot your password?</p>
              <button>RECOVERY</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}