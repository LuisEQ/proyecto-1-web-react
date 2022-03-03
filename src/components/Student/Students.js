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
      <StudentFilter
        selected={filteredMajor}
        onChangeFilter={filterChangeHandler}
      />
      <div>
        <Card className="students">
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
    </div>
  );
};

export default Students;
