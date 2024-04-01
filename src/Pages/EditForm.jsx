import ReviewEditForm from "../Components/Reviews/ReviewEditForm";
import "./Form.css";

const EditForm = ({ reviews, setReviews }) => {
  return (
    <div>
      <ReviewEditForm reviews={reviews} setReviews={setReviews} />
    </div>
  );
};

export default EditForm;
