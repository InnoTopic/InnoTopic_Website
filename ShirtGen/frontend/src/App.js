import React, { useState } from 'react';
import PromptInput from './components/PromptInput';
import LogoDisplay from './components/LogoDisplay';
import DesignManager from './components/DesignManager';
import OrderManager from './components/OrderManager';
import Logger from './components/Logger';
import './App.css';

function App() {
  const [logos, setLogos] = useState([]);
  const [error, setError] = useState(null);
  const [logMessages, setLogMessages] = useState([]);
  const [tshirtDesign, setTshirtDesign] = useState({
    color: '#ffffff',
    logos: [],
    template: 'tshirt-template1.png',
  });

  const addLogMessage = (message) => {
    setLogMessages((prevLogs) => [...prevLogs, message]);
  };

  const handlePromptSubmit = async (prompt) => {
    addLogMessage(`Submitting prompt: ${prompt}`);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/process-prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch logos');
      }

      const data = await response.json();
      setLogos(data.logos);
      setError(null);
      addLogMessage(`Received ${data.logos.length} logos`);
    } catch (err) {
      setError(err.message);
      addLogMessage(`Error: ${err.message}`);
      setLogos([]);
    }
  };

  const handleDesignChange = (design) => {
    setTshirtDesign(design);
    addLogMessage(`Design changed: ${JSON.stringify(design)}`);
  };

  const handleAddLogo = (logo) => {
    if (!logo.thumbnail_url) {
      setError('Invalid logo data');
      addLogMessage('Invalid logo data');
      return;
    }
    const newLogo = { url: logo.thumbnail_url, size: 100, position: { x: 50, y: 50 } };
    const updatedDesign = {
      ...tshirtDesign,
      logos: [...tshirtDesign.logos, newLogo],
    };
    setTshirtDesign(updatedDesign);
    addLogMessage(`Added logo: ${logo.thumbnail_url}`);
  };

  return (
    <div className="App container">
      <h1>Shirt Generator</h1>
      <div className="row">
        <div className="col">
          <PromptInput onSubmit={handlePromptSubmit} />
          {error && <p className="text-danger">{error}</p>}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <LogoDisplay logos={logos} onAddLogo={handleAddLogo} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <DesignManager onDesignChange={handleDesignChange} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <OrderManager tshirtDesign={tshirtDesign} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Logger logMessages={logMessages} />
        </div>
      </div>
    </div>
  );
}

export default App;
