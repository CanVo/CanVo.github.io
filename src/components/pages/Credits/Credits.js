import React from 'react';
import '../../../App.css';
import './Credits.css'

function Credits () {
  return (
    <>
      <div className='special-thanks'>
        <h1> Special Thanks </h1>
        <h2> You (for willing to read my janky code and ramblings) </h2>
      </div>

      <div className='royalty-free-credit'>
          <h1> Royalty Free Credit </h1>
          <h2> Home Hero Video by Uzunov Rostislav: https://www.pexels.com/video/spooky-jack-o-lantern-computer-animation-9867271/ </h2>
          <h2> Gem Icon used for favicon.ico by Icons8, taken from Icons8</h2>
      </div>
    </>
  );
}

export default Credits;