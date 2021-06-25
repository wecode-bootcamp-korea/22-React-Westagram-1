import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      userPw: '',
      // btnControl: 'disabled',
    };
  }

  handleChange = e => {
    this.setState({
      userId: e.target.value,
      userPw: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    const { userId, userPw } = this.state;
    return (
      <div className="login_body">
        <div className="login_bd">
          <h1>Westagram</h1>
          <input
            type="text"
            id="userId"
            name="userId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="password"
            id="userPw"
            name="userPw"
            placeholder="비밀번호"
            onChange={this.handleChange}
          />
          <div className="btn">
            <button
              type="button"
              class="button"
              id="button"
              disabled={
                userId.includes('@') && userPw.length > 4 ? false : true
              }
            >
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
