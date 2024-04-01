import "./Ratings.css";

const Ratings = ({ review, setReview, rating, setRating }) => {
  const handleRatingChange = (e) => {
    console.log(e.target.value);
    setReview({ ...review, rating: parseInt(e.target.value) });
    setRating(parseInt(e.target.value));
  };

  return (
    <div className="rating-box">
      <input
        type="radio"
        name="x"
        value="1"
        checked={rating == 1}
        onChange={(e) => handleRatingChange(e)}
      />
      <input
        type="radio"
        name="x"
        value="2"
        checked={rating == 2}
        onChange={(e) => handleRatingChange(e)}
      />
      <input
        type="radio"
        name="x"
        value="3"
        checked={rating == 3}
        onChange={(e) => handleRatingChange(e)}
      />
      <input
        type="radio"
        name="x"
        value="4"
        checked={rating == 4}
        onChange={(e) => handleRatingChange(e)}
      />
      <input
        type="radio"
        name="x"
        value="5"
        checked={rating == 5}
        onChange={(e) => handleRatingChange(e)}
      />

      <span>&#9734; &#9734; &#9734; &#9734; &#9734;</span>
      {/* <span className="active">{"⭐️ ".repeat(rating)}</span> */}
      <span className="active">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
    </div>
  );
};

export default Ratings;
