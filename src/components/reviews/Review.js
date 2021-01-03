import React, { Component } from 'react';

class Review extends Component {
  
  handleDelete = (event) => {
    event.preventDefault()
    this.props.deleteReview({
      id: this.props.review.id,
      restaurantId: this.props.review.restaurantId
    })
  }
  render() {
    const { review } = this.props;

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.handleDelete}> X </button>
      </div>
    );
  }

};

export default Review;
