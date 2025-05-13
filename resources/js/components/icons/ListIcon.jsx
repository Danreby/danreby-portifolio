import React, { useState } from 'react';

const ListIcon = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-8 h-8 flex flex-col justify-between cursor-pointer p-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`block h-1 bg-black rounded transition-all duration-300 ${
          hovered ? 'translate-x-1' : 'w-6'
        }`}
      />
      <span
        className={`block h-1 bg-black rounded transition-all duration-300 ${
          hovered ? 'translate-x-2' : 'w-6'
        }`}
      />
      <span
        className={`block h-1 bg-black rounded transition-all duration-300 ${
          hovered ? 'translate-x-3' : 'w-6'
        }`}
      />
    </div>
  );
};

export default ListIcon;
