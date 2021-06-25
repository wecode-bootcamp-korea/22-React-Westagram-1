import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      userPw: '',
      btnControl: 'disabled',
    };
  }

  render() {
    return (
      <div className="login_body">
        <div className="login_bd">
          <h1>Westagram</h1>
          <input
            type="text"
            id="userId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <br />
          <input type="password" id="password" placeholder="비밀번호" />
          <div className="btn">
            <button type="button" class="button" id="button">
              로그인
            </button>
            <footer>
              <p>비밀번호를 잊으셨나요?</p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
