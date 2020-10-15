import React from "react";
import DescritionItem from "./DescriptionItem/DescriptionItem";
import Button from "../../../Buttons/Button";

const tour = (props) => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__picture card__picture--${props.id}`}>&nbsp;</div>
        <h4 className="card__heading">
          <span
            className={`card__heading-span card__heading-span--${props.id}`}
          >
            {props.title}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            {props.description.map((item, index) => {
              return <DescritionItem key={index} text={item}></DescritionItem>;
            })}
          </ul>
        </div>
      </div>
      <div
        className={`card__side card__side--back card__side--back-${props.id}`}
      >
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">${props.price}</p>
          </div>
          <Button type="cta">Book now!</Button>
        </div>
      </div>
    </div>
  );
};

export default tour;
