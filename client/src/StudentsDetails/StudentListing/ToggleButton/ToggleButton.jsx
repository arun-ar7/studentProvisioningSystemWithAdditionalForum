import React, { useState, useEffect } from 'react';
import './ToggleButton.css';

export default function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = isToggled
          ? 'http://localhost:8080/students/1/deactivate'
          : 'http://localhost:8080/students/1/activate';

        const response = await fetch(endpoint, {
          method: 'PUT', // Assuming you are using PUT method for updating the status
        });

        if (!response.ok) {
          throw new Error('Failed to toggle student status');
        }

        // Optionally, you can handle response data if needed
      } catch (error) {
        console.error('Error toggling student status:', error);
      }
    };

    fetchData();
  }, [isToggled]);

  const handleChange = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button onClick={handleChange} className={`toggle-button ${isToggled ? 'on' : 'off'}`}>
      {isToggled ? 'active' : 'inactive'}
    </button>
  );
}
