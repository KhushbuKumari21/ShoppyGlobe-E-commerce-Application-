
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <button className="notfound-home-btn" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
