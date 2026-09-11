import React from 'react';
import { Smartphone, Monitor, Compass } from 'lucide-react';
import portfolioData from '../data/portfolioData';
import './css/RotateOverlay.css';

export default function RotateOverlay() {
  const { profile } = portfolioData;

  return (
    <aside
      id="rotate-device-overlay"
      className="rotate-overlay"
      role="region"
      aria-label="Device Orientation Notice"
    >
      <div className="rotate-overlay-backdrop" aria-hidden="true" />
      <div className="rotate-modal-card">
        <div className="rotate-icon-cluster" aria-hidden="true">
          <div className="rotate-phone-anim">
            <Smartphone size={38} className="phone-icon" />
          </div>
          <div className="rotate-compass">
            <Compass size={24} className="compass-icon" />
          </div>
        </div>

        <span className="rotate-eyebrow">Rainforest Cabin • Desktop View</span>
        <h2 className="rotate-title">Please Rotate Your Device</h2>

        <p className="rotate-description">
          This portfolio is crafted as a 4-wall point-and-click room experience optimized for desktop screens and landscape view.
        </p>

        <div className="rotate-actions-hint">
          <div className="hint-pill">
            <Smartphone size={16} className="hint-icon" />
            <span>Turn to Landscape</span>
          </div>
          <span className="hint-divider">or</span>
          <div className="hint-pill">
            <Monitor size={16} className="hint-icon" />
            <span>Open on PC / Laptop</span>
          </div>
        </div>

        <div className="rotate-wood-footer">
          <span className="candle-dot" />
          <span>{profile.name} • {profile.role}</span>
          <span className="candle-dot" />
        </div>
      </div>
    </aside>
  );
}
