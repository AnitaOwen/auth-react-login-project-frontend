import "./Ratings.css";

const Ratings = ({ setRating }) => {
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <div className="rating-box">
      <input type="radio" name="x" value="1" onChange={handleRatingChange} />
      <input type="radio" name="x" value="2" onChange={handleRatingChange} />
      <input type="radio" name="x" value="3" onChange={handleRatingChange} />
      <input type="radio" name="x" value="4" onChange={handleRatingChange} />
      <input type="radio" name="x" value="5" onChange={handleRatingChange} />

      <span>&#9734; &#9734; &#9734; &#9734; &#9734;</span>
      <span className="active">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
    </div>
  );
};

export default Ratings;
