import React, { useState } from "react";
import StudentO from "./StudentO";
import Card from "../Card/Card";
import "./Students.css";

const Students = (props) => {
  return (
    <div>
      <Card className="Students">
        <StudentO
          key={props.items[0].id}
          nameStudent={props.items[0].nameStudent}
          pfp={props.items[0].pfp}
          age={props.items[0].age}
          major={props.items[0].major}
        />
        <StudentO
          key={props.items[1].id}
          nameStudent={props.items[1].nameStudent}
          pfp={props.items[1].pfp}
          age={props.items[1].age}
          major={props.items[1].major}
        />
        <StudentO
          key={props.items[2].id}
          nameStudent={props.items[2].nameStudent}
          pfp={props.items[2].pfp}
          age={props.items[2].age}
          major={props.items[2].major}
        />
        <StudentO
          key={props.items[3].id}
          nameStudent={props.items[3].nameStudent}
          pfp={props.items[3].pfp}
          age={props.items[3].age}
          major={props.items[3].major}
        />
      </Card>
    </div>
  );
};

export default Students;
