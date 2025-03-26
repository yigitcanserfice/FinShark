import React, { JSX } from "react";
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({
  companyName,
  ticker,
  price,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
        width={300}
      />
      <div className="details">
        <h2>
          {companyName} ({ticker})
        </h2>

        <p>${price}</p>
      </div>
      <div className="info">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptas
        nihil officiis fugiat magni suscipit.
      </div>
    </div>
  );
};

export default Card;
