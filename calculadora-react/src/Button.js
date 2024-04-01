import React from 'react';

function Button({ children, onClick }) {
  return (
    <button onClick={() => onClick(children)} className="button">
      {children}
    </button>
  );
}

export default Button;
