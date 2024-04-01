import ReviewAddForm from "../Components/Reviews/ReviewAddForm";
import "./Form.css";

const NewForm = ({ reviews, setReviews }) => {
  return (
    <div>
      <ReviewAddForm reviews={reviews} setReviews={setReviews} />
    </div>
  );
};

export default NewForm;
