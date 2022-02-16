import React from "react";


const NewStudent = (props) => {
  const studentData = {
    id: Math.random().toString(),
  };
  props.onAddStudent(studentData);

  return (
    <div className="new-student">
    </div>
  );
};

export default NewStudent;
