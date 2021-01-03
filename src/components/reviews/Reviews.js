import React, { Component } from 'react';
import Review from './Review';


class Reviews extends Component {

  handleDelete = (event) => {
    event.preventDefault()
    this.props.deleteReview(this.props.restaurant.id)
  }

  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);
    
    const reviewList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })
    return (
      <div>
      <ul>
        {reviewList}
        {/* <button onClick={this.handleDelete}> X </button> */}
      </ul>
      </div>
    );
  }
};

export default Reviews;