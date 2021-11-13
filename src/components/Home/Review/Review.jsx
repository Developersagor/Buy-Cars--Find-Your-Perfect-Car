import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("https://boiling-sands-56408.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="review mt-5">
      <div className="container">
        <h1 className="heading">
          Our <span>Reviews</span>
        </h1>
        <div className="row">
          {reviews?.map((review) => (
            <div key={review._id} className="col-12 col-md-3 col-lg-3">
              <div className="p-3 m-2 car-div">
                <div>
                  <h3> {review.name} </h3>
                  <p>{review.comments}</p>
                  <div>
                    <Rating
                      initialRating={review.rating}
                      emptySymbol="far fa-star text-warning"
                      fullSymbol="fas fa-star text-warning"
                      readonly
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
