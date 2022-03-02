import React, { useState } from "react";
import StudentO from "./StudentO";
import Card from "../Card/Card";
import StudentFilter from "./StudentFilter";
import "./Students.css";


const Students = (props) => {
  const [filteredMajor, setFilteredMajor] = useState("Engineer");

  const filterChangeHandler = (selectedMajor) => {
    setFilteredMajor(selectedMajor);
  };
  const filteredStudents = props.items.filter((student) => {
    return student.major === filteredMajor;
  });

  return (
    <div>
      <Card className="students">
        <StudentFilter
          selected={filteredMajor}
          onChangeFilter={filterChangeHandler}
        />
        {filteredStudents.map((student) => (
          <StudentO
            key={student.id}
            nameStudent={student.nameStudent}
            pfp={student.pfp}
            age={student.age}
            major={student.major}
          />
        ))}

      </Card>
    </div>
  );
};

export default Students;
