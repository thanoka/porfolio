import React, { useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import portfolioData from '../data/portfolioData';
import './css/RoomNavigator.css';

export default function RoomNavigator({
  currentRoomIndex,
  onNavigate,
  isModalOpen = false,
}) {
  const { roomMetadata } = portfolioData;
  const totalRooms = roomMetadata.length;

  const handlePrev = useCallback(() => {
    if (isModalOpen) return;
    const nextIndex = (currentRoomIndex - 1 + totalRooms) % totalRooms;
    onNavigate(nextIndex, 'left');
  }, [currentRoomIndex, totalRooms, onNavigate, isModalOpen]);

  const handleNext = useCallback(() => {
    if (isModalOpen) return;
    const nextIndex = (currentRoomIndex + 1) % totalRooms;
    onNavigate(nextIndex, 'right');
  }, [currentRoomIndex, totalRooms, onNavigate, isModalOpen]);

  // Keyboard Navigation: Left/Right Arrow & A/D
  useEffect(() => {
    const handleKeyDown = (e) => {
      // If modal is active, let modal handle its own keys (like Escape or carousel)
      if (isModalOpen) return;

      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, isModalOpen]);

  const currentRoom = roomMetadata[currentRoomIndex];
  const prevIndex = (currentRoomIndex - 1 + totalRooms) % totalRooms;
  const nextIndex = (currentRoomIndex + 1) % totalRooms;
  const prevRoom = roomMetadata[prevIndex];
  const nextRoom = roomMetadata[nextIndex];

  return (
    <nav className={`room-navigator ${isModalOpen ? 'modal-hidden' : ''}`} aria-label="Cabin Wall Navigation">
      {/* Left Wall Turn Button with Destination Duty */}
      <button
        id="nav-btn-prev-wall"
        className="nav-arrow-btn nav-arrow-btn--left"
        onClick={handlePrev}
        disabled={isModalOpen}
        aria-label={`Turn left to ${prevRoom.duty || prevRoom.name} (${prevRoom.name})`}
        title={`Turn left to ${prevRoom.duty || prevRoom.name} [Left Arrow / A]`}
      >
        <div className="nav-arrow-icon-wrap" aria-hidden="true">
          <ChevronLeft size={22} strokeWidth={2.5} />
        </div>
        <div className="nav-arrow-info">
          <span className="nav-arrow-hint-dir">Turn Left</span>
          <span className="nav-arrow-dest-name">{prevRoom.duty || prevRoom.name}</span>
        </div>
      </button>

      {/* Center Compass & Wall Indicator (Footer Dock) */}
      <div className="compass-dock" role="status" aria-live="polite">
        <div className="compass-inner">
          <div className="compass-needle-ring">
            <Compass size={20} className="compass-rose-icon" />
            <span className="compass-bearing">{currentRoom.compass}</span>
          </div>

          <div className="room-dots">
            {roomMetadata.map((room, idx) => (
              <button
                key={room.id}
                type="button"
                className={`room-dot-pill ${idx === currentRoomIndex ? 'active' : ''}`}
                onClick={() => !isModalOpen && onNavigate(idx, idx > currentRoomIndex ? 'right' : 'left')}
                disabled={isModalOpen}
                aria-label={`Go directly to ${room.duty || room.name} (Wall ${idx + 1})`}
                aria-current={idx === currentRoomIndex ? 'true' : 'false'}
              >
                <span className="dot-index">{idx + 1}</span>
                <span className="dot-name">{room.duty || room.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Wall Turn Button with Destination Duty */}
      <button
        id="nav-btn-next-wall"
        className="nav-arrow-btn nav-arrow-btn--right"
        onClick={handleNext}
        disabled={isModalOpen}
        aria-label={`Turn right to ${nextRoom.duty || nextRoom.name} (${nextRoom.name})`}
        title={`Turn right to ${nextRoom.duty || nextRoom.name} [Right Arrow / D]`}
      >
        <div className="nav-arrow-icon-wrap" aria-hidden="true">
          <ChevronRight size={22} strokeWidth={2.5} />
        </div>
        <div className="nav-arrow-info">
          <span className="nav-arrow-hint-dir">Turn Right</span>
          <span className="nav-arrow-dest-name">{nextRoom.duty || nextRoom.name}</span>
        </div>
      </button>
    </nav>
  );
}
