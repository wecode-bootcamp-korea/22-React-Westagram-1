import React from 'react';

class Posting extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div>
          <div className="nickName">{this.props.nickname}</div>
          <img src={this.props.img} alt="img" />
          <div className="createDate">{this.props.date}</div>
        </div>
      </>
    );
  }
}
export default Posting;
