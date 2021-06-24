import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <div className="login_bd">
        <h1>Westagram</h1>

        <div>
          <input
            type="text"
            id="userId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <br />
          <input type="password" id="password" placeholder="비밀번호" />
        </div>
        <div className="btn">
          <button type="button" class="button" id="button">
            로그인
          </button>
          <footer>
            <a>비밀번호를 잊으셨나요?</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default Login;
