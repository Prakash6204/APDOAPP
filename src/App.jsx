import React, { useState } from 'react';
import APOD from './APOD';

function App() {
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Enter a date:</label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="YYYY-MM-DD"
        />
        <button type="submit">Get APOD</button>
      </form>
      <APOD date={date} />
    </div>
  );
}

export default App;
