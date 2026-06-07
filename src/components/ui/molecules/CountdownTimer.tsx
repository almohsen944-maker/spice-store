import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  expiryDate: Date;
}

/**
 * Molecule for displaying a time-limited offer
 */
export const CountdownTimer: React.FC<CountdownTimerProps> = ({ expiryDate }) => {
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, expiryDate.getTime() - Date.now()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(Math.max(0, expiryDate.getTime() - Date.now()));
    }, 1000);
    return () => clearInterval(timer);
  }, [expiryDate]);

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="flex gap-4 text-brand-brown font-serif">
      {[{ label: 'Hrs', value: hours }, { label: 'Mins', value: minutes }, { label: 'Secs', value: seconds }].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <span className="text-2xl font-bold">{item.value.toString().padStart(2, '0')}</span>
          <span className="text-xs uppercase tracking-widest">{item.label}</span>
        </div>
      ))}
    </div>
  );
};
