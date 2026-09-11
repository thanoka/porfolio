import React, { useState, useEffect } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
import './css/FullscreenButton.css';

export default function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Check if fullscreen API is available in current environment
    if (!document.fullscreenEnabled && !document.webkitFullscreenEnabled) {
      setIsSupported(false);
      return;
    }

    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement || document.webkitFullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          await document.documentElement.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen request could not be completed:', err);
    }
  };

  if (!isSupported) return null;

  return (
    <button
      id="fullscreen-toggle-btn"
      className={`fullscreen-btn ${isFullscreen ? 'active' : ''}`}
      onClick={toggleFullscreen}
      aria-label={isFullscreen ? 'Exit Fullscreen Mode' : 'Enter Fullscreen Mode'}
      title={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Enter Fullscreen for Room Atmosphere'}
    >
      <div className="fullscreen-btn-glow" aria-hidden="true" />
      {isFullscreen ? (
        <Minimize2 className="fullscreen-icon" size={20} strokeWidth={2} />
      ) : (
        <Maximize2 className="fullscreen-icon" size={20} strokeWidth={2} />
      )}
      <span className="fullscreen-label">
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </span>
    </button>
  );
}
