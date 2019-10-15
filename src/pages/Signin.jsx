import React from 'react';
import './Signin.css';
import SigninForm from '../components/SigninForm';

export default function Signin(props) {
  return (
    <div className="Signin">
      <div className="wrapper">
        <header>
          <div className="title">viveloper review service for books</div>
          <div className="subTitle">please share your opinion on web development books.</div>
          <div className="underline"></div>
        </header>
        <section className="section1">
          <img src="/images/signin-books.jpg" alt="Signin Background" />
        </section>
        <section className="section2">
          <SigninForm />
        </section>
      </div>
    </div>
  );
}