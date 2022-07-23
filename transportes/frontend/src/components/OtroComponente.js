import React, { useState } from 'react';
import '../styles/components/OtroComponente.css';

function OtroComponente(props) {

  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <div className='counter'>
        <h3>{`Contador: ${counter}`}</h3>
      </div>
      <div className='buttonGroup'>
        <button className='success' onClick={() => setCounter(counter+1)}> + </button>
        <button className='error' onClick={() => setCounter(counter-1)}> - </button>
      </div>
    </div>
  )
}

export default OtroComponente