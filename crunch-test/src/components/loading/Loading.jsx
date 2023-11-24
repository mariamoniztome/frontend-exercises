import React, { useState, useEffect } from 'react';
import './loading.scss';

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Clear the timeout if the component unmounts before the 5 seconds
    return () => clearTimeout(timeoutId);
  }, []); // The empty dependency array ensures that this effect runs only once

  return isVisible ? (
    <div className="loading">
      <div className="loading-outer">
        <div className="loading-middle">
          <div className="loading-inner"></div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Loading;
