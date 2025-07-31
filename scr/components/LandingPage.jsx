import StarCanvas from "./StarCanvas";
import GlobeCanvas from "./GlobeCanvas";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <>
      <StarCanvas />
      <div className="container">
        <GlobeCanvas />
        <h1>#HUMANITY</h1>
        <p>Sign in or register to continue</p>
        <a href="/login" className="button">Log in</a>
      </div>
    </>
  );
}

export default LandingPage;
