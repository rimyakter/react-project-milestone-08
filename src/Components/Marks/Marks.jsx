import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const Marks = ({ marksPromise }) => {
  const markRes = use(marksPromise);
  const marksData = markRes.data.students;

  const studentObj = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.maths,
    };
    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = avg;
    return student;
  });

  console.log(studentObj);

  return (
    <div>
      <h1>
        <BarChart width={730} height={250} data={studentObj}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="avg" fill="#8884d8" />
          <Bar dataKey="chemistry" fill="blue" />
        </BarChart>
      </h1>
    </div>
  );
};

export default Marks;
