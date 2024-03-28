import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReviewsIndex from "../Reviews/ReviewsIndex";
import "./Teapots.css";

const URL = import.meta.env.VITE_BASE_URL;

const TeapotDetails = ({ reviews, setReviews }) => {
  const [teapot, setTeapot] = useState();

  const { teapot_id } = useParams();

  useEffect(() => {
    fetch(`${URL}/api/teapots/${teapot_id}`)
      .then((res) => res.json())
      .then((data) => setTeapot(data));
  }, [teapot_id]);

  return (
    <div>
      {teapot && (
        <div className="show-container">
          <section className="image-section">
            <img src={teapot.image} alt={teapot.name} />
          </section>
          <section className="info-section">
            <h3>{teapot.name}</h3>
            <p>Price: ${teapot.price}.00</p>
            <p>Description: {teapot.description}</p>
            <p>Material: {teapot.material}</p>
            <p>
              Capacity: {teapot.capacity} cup
              {teapot.capacity === 1 ? "" : "s"}
            </p>
            {console.log(`/teapots/${teapot_id}/new`)}
            <button>
              <Link to={`/teapots/${teapot_id}/new`}>Add Review</Link>
            </button>
          </section>
        </div>
      )}

      <ReviewsIndex
        teapot_id={teapot_id}
        reviews={reviews}
        setReviews={setReviews}
      />
    </div>
  );
};

export default TeapotDetails;
