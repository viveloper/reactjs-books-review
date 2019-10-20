import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SigninForm from '../components/SigninForm';

export default function Signin(props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div id="signin-page">
      <div className="container">
        <header id="signin-header">
          <h1>books review service</h1>
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
            <SigninForm />
            <div className="footer">
              <Link to="/signin">sign up</Link>
              <span> | </span>
              <Link to="/signin">recovery</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}