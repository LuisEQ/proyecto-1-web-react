import React, { useState } from "react";
import Card from "../Card/Card";
import "./StudentO.css";


const StudentO = (props) => {
  const [nameStudent] = useState(props.nameStudent);
  console.log("StudentO evaluated by React");

  return (
    <Card className="student-o">
      <div className="student-o__image">
        <img className="student-o__pfp" src={props.pfp} alt="aaaa" />
      </div>
      <div className="student-o__description">
        <h2>{nameStudent}</h2>
        <div className="student-o__major">Edad:{props.age}</div>
        <div className="student-o__major">{props.major}</div>

      </div>
    </Card>
  );
};

export default StudentO;
