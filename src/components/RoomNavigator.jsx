import React from 'react';
import { Compass } from 'lucide-react';
import './css/RoomNavigator.css';

export default function RoomNavigator({
  activeSection = 0,
  onNavigate,
  isModalOpen = false,
  sectionNames = [],
}) {
  return (
    <nav
      className={`scroll-dot-navigator ${isModalOpen ? 'modal-hidden' : ''}`}
      aria-label="Section Navigation"
    >
      <div className="dot-nav-inner">
        {/* Compass icon at top */}
        <div className="dot-nav-compass" aria-hidden="true">
          <Compass size={16} className="dot-compass-icon" />
        </div>

        {/* Section dots */}
        <div className="dot-nav-track">
          {sectionNames.map((name, idx) => (
            <button
              key={idx}
              type="button"
              className={`dot-nav-item ${idx === activeSection ? 'active' : ''}`}
              onClick={() => onNavigate(idx)}
              aria-label={`Scroll to ${name} section`}
              aria-current={idx === activeSection ? 'true' : 'false'}
            >
              <span className="dot-pip" />
              <span className="dot-label">{name}</span>
            </button>
          ))}
        </div>

        {/* Section counter at bottom */}
        <span className="dot-nav-counter" aria-hidden="true">
          {activeSection + 1}/{sectionNames.length}
        </span>
      </div>
    </nav>
  );
}
