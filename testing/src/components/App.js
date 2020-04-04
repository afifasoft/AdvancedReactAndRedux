import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {

  renderButton() {
    
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Post A Comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
        <CommentList />
      </div>
    );
  }
}

export default App;
