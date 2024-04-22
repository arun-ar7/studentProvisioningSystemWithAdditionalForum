import React, { useState } from 'react';
import UrlComponent from 'react-weblineindia-url';
import './Curl_container.css'; // Import your CSS file

const Curl_container = () => {
  const [formData, setFormData] = useState({
    rollNo: "",
    email: "",
    firstname: "",
    lastname: "",
    dateOfBirth: "",
    address: "",
    department: "",
    parentName: "",
    bloodGroup: "",
    url: "" // Add URL field to formData state
  });
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Function to handle blur event of input fields
  const handleBlur = (event) => {
    // You can implement URL validation logic here
    // For now, let's assume the URL is invalid if it's empty
    setIsInvalidUrl(!formData.url);
  }

  // Function to handle invoking the URL
  const handleInvoke = () => {
    // Check if any input field is empty
    for (const key in formData) {
      if (formData.hasOwnProperty(key) && !formData[key]) {
        setResponseMessage("Please fill in all fields");
        return;
      }
    }

    // Check if URL is valid before invoking
    if (!isInvalidUrl) {
      // Here you can invoke your URL or perform any other action
      // For now, let's just set a response message
      setResponseMessage("Response from the invoked URL");
    }
  }

  return (
    <div className="container">
      <div className="input-container">
        <div className='input-subContainer'>
          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            className="input"
            placeholder="Roll No"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder="Email"
          />
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="input"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="input"
            placeholder="Last Name"
          />
          <input
            type="text"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="input"
            placeholder="Date of Birth"
          />
        </div>
        <div className='input-subContainer'>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input"
            placeholder="Address"
          />
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="input"
            placeholder="Department"
          />
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            className="input"
            placeholder="Parent Name"
          />
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="input"
            placeholder="Blood Group"
          />
        </div>
        
      </div>
      <div className="url-container">
        <UrlComponent
          value={formData.url}
          onChange={(e) => setFormData({...formData, url: e.target.value})}
          onBlur={handleBlur}
          className="input"
          placeholder="Enter Url"
        />
        {isInvalidUrl &&
          <div className="error-text">
            The url is not valid
          </div>
        }
      </div>
      <div className="button-container">
        <button className="button" onClick={handleInvoke}>Invoke</button>
        {responseMessage && !isInvalidUrl &&
          <p className="message">{responseMessage}</p>
        }
      </div>
    </div>
  );
}

export default Curl_container;
