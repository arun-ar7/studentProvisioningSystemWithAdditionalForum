import React from 'react';
import './StudentProfileBgd.css'; // Import the CSS file

function StudentProfileBgd() {
  const student = {
    "rollNo": "1234",
    "email": "shri@gmeil.com",
    "firstname": "shri",
    "lastname": " saikumar",
    "dateOfBirth": "12-03-2004",
    "address": "address lines",
    "department": "cse",
    "parentName": "prof oak",
    "bloodGroup": "o-ve",
    "isActive": true
  };

  return (
    <div className='student-profile'>
      <div className='left-container'>
        <div className='profile-picture'>
          {/* Placeholder for picture */}
          <img src="https://via.placeholder.com/150" alt="Student" />
        </div>
        <div className='profile-item'>
          <strong>Name:</strong> {student.firstname} {student.lastname}
        </div>
        <div className='profile-item'>
          <strong>Roll No:</strong> {student.rollNo}
        </div>
        <div className='profile-item'>
          <strong>Email:</strong> {student.email}
        </div>
      </div>
      <div className='right-container'>
        <h2>Additional Details</h2>
        <div className='profile-item'>
          <strong>Date of Birth:</strong> {student.dateOfBirth}
        </div>
        <div className='profile-item'>
          <strong>Address:</strong> {student.address}
        </div>
        <div className='profile-item'>
          <strong>Department:</strong> {student.department}
        </div>
        <div className='profile-item'>
          <strong>Parent Name:</strong> {student.parentName}
        </div>
        <div className='profile-item'>
          <strong>Blood Group:</strong> {student.bloodGroup}
        </div>
        <div className='profile-item'>
          <strong>Active:</strong> {student.isActive ? 'Yes' : 'No'}
        </div>
      </div>
    </div>
  );
}

export default StudentProfileBgd;
