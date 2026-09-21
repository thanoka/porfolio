import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  ExternalLink,
  Image as ImageIcon,
  CheckCircle2,
  Layers,
  Sparkles,
  Star,
  Cpu,
  Server,
  Activity,
} from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import portfolioData from '../data/portfolioData';
import './css/ProjectModal.css';

const TAB_ICONS = {
  Layers,
  Cpu,
  BookOpen,
};

export default function ProjectModal({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const { modalConfig } = portfolioData;
  const {
    badgeText = 'Cabin Archive • Project Volume',
    statusBadge = 'Verified Masterwork',
    highlightsHeader = 'Architectural Breakthroughs & Innovations',
    meshHeader = 'Decoupled Subsystems & Services Mesh',
    techStackHeader = 'Technologies & Infrastructure Stack',
    fieldNotesHeader = 'Engineering Field Notes & Architecture Deep-Dive',
    githubButtonText = 'Explore GitHub Repository',
    docsButtonText = 'Read Documentation & Specs',
    closeTooltip = 'Close Folio (Esc)',
    imagePlaceholderLabel = 'Project Visual Artwork',
    tabs = [
      { id: 'overview', label: 'Architecture & Mesh', icon: 'Layers' },
      { id: 'tech', label: 'Technologies & Stack', icon: 'Cpu' },
      { id: 'notes', label: 'Engineering Field Notes', icon: 'BookOpen' },
    ],
  } = modalConfig || {};

  // Synchronize state during render when project changes (React 19 pattern)
  const [prevProjectId, setPrevProjectId] = useState(project?.id);
  if (project?.id !== prevProjectId) {
    setPrevProjectId(project?.id);
    setCurrentImageIndex(0);
    setActiveTab('overview');
  }

  const images = project?.images || [];
  const hasMultipleImages = images.length > 1;

  const handlePrevImage = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    },
    [images.length]
  );

  const handleNextImage = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    },
    [images.length]
  );

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
  const accentColor = project.spineAccent || '#d4a754';
  const themeColor = project.spineColor || '#2b1f3d';
  const volumeLabel = project.volumeNumeral || 'VOL. 01';

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
        style={{
          '--modal-accent': accentColor,
          '--modal-theme': themeColor,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Corner Brass Brackets */}
        <div className="modal-corner-brackets" aria-hidden="true">
          <span className="modal-corner modal-corner--tl" />
          <span className="modal-corner modal-corner--tr" />
          <span className="modal-corner modal-corner--bl" />
          <span className="modal-corner modal-corner--br" />
        </div>

        {/* Modal Header Bar */}
        <header className="project-modal-header">
          <div className="project-modal-header-left">
            <div className="project-modal-vol-tag">
              <span className="vol-tag-text">{volumeLabel}</span>
            </div>

            <div className="project-modal-badge">
              <span
                className="badge-dot"
                style={{ backgroundColor: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
              />
              <span>{badgeText}</span>
            </div>

            {statusBadge && (
              <div className="project-status-beacon">
                <span className="status-live-beacon" />
                <span>{statusBadge}</span>
              </div>
            )}

            {project.rating && (
              <div className="project-modal-rating" aria-label={`Rating: ${project.rating} stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="star-icon star-icon--filled" />
                ))}
              </div>
            )}
          </div>

          <button
            id="modal-close-btn"
            className="project-modal-close-btn"
            onClick={onClose}
            aria-label={closeTooltip}
            title={closeTooltip}
          >
            <X size={18} />
          </button>
        </header>

        {/* Modal Scrollable Body */}
        <div className="project-modal-content">
          {/* ========================================================
              HERO PRESENTATION DECK (Two-Column Split)
              Left: Cinematic Gallery with Ambient Halo & Filmstrip
              Right: Volume Blueprint, Telemetry Grid & Direct Actions
              ======================================================== */}
          <div className="modal-hero-deck">
            {/* Left: Cinematic Gallery */}
            <div className="modal-gallery-column">
              <div className="project-carousel-viewport">
                {/* Ambient Halo Behind Image */}
                {currentImg?.type === 'image' && (
                  <div
                    className="carousel-ambient-halo"
                    style={{ backgroundImage: `url(${currentImg.url})` }}
                    aria-hidden="true"
                  />
                )}

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
                    style={{
                      background:
                        currentImg?.gradient ||
                        'linear-gradient(135deg, #180f0a 0%, #2e1c12 100%)',
                    }}
                  >
                    <div className="gradient-mockup-watermark">
                      <ImageIcon size={36} className="mockup-icon" style={{ color: accentColor }} />
                      <span className="mockup-label">
                        {currentImg?.label || imagePlaceholderLabel}
                      </span>
                    </div>
                  </div>
                )}

                {/* Slide Counter Badge */}
                {images.length > 0 && (
                  <div className="carousel-slide-counter">
                    <span>
                      {String(currentImageIndex + 1).padStart(2, '0')} /{' '}
                      {String(images.length).padStart(2, '0')}
                    </span>
                  </div>
                )}

                {/* Carousel Navigation Buttons */}
                {hasMultipleImages && (
                  <>
                    <button
                      className="carousel-control-btn carousel-control-btn--prev"
                      onClick={handlePrevImage}
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      className="carousel-control-btn carousel-control-btn--next"
                      onClick={handleNextImage}
                      aria-label="Next slide"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Caption & Clickable Thumbnail Filmstrip */}
              <div className="carousel-bottom-strip">
                <span className="carousel-caption">
                  {currentImg?.caption || currentImg?.label || ''}
                </span>

                {hasMultipleImages && (
                  <div className="carousel-thumbnails-row">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`carousel-thumb-btn ${idx === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(idx)}
                        aria-label={`View image ${idx + 1}`}
                        style={idx === currentImageIndex ? { borderColor: accentColor } : {}}
                      >
                        {img.type === 'image' ? (
                          <img src={img.url} alt={img.alt || ''} className="thumb-preview-img" />
                        ) : (
                          <span className="thumb-placeholder-dot" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Volume Blueprint & Architecture Telemetry */}
            <div className="modal-blueprint-column">
              <div className="blueprint-header-block">
                <div className="blueprint-vol-pill" style={{ color: accentColor, borderColor: `${accentColor}50` }}>
                  <span>{volumeLabel} ARCHITECTURE</span>
                </div>
                <h2 id="project-modal-title" className="project-modal-title">
                  {project.title}
                </h2>
                <p className="project-modal-short-desc">{project.shortDescription}</p>
              </div>

              {/* 4-Metric Architectural Telemetry Grid */}
              {project.keyMetrics && project.keyMetrics.length > 0 && (
                <div className="modal-telemetry-grid">
                  {project.keyMetrics.map((metric, mIdx) => (
                    <div key={mIdx} className="telemetry-grid-item">
                      <span className="telemetry-item-label">{metric.label}</span>
                      <span className="telemetry-item-val" style={{ color: accentColor }}>
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Direct Action Links */}
              <div className="blueprint-actions-row">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-btn project-action-btn--primary"
                    aria-label="Open project GitHub repository in new tab"
                  >
                    <GithubIcon size={16} />
                    <span>{githubButtonText}</span>
                    <ExternalLink size={13} className="action-external-icon" />
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
                    <BookOpen size={16} />
                    <span>{docsButtonText}</span>
                    <ExternalLink size={13} className="action-external-icon" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ========================================================
              INTERACTIVE DOSSIER NAVIGATION TABS
              ======================================================== */}
          <div className="modal-dossier-nav">
            {tabs.map((tab) => {
              const TabIcon = TAB_ICONS[tab.icon] || Sparkles;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`modal-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  style={isActive ? { borderColor: accentColor, color: '#fff' } : {}}
                >
                  <TabIcon size={14} className="tab-icon" style={isActive ? { color: accentColor } : {}} />
                  <span>{tab.label}</span>
                  {isActive && (
                    <span
                      className="tab-active-dot"
                      style={{ backgroundColor: accentColor, boxShadow: `0 0 6px ${accentColor}` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ========================================================
              TAB CONTENT 1: ARCHITECTURE & SERVICES MESH
              ======================================================== */}
          {activeTab === 'overview' && (
            <div className="tab-pane tab-pane--overview">
              {/* Architectural Breakthroughs */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="project-highlights-section">
                  <div className="section-mini-header">
                    <Sparkles size={14} className="section-icon" style={{ color: accentColor }} />
                    <span className="section-mini-label">{highlightsHeader}</span>
                  </div>
                  <div className="modal-highlights-grid">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="modal-highlight-card">
                        <div className="highlight-card-header">
                          <CheckCircle2 size={14} className="highlight-check" style={{ color: accentColor }} />
                          <span className="highlight-label" style={{ color: accentColor }}>
                            {item.label}
                          </span>
                        </div>
                        <p className="highlight-detail">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Decoupled Subsystems & Services Mesh */}
              {project.services && project.services.length > 0 && (
                <div className="project-mesh-section">
                  <div className="section-mini-header">
                    <Server size={14} className="section-icon" style={{ color: accentColor }} />
                    <span className="section-mini-label">{meshHeader}</span>
                  </div>
                  <div className="modal-services-grid">
                    {project.services.map((srv, sIdx) => (
                      <div key={sIdx} className="modal-service-card">
                        <div className="service-card-top">
                          <div className="service-name-group">
                            <Activity size={12} className="service-pulse-icon" style={{ color: accentColor }} />
                            <span className="service-name">{srv.name}</span>
                          </div>
                          <span className="service-port-badge">{srv.port}</span>
                        </div>
                        <span className="service-stack-pill">{srv.stack}</span>
                        <p className="service-role-desc">{srv.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================
              TAB CONTENT 2: TECHNOLOGIES & STACK
              ======================================================== */}
          {activeTab === 'tech' && (
            <div className="tab-pane tab-pane--tech">
              <div className="project-tech-section">
                <div className="section-mini-header">
                  <Cpu size={14} className="section-icon" style={{ color: accentColor }} />
                  <span className="section-mini-label">{techStackHeader}</span>
                </div>
                <div className="tech-tags-list">
                  {project.technologies?.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB CONTENT 3: ENGINEERING FIELD NOTES
              ======================================================== */}
          {activeTab === 'notes' && (
            <div className="tab-pane tab-pane--notes">
              {project.longDescription && (
                <div className="project-long-desc-section">
                  <div className="section-mini-header">
                    <BookOpen size={14} className="section-icon" style={{ color: accentColor }} />
                    <span className="section-mini-label">{fieldNotesHeader}</span>
                  </div>
                  <div className="project-long-desc-text">
                    {project.longDescription.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
