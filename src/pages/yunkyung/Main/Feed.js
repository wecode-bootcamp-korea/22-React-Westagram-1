import React from 'react';
import Comment from './Comment';
import './Feed.scss';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentList: [],
    };
  }

  writeComment = e => {
    const { value } = e.target;
    this.setState({
      comment: value,
    });
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  addComment = e => {
    e.preventDefault();
    const { commentList, comment } = this.state;
    this.setState({
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          userName: 'leeyk',
          content: comment,
        },
      ],
      comment: '',
    });
  };

  render() {
    const { commentList, comment } = this.state;
    return (
      <div className="feeds">
        <div className="feeds_left">
          <img alt="고양이 프로필 사진" src="./images/yunkyung/cat1.png" />
          <h1>{this.props.id}</h1>
        </div>
        <div className="feeds_right">
          <p>…</p>
        </div>
        <div className="feeds_content">
          <img alt="고양이 feed 사진" src={this.props.img} />
        </div>
        <div className="feeds_icons">
          <div className="feeds_icons_left">
            <img
              alt="돋보기 아이콘"
              src="https://img.icons8.com/windows/32/000000/search.png"
            />
            <img
              alt="하트 아이콘"
              src="https://img.icons8.com/windows/32/000000/like.png"
            />
            <img
              alt="메세지 아이콘"
              src="https://img.icons8.com/dotty/80/000000/filled-sent.png"
            />
          </div>
          <div className="feeds_icons_right">
            <img
              alt="북마크 아이콘"
              src="https://img.icons8.com/material-outlined/24/000000/bookmark-ribbon--v2.png"
            />
          </div>
        </div>
        <div className="feeds_text">
          <div className="feeds_text_top">
            <img
              alt="고양이 feed 프로필 사진"
              src="./images/yunkyung/cat1.png"
            />
            <h1>
              <strong>zzz_yk</strong>님 외 <strong>35명</strong>이 좋아합니다
            </h1>
            <h2>
              <strong>zzz_yk</strong>
              {this.props.mention}
            </h2>
            <p>42분 전</p>
            <Comment commentList={commentList} />
          </div>
        </div>
        <div className="reply">
          <form onSubmit={this.addComment}>
            <input
              type="text"
              id="input"
              value={comment}
              placeholder="댓글 달기..."
              onChange={this.writeComment}
            />
          </form>
          <button type="button" className="reply-btn" onClick={this.addComment}>
            게시
          </button>
        </div>
      </div>
    );
  }
}

export default Feed;
