import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, BookOpen, ExternalLink, Image as ImageIcon } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import './css/ProjectModal.css';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when opened or project changes
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, project]);

  const images = project?.images || [];
  const hasMultipleImages = images.length > 1;

  const handlePrevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Keyboard controls: Escape to close, Left/Right arrow for carousel
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft' && hasMultipleImages) {
        e.preventDefault();
        handlePrevImage();
      } else if (e.key === 'ArrowRight' && hasMultipleImages) {
        e.preventDefault();
        handleNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, hasMultipleImages, handlePrevImage, handleNextImage]);

  if (!isOpen || !project) return null;

  const currentImg = images[currentImageIndex];

  return (
    <div
      id="project-detail-modal"
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="project-modal-window"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <header className="project-modal-header">
          <div className="project-modal-badge">
            <span className="badge-dot" />
            <span>Cabin Archive • Project Volume</span>
          </div>
          <button
            id="modal-close-btn"
            className="project-modal-close-btn"
            onClick={onClose}
            aria-label="Close Project Modal (Esc)"
            title="Close (Esc)"
          >
            <X size={20} />
          </button>
        </header>

        {/* Modal Scrollable Body */}
        <div className="project-modal-content">
          {/* Title & Short Tagline */}
          <div className="project-heading-block">
            <h2 id="project-modal-title" className="project-modal-title">
              {project.title}
            </h2>
            <p className="project-modal-short-desc">{project.shortDescription}</p>
          </div>

          {/* Image / Gradient Carousel */}
          <div className="project-carousel-container" aria-label="Project Visuals Carousel">
            <div className="project-carousel-viewport">
              {currentImg?.type === 'image' ? (
                <img
                  src={currentImg.url}
                  alt={currentImg.alt || project.title}
                  className="project-carousel-img"
                  loading="lazy"
                />
              ) : (
                <div
                  className="project-carousel-gradient-card"
                  style={{ background: currentImg?.gradient || 'linear-gradient(135deg, #1b261b 0%, #2f4538 100%)' }}
                >
                  <div className="gradient-mockup-watermark">
                    <ImageIcon size={32} className="mockup-icon" />
                    <span className="mockup-label">{currentImg?.label || 'Project Visual Placeholder'}</span>
                    <span className="mockup-sub">Replace with screenshot in portfolioData.js</span>
                  </div>
                </div>
              )}

              {/* Carousel Controls (if multiple images) */}
              {hasMultipleImages && (
                <>
                  <button
                    className="carousel-control-btn carousel-control-btn--prev"
                    onClick={handlePrevImage}
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    className="carousel-control-btn carousel-control-btn--next"
                    onClick={handleNextImage}
                    aria-label="Next slide"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            {/* Carousel Caption and Indicators */}
            <div className="carousel-meta-bar">
              <span className="carousel-caption">
                {currentImg?.caption || currentImg?.label || ''}
              </span>
              {hasMultipleImages && (
                <div className="carousel-indicators">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      className={`carousel-indicator-dot ${i === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(i)}
                      aria-label={`Slide ${i + 1} of ${images.length}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="project-tech-section">
            <span className="section-mini-label">Technologies & Architecture</span>
            <div className="tech-tags-list">
              {project.technologies?.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Long Detailed Description */}
          <div className="project-long-desc-section">
            <span className="section-mini-label">Field Notes & Architecture</span>
            <div className="project-long-desc-text">
              {project.longDescription?.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Action Links (GitHub & Documentation) */}
          <div className="project-modal-actions">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="project-action-btn project-action-btn--primary"
                aria-label="Open project GitHub repository in new tab"
              >
                <GithubIcon size={17} />
                <span>View GitHub Repository</span>
                <ExternalLink size={14} className="action-external-icon" />
              </a>
            )}

            {project.documentationUrl && (
              <a
                href={project.documentationUrl}
                target="_blank"
                rel="noreferrer"
                className="project-action-btn project-action-btn--secondary"
                aria-label="Open project documentation in new tab"
              >
                <BookOpen size={17} />
                <span>Read Documentation</span>
                <ExternalLink size={14} className="action-external-icon" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
