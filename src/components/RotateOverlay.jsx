import React from 'react';
import { Monitor, Maximize2, ShieldAlert } from 'lucide-react';
import portfolioData from '../data/portfolioData';
import './css/RotateOverlay.css';

export default function RotateOverlay() {
  const { profile } = portfolioData;

  return (
    <aside
      id="pc-only-overlay"
      className="rotate-overlay"
      role="region"
      aria-label="Desktop Required Notice"
    >
      <div className="rotate-overlay-backdrop" aria-hidden="true" />
      <div className="rotate-modal-card">
        <div className="rotate-icon-cluster" aria-hidden="true">
          <div className="rotate-phone-anim">
            <Monitor size={38} className="phone-icon" />
          </div>
          <div className="rotate-compass">
            <ShieldAlert size={20} className="compass-icon" />
          </div>
        </div>

        <span className="rotate-eyebrow">Rainforest Cabin • Desktop Experience</span>
        <h2 className="rotate-title">Desktop Viewing Required</h2>

        <p className="rotate-description">
          This portfolio is crafted as an immersive scrollable experience
          optimized exclusively for desktop screens with a width of 1024px or wider.
        </p>

        <div className="rotate-actions-hint">
          <div className="hint-pill">
            <Monitor size={16} className="hint-icon" />
            <span>Open on a PC or Laptop</span>
          </div>
          <span className="hint-divider">or</span>
          <div className="hint-pill">
            <Maximize2 size={16} className="hint-icon" />
            <span>Widen your browser window</span>
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
