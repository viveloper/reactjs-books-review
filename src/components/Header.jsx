import React from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';
import withAuth from '../hoc/withAuth';

function Header({history, token}){
  async function click(){
    // 로컬 스토리지 삭제
    localStorage.removeItem('token');

    // 서버에 로그아웃 했다고 전달
    await axios.get('https://api.marktube.tv/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then();

    // 페이지 이동
    history.push('/');
  }
  return(
    <div>Header
      <button onClick={click}>logout</button>
    </div>
  )
}

export default withRouter(withAuth(Header));