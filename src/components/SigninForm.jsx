import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

function SigninForm(props) {
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
      const url = 'https://api.marktube.tv/v1/me';
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

      try {
        const response = await fetch(url, reqOpt);
        const resData = await response.json();

        console.log(resData);

        if (resData.error) {
          alert(resData.error);
        }
        else {
          const { token } = resData;
          localStorage.setItem('token', token);
          console.log(token);
          props.history.push('/');
        }
      } catch (error) {
        alert(error);
      }
    })();
  }

  return (
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
        <button type="submit">SIGN IN</button>
      </div>
    </form>
  );
}

export default withRouter(SigninForm);