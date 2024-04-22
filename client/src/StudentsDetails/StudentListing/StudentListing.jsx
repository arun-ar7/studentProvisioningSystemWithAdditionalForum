import React, { useState, useEffect } from 'react';
import ToggleButton from "./ToggleButton/ToggleButton.jsx"
import "./StudentListing.css"
const StudentListing = () => {
  const [students, setStudents] = useState([{
    "id": '001',
    "rollNumber": "122",
    "name": "siva",
    "email": "siva@example.com"
  },
  {
    "id": 2,
    "rollNumber": "124",
    "name": "nahul",
    "email": "nahul@example.com"
  },
  {
    "id": 3,
    "rollNumber": "193",
    "name": "diwakar",
    "email": "diwakar@example.com"
  },
  {
    "id": 4,
    "rollNumber": "154",
    "name": "senthil",
    "email": "senthil@example.com"
  },
  {
    "id": 5,
    "rollNumber": "132",
    "name": "ravi",
    "email": "ravi@example.com"
  },
  {
    "id": 6,
    "rollNumber": "163",
    "name": "rahul",
    "email": "rahul@example.com"
  }]);

  // useEffect(() => {
  //   const fetchStudents = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/students');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch students');
  //       }
  //       let data = await response.json();
  //       setStudents(data);
  //     } catch (error) {
  //       console.error('Error fetching students:', error);
  //     }
  //   };

  //   fetchStudents();
  // }, []);


  return (
    <div>
      {students.map(student => (
        <div key={student.id} className="student-container">
          <div className='rollNumber-container'>
            {student.rollNumber}
          </div>
          <div className="studentInfo-container">
            <div>
              {student.name}
            </div>
            <div>
              {student.email}
            </div>
          </div>
          <div className="button-container">
            <ToggleButton onClick={() => handleButtonClick(student)}/>
          </div>
        </div>
      ))}
    </div>
  );
};

const handleButtonClick = (student) => {
  console.log('Button clicked for student:', student);
};

export default StudentListing;
