import React from 'react';
import './Signin.scss';
import SigninForm from '../components/SigninForm';

export default function Signin(props) {
  return (
    <div className="Signin">
      <div className="Title">viveloper review service for books</div>
      <div className="SubTitle">please share your opinion on web development books.</div>
      <div className="Underline"></div>
      <div className="Contents">
        <div className="SigninBg">
          <img src="/images/signin-books.jpg" alt="SigninBg" />
        </div>
        <SigninForm />
      </div>
    </div>
    
  );
}