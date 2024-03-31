import ReviewEditForm from "../Components/Reviews/ReviewEditForm";
import "./Form.css";

const EditForm = ({ reviews, setReviews }) => {
  return (
    <div>
      <ReviewEditForm
        reviews={reviews}
        setReviews={setReviews}
        // rating={rating}
        // setRating={setRating}
      />
    </div>
  );
};

export default EditForm;
