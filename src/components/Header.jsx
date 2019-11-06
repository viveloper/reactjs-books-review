import React from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import withAuth from '../hoc/withAuth';

function Header({ history, token }) {
  const handleLogout = async () => {
    // 로컬 스토리지 삭제
    localStorage.removeItem('token');

    // 서버에 로그아웃 했다고 전달
    try {
      await axios.delete('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    catch (error) {
      console.log('logout failed', error);
    }


    // 페이지 이동
    history.push('/');
  }  

  return (
    <div>
      <span>Header</span>      
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default withRouter(withAuth(Header));