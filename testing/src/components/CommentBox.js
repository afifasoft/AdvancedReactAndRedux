import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';


class CommentBox extends Component {

  state = { comment: '' };

// Our component just got rendered
  componentDidMount() {
    this.shouldNavigateAway();
  }

  // called when it receives new set of props
  // Our component just got updated
  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  shouldNavigateAway() {
    if (!this.props.auth) {
      console.log('I NEED TO LEAVE !!!');
    }
  }

  handleSubmit = (event) => {

    event.preventDefault();
    // Call an action creator
    this.props.saveComment(this.state.comment);
    // And save the comment
    this.setState({
      comment: ''
    });

  };

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment </h4>
          <textarea onChange={this.handleChange} value={this.state.comment}/>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );

  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, actions)(CommentBox);
