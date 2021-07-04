import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = e => {
    fetch('http://10.58.0.100:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
        nick_name: '이의연',
        phonenumber: '01012345678',
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          this.props.history.push('/MainEuiyeon');
        } else {
          alert('아이디 및 비밀번호를 확인하세요!');
        }
      });
  };

  render() {
    return (
      <div class="Login">
        <section className="loginBox">
          <div className="logo">
            <div className="logoFont">Westagram</div>
          </div>

          <form className="loginForm">
            <div className="inputWrap">
              <div className="inputId">
                <input
                  className="input"
                  id="idInput"
                  type="text"
                  name="id"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onKeyUp={this.checkValid}
                  onChange={this.handleInput}
                />
              </div>
              <div className="inputPassword">
                <input
                  className="input"
                  id="pwInput"
                  type="password"
                  name="pw"
                  placeholder="비밀번호 (6자리 이상)"
                  onKeyUp={this.checkValid}
                  onChange={this.handleInput}
                />
              </div>
            </div>

            <div className="buttonWrap">
              <button
                className={
                  this.state.id.includes('@') && this.state.pw.length >= 6
                    ? 'loginBtn'
                    : 'loginBtn_disabled'
                }
                type="button"
                onClick={this.goToMain}
              >
                {' '}
                로그인{' '}
              </button>
            </div>
          </form>

          <div className="forgotText">
            <a className="forgotPassword">비밀번호를 잊으셨나요?</a>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
