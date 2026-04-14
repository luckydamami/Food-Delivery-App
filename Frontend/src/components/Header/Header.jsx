import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favrouite food here</h2>
        <p>
          Craving something delicious? Discover a world of culinary delights
          right at your fingertips with food delivery near me! Whether you're in
          the mood for a hearty burger, fresh sushi, or a comforting bowl of
          pasta, there's no shortage of options to satisfy your cravings. The
          convenience of online food delivery near me allows you to explore
          various restaurants and cuisines without leaving the comfort of your
          home.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
