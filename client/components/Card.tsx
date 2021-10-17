import React from "react";

interface ICardProps {
  title: string;
  price: string;
  options: string[];
  active: boolean;
}

const Card: React.FC<ICardProps> = ({ title, price, options, active }) => {
  return (
    <div className={`card ${active ? "active" : "shadow"}`}>
      <div>
        <div className="card-title">{title}</div>
        <div className="card-price">{price}</div>
      </div>
      <ul className="card-options" role="list">
        {options.map((option) => (
          <li className="card-option">{option}</li>
        ))}
      </ul>
      <button className="large">Book Now</button>
    </div>
  );
};

export default Card;
