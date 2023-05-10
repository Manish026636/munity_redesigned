import React, { useState, useEffect } from 'react';
import BeepSound from '../assets/BeepSound.wav';
const Timer = () => {
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    if (seconds === 8) {
      playBeepSound();
    }
  }, [seconds]);

  const playBeepSound = () => {
    const audio = new Audio(BeepSound);
    audio.play()
      .then(() => {
        // Sound playback started successfully
        console.log('Beep sound played');
      })
      .catch((error) => {
        // Sound playback failed or was blocked
        console.error('Error playing beep sound:', error);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-6xl font-bold">{seconds}</div>
    </div>
  );
};

export default Timer;
