import React from "react";

const Entry = (props) => {
  return (
    <div className="entry" style={{ backgroundColor: props.color }}>
      <img src={props.img} alt={props.name} />
      <p>
        {props.number}. {props.name}
      </p>
      <p>{props.type}</p>
    </div>
  );
};

export default Entry;
