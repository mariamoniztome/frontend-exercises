//This is the code for the homepage of a React application.
// It displays a welcome message and a brief description.


// Import styles
import "./home.scss";

import React from "react";

const HomePage: React.FC = () => {
  return (
    <main>
      <div className="container">
        <div className="home-wrapper">
          <h1>Welcome to My React App</h1>
          <p>This is the homepage of the application.</p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
