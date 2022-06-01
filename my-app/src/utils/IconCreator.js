import React from 'react';

export default function activeIcon({activeIconObj}) {
  return (
    <div className="activeIcon d-inline">
      <a href={activeIconObj.link}>
        <img src={activeIconObj.image} alt="external link"></img>
      </a>
    </div>
  );
}