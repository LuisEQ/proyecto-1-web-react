import React from "react";

import StudentsForm from "./StudentsFom";


const NewStudent = (props) => {
  const saveStudentInfoHandler = (enteredStudentInfo) => {
    const studentData = {
      id: Math.random().toString(),
    };
    props.onAddStudent(studentData);
  };

  return (
    <div className="new-student">
      <StudentsForm onSaveStudentInfo={saveStudentInfoHandler} />
    </div>
  );
};

export default NewStudent;
