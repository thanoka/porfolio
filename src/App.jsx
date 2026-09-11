import React, { useState, useCallback, useEffect } from 'react';
import portfolioData from './data/portfolioData';
import RoomNavigator from './components/RoomNavigator';
import FullscreenButton from './components/FullscreenButton';
import RotateOverlay from './components/RotateOverlay';
import AboutRoom from './components/rooms/AboutRoom';
import SkillsRoom from './components/rooms/SkillsRoom';
import ProjectsRoom from './components/rooms/ProjectsRoom';
import ExperienceRoom from './components/rooms/ExperienceRoom';
import './components/css/App.css';

export default function App() {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [turnDirection, setTurnDirection] = useState('none');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { roomMetadata, profile } = portfolioData;
  const currentRoom = roomMetadata[currentRoomIndex];

  // Dynamically sync web title
  useEffect(() => {
    document.title = `${profile.name} — ${profile.role} | Portfolio`;
  }, [profile.name, profile.role]);

  const handleNavigate = useCallback((newIndex, direction = 'right') => {
    setTurnDirection(direction);
    setCurrentRoomIndex(newIndex);
  }, []);

  const handleModalStateChange = useCallback((isOpen) => {
    setIsModalOpen(isOpen);
  }, []);

  return (
    <div className={`cabin-app-viewport ${isModalOpen ? 'modal-active' : ''}`}>
      {/* Minimal Ambient Rain Background Animation */}
      <div className="cabin-minimal-rain-bg" aria-hidden="true">
        <div className="ambient-rain-layer ambient-rain--layer1" />
        <div className="ambient-rain-layer ambient-rain--layer2" />
      </div>

      {/* Top Cabin HUD Header */}
      <header className={`cabin-hud-header ${isModalOpen ? 'modal-hidden' : ''}`} role="banner">
        <div className="hud-left">
          <div className="hud-cabin-seal" aria-hidden="true">
            <span className="seal-flame" />
          </div>
          <div className="hud-identity">
            <span className="hud-title">{profile.name}</span>
            <span className="hud-subtitle">Rainforest Cabin Portfolio • {profile.role}</span>
          </div>
        </div>

        <div className="hud-center">
          <div className="hud-wall-indicator" role="status" aria-label={`Current Wall: ${currentRoom.duty || currentRoom.name}`}>
            <span className="hud-wall-prefix">Wall {currentRoomIndex + 1} of {roomMetadata.length}</span>
            <span className="hud-wall-sep">•</span>
            <span className="hud-wall-name">{currentRoom.duty || currentRoom.name}</span>
          </div>
        </div>

        <div className="hud-right">
          <FullscreenButton />
        </div>
      </header>

      {/* Main 4-Wall Interactive Room Chamber (Expanded to 95% Screen Space) */}
      <main className="cabin-room-stage" role="main">
        {/* Wall 0: The Hearth (About & Education) */}
        <div
          className={`room-wall-slot ${currentRoomIndex === 0 ? 'active' : ''} turn-${turnDirection}`}
          aria-hidden={currentRoomIndex !== 0}
          tabIndex={currentRoomIndex === 0 ? 0 : -1}
        >
          {currentRoomIndex === 0 && <AboutRoom />}
        </div>

        {/* Wall 1: The Study (Open Field Journal & Skills) */}
        <div
          className={`room-wall-slot ${currentRoomIndex === 1 ? 'active' : ''} turn-${turnDirection}`}
          aria-hidden={currentRoomIndex !== 1}
          tabIndex={currentRoomIndex === 1 ? 0 : -1}
        >
          {currentRoomIndex === 1 && <SkillsRoom />}
        </div>

        {/* Wall 2: The Library (Full-Width Bookshelf & Projects) */}
        <div
          className={`room-wall-slot ${currentRoomIndex === 2 ? 'active' : ''} turn-${turnDirection}`}
          aria-hidden={currentRoomIndex !== 2}
          tabIndex={currentRoomIndex === 2 ? 0 : -1}
        >
          {currentRoomIndex === 2 && (
            <ProjectsRoom onModalStateChange={handleModalStateChange} />
          )}
        </div>

        {/* Wall 3: The Field Board (Pinned Corkboard & Experience) */}
        <div
          className={`room-wall-slot ${currentRoomIndex === 3 ? 'active' : ''} turn-${turnDirection}`}
          aria-hidden={currentRoomIndex !== 3}
          tabIndex={currentRoomIndex === 3 ? 0 : -1}
        >
          {currentRoomIndex === 3 && <ExperienceRoom />}
        </div>

        {/* Point & Click Wall Navigator (Left & Right Edge Arrows + Center Compass) */}
        <RoomNavigator
          currentRoomIndex={currentRoomIndex}
          onNavigate={handleNavigate}
          isModalOpen={isModalOpen}
        />

        {/* Navigation Tip at Bottom Left */}
        <aside className={`hud-nav-tip ${isModalOpen ? 'modal-hidden' : ''}`} aria-label="Navigation Guide">
          <div className="tip-keys">
            <kbd className="tip-kbd">←</kbd>
            <kbd className="tip-kbd">→</kbd>
          </div>
          <span className="tip-divider" aria-hidden="true">or</span>
          <div className="tip-keys">
            <kbd className="tip-kbd">A</kbd>
            <kbd className="tip-kbd">D</kbd>
          </div>
          <span className="tip-label">Turn Walls</span>
        </aside>
      </main>

      {/* Mobile Portrait Orientation Overlay */}
      <RotateOverlay />
    </div>
  );
}
