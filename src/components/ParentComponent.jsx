import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import '../styles/ParentComponent.css'; // Import file CSS

const ParentComponent = () => {
  const [message, setMessage] = useState('');

  const handleMessageFromChild = (childMessage) => {
    setMessage(childMessage);
  };

  return (
    <div className="parent-container"> {/* Tambahkan kelas CSS */}
      <h1>Parent Component</h1>
      <ChildComponent onMessageChange={handleMessageFromChild} />
      <p className="message-display">Message from child: {message}</p> {/* Tambahkan kelas CSS */}
    </div>
  );
};

export default ParentComponent;