import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import ProtectedRoute from "./Components/Authorization/ProtectedRoute";
import Register from "./Components/Authorization/Register";
import Login from "./Components/Authorization/Login";
import Dashboard from "./Components/Authorization/Dashboard";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import About from "./Pages/About";
import NewForm from "./Pages/NewForm";
import NavBar from "./Components/Common/NavBar";
import EditForm from "./Pages/EditForm";
import LandingPage from "./Pages/LandingPage";

function App() {
  const [reviews, setReviews] = useState([]);
  const [toggleLogin, setToggleLogin] = useState(false);
  // const [rating, setRating] = useState("");

  return (
    <>
      <NavBar toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={<Login setToggleLogin={setToggleLogin} />}
        />
        <Route path="/register" element={<Register />} />
        {/* Names of routes? */}
        <Route path="/teapots" element={<Index />} />
        <Route
          exact
          path="/teapots/:teapot_id"
          element={<Show reviews={reviews} setReviews={setReviews} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<FourOFour />} />
        <Route element={<ProtectedRoute />}>
          {/* Place protected routes here */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/teapots/:teapot_id/new"
            element={
              <NewForm
                reviews={reviews}
                setReviews={setReviews}
                // rating={rating}
                // setRating={setRating}
              />
            }
          />
          <Route
            path="/teapots/:teapot_id/edit/:review_id"
            element={
              <EditForm
                reviews={reviews}
                setReviews={setReviews}
                // rating={rating}
                // setRating={setRating}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
