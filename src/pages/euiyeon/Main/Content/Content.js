import React from 'react';
import './Content.scss';

import Feed from './Feed/Feed';
import Aside from './Aside/Aside';

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  render() {
    return (
      <div class="Main">
        <main>
          <div className="container">
            <section className="articleWrapper">
              {this.state.feeds.map(e => (
                <Feed
                  feed_id={e.feed_id}
                  profile_img={e.profile_img}
                  profile_id={e.profile_id}
                  feed_img={e.feed_img}
                  like_click={e.like_click}
                  like_user_profile_img={e.like_user_profile_img}
                  like_user_profile_id={e.like_user_profile_id}
                  post_user_mension={e.post_user_mension}
                  comments={e.comments}
                />
              ))}
            </section>
            <Aside />
          </div>
        </main>
      </div>
    );
  }
}

export default Content;
