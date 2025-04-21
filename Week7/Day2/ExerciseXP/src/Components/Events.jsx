import React, { useState } from 'react';

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`You entered: ${event.target.value}`);
    }
  };

  const toggle = () => {
    setIsToggleOn(prevState => !prevState);
  };

  return (
    <div>
      {/* Part I */}
      <button onClick={clickMe}>Click Me</button>

      {/* Part II */}
      <div style={{ marginTop: '1rem' }}>
        <input
          type="text"
          placeholder="Press Enter"
          onKeyDown={handleKeyDown}
        />
      </div>

      {/* Part III */}
      <div style={{ marginTop: '1rem' }}>
        <button onClick={toggle}>
          {isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  );
};

export default Events;
