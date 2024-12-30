import React, { useEffect, useState } from 'react';

const BouncyBlockClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');

  return (
    <div className="flex gap-1 items-center">
      {[...hours, ':', ...minutes].map((digit, index) => (
        <div
          key={index}
          className={`
            w-8 h-10 flex items-center justify-center
            bg-white rounded-lg shadow-lg
            transform transition-transform duration-200
            hover:scale-110 hover:-translate-y-1
            ${digit === ':' ? 'w-4' : ''}
          `}
        >
          <span className="text-gray-800 font-bold">{digit}</span>
        </div>
      ))}
    </div>
  );
}

export default BouncyBlockClock;