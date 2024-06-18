// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../styles/ChildComponent.css'; // Import file CSS

// eslint-disable-next-line react/prop-types
const ChildComponent = ({ onMessageChange }) => {
  const [childMessage, setChildMessage] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setChildMessage(value);
    onMessageChange(value);
  };

  return (
    <div className="child-container"> {/* Tambahkan kelas CSS */}
      <h2>Child Component</h2>
      <input type="text" value={childMessage} onChange={handleInputChange} className="message-input" /> {/* Tambahkan kelas CSS */}
    </div>
  );
};

export default ChildComponent;