import React from 'react';
import Galaxy from './Galaxy';

const Background3D = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1, 
      pointerEvents: 'none',
      background: 'var(--bg-color)' 
    }}>
      <Galaxy
        starSpeed={0.6}
        density={0.8}
        hueShift={125}
        speed={1.2}
        glowIntensity={0.3}
        saturation={0.95}
        mouseRepulsion={false}
        repulsionStrength={2}
        twinkleIntensity={0.4}
        rotationSpeed={0.1}
        transparent
      />
    </div>
  );
};

export default Background3D;
