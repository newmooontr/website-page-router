import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ src, url, title }) => {
  const navigate = useNavigate()
  return (
    <div className="box">
      <img src={src} alt="" onClick={()=>navigate(url)} />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
  );
};

export default Card;