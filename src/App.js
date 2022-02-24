import React, { useState } from "react";

import NewStudent from "./components/Student/NewStudent";
import Students from "./components/Student/Students";


import photo1 from "./components/images/1.png"
import photo2 from "./components/images/2.png"
import photo3 from "./components/images/3.png"
import photo4 from "./components/images/4.png"

const App = () => {
  const students = [
    {
      id: "s1",
      nameStudent: "Julio Cesar",
      pfp: photo1,
      major: "Engineer",
      age: 20,
    },
    {
      id: "s2",
      nameStudent: "Emiliano Mateo",
      pfp: photo2,
      major: "Engineer",
      age: 20,
    },
    {
      id: "s3",
      nameStudent: "Daniel Chavez",
      pfp: photo3,
      major: "Engineer",
      age: 20,
    },
    {
      id: "s4",
      nameStudent: "Eduardo Torres",
      pfp: photo4,
      major: "Engineer",
      age: 20,
    },
  ];
  const addStudentHandler = (student) => {
    console.log("In App.js");
    console.log(student);
  };

  return (
    <div>
      <NewStudent onAddStudent={addStudentHandler} />
      <Students items={students} />
    </div>
  );
};

export default App;
