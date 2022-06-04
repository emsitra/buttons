import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../IconButton/Icon';

import './AnimatedButton.css';

export const AnimatedButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const onMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  const onConnected = () => {
    setIsConnected(!isConnected);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsHovered(false);
    }, 1000);
  }, [isConnected]);

  return (
    <div className="animated-button" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Button className={isHovered ? 'hidden' : ''}>
        {!isConnected ? 'Connect' : 'Disconnect'}
      </Button>
      <Icon isConnect={!isConnected} onClick={onConnected} />
    </div>
  );
};
