import React, { Fragment } from "react";
import "./Card.css";

function Card(props) {
  return (
    <Fragment>
      <div className="card">
        <img src={props.img} alt="" />
        <h3 className="card-title">{props.type}</h3>
        <p className="card-body">{props.description}</p>
        <a role="button" href="#">Learn More</a>
      </div>
    </Fragment>
  );
}

export default Card;
