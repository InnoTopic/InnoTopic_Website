import React from 'react';

function LogoDisplay({ logos, onAddLogo }) {
  return (
    <div className="logo-display">
      {logos.map((logo, index) => (
        <div key={index} onClick={() => onAddLogo(logo)}>
          <img src={logo} alt={`Logo ${index + 1}`} />
          <p>{`Logo ${index + 1}`}</p>
        </div>
      ))}
    </div>
  );
}

export default LogoDisplay;
