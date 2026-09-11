import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, Eye, Info, BookDashed, Sparkles, ArrowUpRight } from 'lucide-react';
import portfolioData from '../../data/portfolioData';
import ProjectModal from '../ProjectModal';
import '../css/ProjectsRoom.css';

// Max books per shelf row before overflowing to the next
const BOOKS_PER_SHELF = 8;

export default function ProjectsRoom({ onModalStateChange }) {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredBookInfo, setHoveredBookInfo] = useState(null);
  const containerRef = useRef(null);

  // Clear tooltip if window resizes
  useEffect(() => {
    const handleDismiss = () => setHoveredBookInfo(null);
    window.addEventListener('resize', handleDismiss);
    return () => window.removeEventListener('resize', handleDismiss);
  }, []);

  // Split projects across shelves: fill top first, overflow to bottom
  const topShelf = projects.slice(0, BOOKS_PER_SHELF);
  const bottomShelf = projects.slice(BOOKS_PER_SHELF);

  const handleOpenProject = (project) => {
    setHoveredBookInfo(null);
    setSelectedProject(project);
    if (onModalStateChange) onModalStateChange(true);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (onModalStateChange) onModalStateChange(false);
  };

  const handleMouseEnterBook = (project, globalIndex, e) => {
    if (selectedProject) return;
    const btn = e.currentTarget;
    const container = containerRef.current;
    if (!container) return;

    const btnRect = btn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const tooltipWidth = 340;
    const spaceRight = containerRect.right - btnRect.right;
    const spaceLeft = btnRect.left - containerRect.left;

    // Place on the side with sufficient room (prefer right, fallback to left)
    const placeOnRight = spaceRight >= tooltipWidth + 24 || spaceRight >= spaceLeft;
    const side = placeOnRight ? 'right' : 'left';

    let x = placeOnRight
      ? btnRect.right - containerRect.left + 16
      : btnRect.left - containerRect.left - 16;

    // Safety boundary clamping horizontally
    if (placeOnRight) {
      if (x + tooltipWidth > containerRect.width - 10) {
        x = Math.max(10, containerRect.width - tooltipWidth - 10);
      }
    } else {
      if (x - tooltipWidth < 10) {
        x = Math.min(containerRect.width - 10, 10 + tooltipWidth);
      }
    }

    const bookCenterY = btnRect.top - containerRect.top + btnRect.height / 2;

    // Clamp Y so tooltip never overlaps top library header or sinks below bottom container edge
    const estimatedTooltipHalfHeight = 105;
    const minY = 75 + estimatedTooltipHalfHeight;
    const maxY = Math.max(minY, containerRect.height - estimatedTooltipHalfHeight - 15);
    const clampedY = Math.max(minY, Math.min(maxY, bookCenterY));
    const arrowOffsetY = Math.max(-65, Math.min(65, bookCenterY - clampedY));

    setHoveredBookInfo({
      project,
      globalIndex,
      side,
      x,
      y: clampedY,
      arrowOffsetY,
    });
  };

  const handleMouseLeaveBook = () => {
    setHoveredBookInfo(null);
  };

  const renderBook = (project, globalIndex) => (
    <button
      key={project.id}
      type="button"
      className="grand-book-spine-btn"
      onClick={() => handleOpenProject(project)}
      onMouseEnter={(e) => handleMouseEnterBook(project, globalIndex, e)}
      onMouseLeave={handleMouseLeaveBook}
      onFocus={(e) => handleMouseEnterBook(project, globalIndex, e)}
      onBlur={handleMouseLeaveBook}
      style={{
        '--book-color': project.spineColor || '#284431',
        '--book-accent': project.spineAccent || '#c8a165',
      }}
      aria-label={`Open project details for ${project.title}`}
    >
      <div className="book-spine-ribs">
        <span className="spine-rib" />
        <span className="spine-rib" />
        <span className="spine-rib" />
      </div>

      <div className="book-spine-text-wrap">
        <span className="book-spine-roman">Vol. 0{globalIndex + 1}</span>
        <span className="book-spine-title">
          {project.bookSpineTitle || project.title}
        </span>
      </div>

      <div className="book-spine-ribs">
        <span className="spine-rib" />
        <span className="spine-rib" />
      </div>
      <div className="book-spine-bottom">
        <BookOpen size={15} className="spine-emblem" />
      </div>
    </button>
  );

  const renderEmptyShelf = () => (
    <div className="empty-shelf-placeholder">
      <BookDashed size={28} className="empty-shelf-icon" />
      <span className="empty-shelf-text">No volumes on this shelf yet</span>
      <span className="empty-shelf-hint">Add projects in portfolioData.js</span>
    </div>
  );

  return (
    <div id="room-projects" className="room-scene projects-room" role="region" aria-label="Wall 3: The Library Bookshelf">
      <div ref={containerRef} className="full-library-container">
        {/* Bookshelf Header */}
        <div className="library-wall-header">
          <div className="header-left">
            <span className="library-crest-numeral">III</span>
            <div className="library-titles">
              <span className="library-eyebrow">The Library • Project Archives</span>
              <h2 className="library-main-title">Full Stack Works & Software Volumes</h2>
            </div>
          </div>
          <div className="header-right">
            <span className="shelf-info-badge">
              <Info size={14} className="info-icon" />
              <span>Select any volume to inspect</span>
            </span>
          </div>
        </div>

        {/* Grand Bookshelf — Two shelves, fills top first */}
        <div className="grand-bookshelf-structure">
          {/* Top Shelf */}
          <div className="bookshelf-tier">
            <div className="tier-books-row">
              <div className="brass-bookend bookend--left" aria-hidden="true">
                <span className="bookend-crest" />
              </div>

              {topShelf.length > 0
                ? topShelf.map((p, i) => renderBook(p, i))
                : renderEmptyShelf()}

              <div className="brass-bookend bookend--right" aria-hidden="true">
                <span className="bookend-crest" />
              </div>
            </div>
            <div className="shelf-thick-plank" />
          </div>

          {/* Bottom Shelf */}
          <div className="bookshelf-tier">
            <div className="tier-books-row">
              <div className="brass-bookend bookend--left" aria-hidden="true">
                <span className="bookend-crest" />
              </div>

              {bottomShelf.length > 0
                ? bottomShelf.map((p, i) => renderBook(p, BOOKS_PER_SHELF + i))
                : renderEmptyShelf()}

              <div className="brass-bookend bookend--right" aria-hidden="true">
                <span className="bookend-crest" />
              </div>
            </div>
            <div className="shelf-thick-plank" />
          </div>
        </div>

        {/* Hover Project Summary Tooltip (Side Floating) */}
        {hoveredBookInfo && !selectedProject && (
          <div
            className={`project-shelf-tooltip tooltip--${hoveredBookInfo.side || 'right'}`}
            style={{
              left: `${hoveredBookInfo.x}px`,
              top: `${hoveredBookInfo.y}px`,
              '--arrow-y': `${hoveredBookInfo.arrowOffsetY || 0}px`,
            }}
            role="tooltip"
            aria-live="polite"
          >
            <div className="tooltip-header-row">
              <span className="tooltip-vol-tag">Vol. 0{hoveredBookInfo.globalIndex + 1}</span>
              {hoveredBookInfo.project.featured && (
                <span className="tooltip-featured-pill">
                  <Sparkles size={11} />
                  <span>Featured</span>
                </span>
              )}
            </div>

            <h4 className="tooltip-project-title">
              {hoveredBookInfo.project.title}
            </h4>

            <p className="tooltip-project-desc">
              {hoveredBookInfo.project.shortDescription}
            </p>

            {hoveredBookInfo.project.technologies?.length > 0 && (
              <div className="tooltip-tech-pills">
                {hoveredBookInfo.project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="tooltip-tech-tag">{tech}</span>
                ))}
                {hoveredBookInfo.project.technologies.length > 4 && (
                  <span className="tooltip-tech-tag tooltip-tech-more">
                    +{hoveredBookInfo.project.technologies.length - 4}
                  </span>
                )}
              </div>
            )}

            <div className="tooltip-click-hint">
              <Eye size={13} />
              <span>คลิกเพื่อดูรายละเอียดและผลงาน</span>
              <ArrowUpRight size={12} className="hint-arrow" />
            </div>

            <div
              className="tooltip-pointer-arrow"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseProject}
      />
    </div>
  );
}
