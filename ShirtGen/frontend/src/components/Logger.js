import React from 'react';
import './Logger.css';

function Logger({ logMessages }) {
  return (
    <div className="logger">
      <h3>Logs</h3>
      <ul>
        {logMessages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default Logger;
