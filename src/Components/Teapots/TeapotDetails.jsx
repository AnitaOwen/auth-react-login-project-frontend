import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReviewsIndex from "../Reviews/ReviewsIndex";
import "./Teapots.css";

const URL = import.meta.env.VITE_BASE_URL;

const TeapotDetails = ({ reviews, setReviews }) => {
  const [teapot, setTeapot] = useState();

  const { teapot_id } = useParams();
  const navigate = useNavigate();

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
            <p>
              <span>Price:</span> ${teapot.price}.00
            </p>
            <p>
              <span>Description:</span> {teapot.description}
            </p>
            {teapot.material && (
              <p>
                <span>Material:</span> {teapot.material}
              </p>
            )}
            {teapot.capacity && (
              <p>
                <span>Capacity:</span> {teapot.capacity} cup
                {teapot.capacity === 1 ? "" : "s"}
              </p>
            )}
            <article className="btns">
              <button onClick={() => navigate(`/teapots/${teapot_id}/new`)}>
                Add Review
              </button>
              <button onClick={() => navigate(`/teapots`)}>Back</button>
            </article>
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
