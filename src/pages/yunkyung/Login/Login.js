import React from 'react';
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

  handleChange = e => {
    const userId = e.target.name;
    const userPw = e.target.value;
    this.setState({
      [userId]: userPw,
    });
  };

  // 로그인 & 화원가입 성공 여부
  signUpFetch = () => {
    fetch('http://10.58.5.217:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        nick_name: 'wecode',
        name: '이신재',
        email: this.state.userId,
        password: this.state.userPw,
        phone_number: '01000000001',
        gender: 'male',
        birth_date: '1999-12-12',
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.token !== undefined) {
          alert('로그인 성공');
          localStorage.setItem('access_token :', result.token);
        } else {
          alert('로그인 실패');
        }
        console.log('결과: ', result);
      });
  };

  render() {
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
              className="button"
              id="button"
              onClick={this.signUpFetch}
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
