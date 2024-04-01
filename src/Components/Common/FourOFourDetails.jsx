import { Link } from "react-router-dom";
import "./FourOFourDetails.css";

const FourOFourDetails = () => {
  return (
    <div className="fof-details">
      <h1>Oops! Wrong teapot!</h1>
      <section className="steam-container">
        <article id="steam" className="steam-1"></article>
        <article id="steam" className="steam-2"></article>
        <article id="steam" className="steam-3"></article>
        <article id="steam" className="steam-4"></article>
      </section>
      <img
        src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1711569915/TeaWhips-redcrispy-nobackground_axoi2q.png"
        alt="Red Teapot"
      />
      <Link to={"/teapots"}>Back to TeaWhips</Link>
    </div>
  );
};

export default FourOFourDetails;
