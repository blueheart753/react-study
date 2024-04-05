import { useState } from 'react';

const Bulb = () => {
  const [light, setLight] = useState('Off');
  console.log(light);
  return (
    <div>
      {light === 'On' ? (
        <h1 style={{ backgroundColor: 'orange' }}>On</h1>
      ) : (
        <h1 style={{ backgroundColor: 'gray' }}>Off</h1>
      )}

      <button onClick={() => setLight(light == 'On' ? 'Off' : 'On')}>
        {light == 'On' ? 'Off' : 'On'}
      </button>
    </div>
  );
};

export default Bulb;
