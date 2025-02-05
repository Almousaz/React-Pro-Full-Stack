import React from "react";

const Header = () => {
  return (
    <header
      className="container-fluid py-5"
      style={{ backgroundColor: "#A6AEBF" }}
    >
      <div className="container">
        <h1
          className="display-4 font-weight-bold mb-3"
          style={{fontWeight: '500', color: "#343a40" }}
        >
          <a
            href="/profile"
            className="text-decoration-none"
            style={{ color: "#343a40" }}
          >
            CRUD SYSTEM App
          </a>
        </h1>

        <p className="lead text-light mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          repellendus!
        </p>
      </div>
    </header>
  );
};

export default Header;
