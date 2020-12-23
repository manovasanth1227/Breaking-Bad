import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Character = ({ name, occupation, dob, status, img, id, author }) => {
  return (
    <Link to={`/${id}/${author}`}>
      <div className="card">
        <div className="box" style={{ backgroundImage: `url(${img})` }}>
          <div className="content">
            <h3 style={{ color: "#e79e4f" }}>{name}</h3>
            <p>
              Occupation :
              {occupation.map((i, index) => {
                return <span key={index}> {i}</span>;
              })}
              <br />
              Birthday : {dob}
              <br />
              Status : {status}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Character;
