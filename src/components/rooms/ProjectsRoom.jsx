import React, { useState } from 'react';
import {
  Star,
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  BookOpen,
  Cpu,
  Layers,
  Zap,
  Info,
  CheckCircle2,
} from 'lucide-react';
import GithubIcon from '../icons/GithubIcon';
import portfolioData from '../../data/portfolioData';
import ProjectModal from '../ProjectModal';
import '../css/ProjectsRoom.css';

/**
 * 3D Book Component
 * Renders a physical 3D hardcover book with spine crease, 3D paper page edges,
 * foil embossed title, jacket art, and shelf contact shadow.
 */
function Book3D({ project, index, isHero = false, isActive = false, onClick }) {
  const coverImage = project.images?.[0]?.url;
  const volNumber = `VOL. 0${index + 1}`;

  return (
    <div
      className={`book-3d-scene ${isHero ? 'book-3d-scene--hero' : 'book-3d-scene--shelf'} ${
        isActive ? 'book-3d-scene--active' : ''
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`${project.bookSpineTitle || project.title}, Volume ${index + 1} - Click to look inside`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div
        className="book-3d-item"
        style={{
          '--book-color': project.spineColor || '#284431',
          '--book-accent': project.spineAccent || '#e0c27a',
        }}
      >
        {/* Top Paper Page Edge (3D Thickness) */}
        <div className="book-3d-pages-top" aria-hidden="true" />

        {/* Right Paper Page Edge (3D Thickness) */}
        <div className="book-3d-pages-right" aria-hidden="true">
          <div className="book-pages-lines" />
        </div>

        {/* Hardcover Front */}
        <div className="book-3d-cover">
          {/* Spine Hinge Groove Shadow (Hardcover crease) */}
          <div className="book-cover-hinge" aria-hidden="true" />

          {/* Inner Book Cover Layout */}
          <div className="book-cover-inner">
            {/* Top Foil Banner */}
            <div className="book-cover-header">
              <span className="book-cover-vol">{volNumber}</span>
              {project.featured && (
                <span className="book-cover-featured-seal">
                  <Sparkles size={10} />
                  <span>MASTERWORK</span>
                </span>
              )}
            </div>

            {/* Jacket Artwork Illustration Frame */}
            <div className="book-cover-art-frame">
              {coverImage ? (
                <img
                  src={coverImage}
                  alt={project.images[0]?.alt || project.title}
                  className="book-cover-art-img"
                  loading="lazy"
                />
              ) : (
                <div className="book-cover-art-fallback">
                  <span>{project.bookSpineTitle}</span>
                </div>
              )}
              <div className="book-cover-art-vignette" />

              {/* Hover look inside overlay */}
              <div className="book-cover-inspect-overlay">
                <BookOpen size={20} className="inspect-icon" />
                <span>LOOK INSIDE</span>
              </div>
            </div>

            {/* Book Cover Typography & Foiling */}
            <div className="book-cover-footer">
              <h4 className="book-cover-main-title">
                {project.bookSpineTitle || project.title}
              </h4>
              <p className="book-cover-author">By {portfolioData.profile.name}</p>
              <div className="book-cover-seal-line">
                <span className="book-cover-seal-pill">CABIN ARCHIVES</span>
                <span className="book-cover-edition">FOLIO EDITION</span>
              </div>
            </div>
          </div>

          {/* Hardcover Edge Embossing & Specular Sheen */}
          <div className="book-cover-emboss-border" aria-hidden="true" />
          <div className="book-cover-sheen" aria-hidden="true" />
        </div>
      </div>

      {/* Realistic Drop Shadow on Shelf */}
      <div className="book-3d-shelf-shadow" aria-hidden="true" />
    </div>
  );
}

/**
 * Star Rating Helper
 * Renders 5 stars based on project.rating value (default: 5.0)
 */
function RatingStars({ rating = 5.0 }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const isFilled = rating >= i;
    const isHalf = !isFilled && rating >= i - 0.5;
    stars.push(
      <Star
        key={i}
        size={12}
        className={`star-icon ${
          isFilled ? 'star-icon--filled' : isHalf ? 'star-icon--half' : 'star-icon--empty'
        }`}
      />
    );
  }
  return (
    <div className="shelf-book-stars-row">
      <div className="shelf-stars-group" aria-label={`Rating ${rating} out of 5 stars`}>
        {stars}
      </div>
      <span className="shelf-stars-score">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function ProjectsRoom({ onModalStateChange }) {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [featuredIndex, setFeaturedIndex] = useState(() => {
    const featIdx = projects.findIndex((p) => p.featured);
    return featIdx >= 0 ? featIdx : 0;
  });

  const featuredProject = projects[featuredIndex] || projects[0];

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    if (onModalStateChange) onModalStateChange(true);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (onModalStateChange) onModalStateChange(false);
  };

  const handleSelectFeatured = (index) => {
    setFeaturedIndex(index);
  };

  return (
    <div
      id="room-projects"
      className="room-scene projects-room"
      role="region"
      aria-label="The Library — Project Archives & Software Volumes"
    >
      <div className="library-container">
        {/* =========================================================
            1. SECTION HEADER BAR
            ========================================================= */}
        <div className="library-wall-header" data-scroll-animate="fade-down">
          <div className="header-left">
            <span className="library-crest-numeral">III</span>
            <div className="library-titles">
              <span className="library-eyebrow">The Library • Project Archives</span>
              <h2 className="library-main-title">Full Stack Works &amp; Software Volumes</h2>
            </div>
          </div>
          <div className="header-right">
            <span className="shelf-info-badge">
              <Info size={14} className="info-icon" />
              <span>Click any volume to highlight above • Click Look Inside to inspect</span>
            </span>
          </div>
        </div>

        {/* =========================================================
            2. UPPER DECK: FEATURED MASTERWORK & AUTHOR COMPANIONS
            (Modeled after Google Books Upper Shelf)
            ========================================================= */}
        <div className="library-showcase-panel" data-scroll-animate="fade-up" data-scroll-delay="1">
          <div className="library-deck-content">
            {/* Left Column: Heading, Synopsis & Quick Jump */}
            <div className="deck-intro-col">
              <div className="deck-badge-row">
                <span className="deck-accent-badge">
                  <Sparkles size={12} />
                  <span>Featured Masterwork</span>
                </span>
                <span className="deck-vol-tag">
                  VOL. 0{featuredIndex + 1} OF 0{projects.length}
                </span>
              </div>

              <h3 className="deck-headline">Curated Software Masterworks</h3>
              <p className="deck-subline">
                Select any tome on the shelf below to inspect its architecture, engineering decisions, and live stack.
              </p>

              {/* Interactive Volume Switcher Chips */}
              <div className="deck-switcher-row">
                <span className="switcher-label">Quick Select:</span>
                <div className="switcher-chips-wrap">
                  {projects.map((proj, idx) => (
                    <button
                      key={proj.id}
                      type="button"
                      className={`switcher-chip ${
                        idx === featuredIndex ? 'switcher-chip--active' : ''
                      }`}
                      onClick={() => handleSelectFeatured(idx)}
                    >
                      <span className="chip-vol-num">0{idx + 1}</span>
                      <span>{proj.bookSpineTitle || proj.title.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Book Showcase Box */}
              <div className="deck-featured-meta">
                <div className="deck-meta-title-row">
                  <span className="deck-current-label">Currently Showcased:</span>
                  <h4 className="deck-current-title">
                    {featuredProject.bookSpineTitle || featuredProject.title}
                  </h4>
                </div>
                <p className="deck-current-desc">{featuredProject.shortDescription}</p>

                <div className="deck-tags-row">
                  {featuredProject.technologies?.slice(0, 4).map((tech) => (
                    <span key={tech} className="deck-tech-pill">
                      {tech}
                    </span>
                  ))}
                  {featuredProject.technologies?.length > 4 && (
                    <span className="deck-tech-pill deck-tech-more">
                      +{featuredProject.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="deck-action-row">
                  <button
                    type="button"
                    className="deck-inspect-btn"
                    onClick={() => handleOpenProject(featuredProject)}
                  >
                    <BookOpen size={15} />
                    <span>Look Inside Volume</span>
                    <ArrowUpRight size={13} className="deck-btn-arrow" />
                  </button>

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="deck-gh-btn"
                      aria-label="View on GitHub"
                    >
                      <GithubIcon size={15} />
                      <span>Source</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Center Column: The GRAND 3D Standing Hardcover Book */}
            <div className="deck-book-col">
              <div className="deck-book-pedestal">
                <div className="pedestal-halo-glow" aria-hidden="true" />
                <Book3D
                  project={featuredProject}
                  index={featuredIndex}
                  isHero={true}
                  isActive={true}
                  onClick={() => handleOpenProject(featuredProject)}
                />
                {/* Floating "Click to Look Inside" Pill underneath */}
                <button
                  type="button"
                  className="pedestal-look-inside-cue"
                  onClick={() => handleOpenProject(featuredProject)}
                  title="Click to open book and read full details"
                >
                  <BookOpen size={13} />
                  <span>Click Cover to Look Inside</span>
                </button>
              </div>
            </div>

            {/* Right Column: Companion Cards (Engineering Highlights + Live Telemetry) */}
            <div className="deck-companions-col">
              {/* Card 1: Volume Engineering Feats & Highlights */}
              <div className="companion-card highlights-card">
                <div className="highlights-card-header">
                  <div className="highlights-icon-wrap">
                    <Layers size={16} className="highlights-chip-icon" />
                  </div>
                  <div className="highlights-titles">
                    <span className="highlights-eyebrow">Engineering Feats</span>
                    <h4 className="highlights-name">
                      {featuredProject.bookSpineTitle} Highlights
                    </h4>
                  </div>
                </div>

                <div className="highlights-list">
                  {(featuredProject.highlights || []).map((h, i) => (
                    <div key={i} className="highlight-item">
                      <div className="highlight-bullet">
                        <Zap size={11} className="highlight-bullet-icon" />
                      </div>
                      <div className="highlight-content">
                        <span className="highlight-label">{h.label}</span>
                        <span className="highlight-detail">{h.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="highlights-footer">
                  <span className="highlights-badge">
                    <CheckCircle2 size={12} className="highlights-check-icon" />
                    <span>Independent End-to-End System</span>
                  </span>
                </div>
              </div>

              {/* Card 2: Volume Telemetry Card (mirroring "Last Listened") */}
              <div className="companion-card telemetry-card">
                <div className="telemetry-card-header">
                  <div className="telemetry-icon-wrap">
                    <Cpu size={16} className="telemetry-chip-icon" />
                  </div>
                  <div className="telemetry-titles">
                    <span className="telemetry-eyebrow">System Architecture</span>
                    <h4 className="telemetry-name">
                      {featuredProject.bookSpineTitle}
                    </h4>
                  </div>
                </div>

                <div className="telemetry-specs-grid">
                  <div className="telemetry-spec-item">
                    <span className="spec-label">STATUS</span>
                    <span className="spec-value spec-value--live">
                      <span className="spec-pulse-dot" />
                      Production
                    </span>
                  </div>
                  <div className="telemetry-spec-item">
                    <span className="spec-label">TECH STACK</span>
                    <span className="spec-value">{featuredProject.technologies?.length} Tools</span>
                  </div>
                  <div className="telemetry-spec-item">
                    <span className="spec-label">EDITION</span>
                    <span className="spec-value">Vol. 0{featuredIndex + 1}</span>
                  </div>
                  <div className="telemetry-spec-item">
                    <span className="spec-label">RATING</span>
                    <span className="spec-value spec-value--gold">
                      ★ {(featuredProject.rating || 5.0).toFixed(1)}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="telemetry-launch-btn"
                  onClick={() => handleOpenProject(featuredProject)}
                >
                  <BookOpen size={13} />
                  <span>Read Volume Documentation</span>
                </button>
              </div>
            </div>
          </div>

          {/* Upper Floating Wooden Shelf Plank */}
          <div className="wooden-shelf-plank upper-shelf" aria-hidden="true" />
        </div>

        {/* =========================================================
            3. LOWER DECK: RECENT BESTSELLERS / SOFTWARE VOLUMES SHELF
            (Exact layout inspired by the reference image bottom row)
            ========================================================= */}
        <div className="library-shelf-panel" data-scroll-animate="fade-up" data-scroll-delay="2">
          {/* Helper bar explaining the click interaction */}
          <div className="shelf-guidance-bar">
            <span className="guidance-icon">💡</span>
            <span className="guidance-text">
              <strong>Interactive Bookshelf:</strong> Click any book to highlight its volume above, or click <strong>Look Inside</strong> to open the full project details.
            </span>
          </div>

          <div className="shelf-books-wrapper">
            {/* Vertical rotated section title on left edge */}
            <div className="shelf-vertical-header" aria-hidden="true">
              <span className="shelf-vertical-text">PROJECT VOLUMES</span>
            </div>

            {/* Row of Upright 3D Books with Meta Beside Each */}
            <div className="shelf-books-row">
              {projects.map((project, idx) => {
                const isCurrentActive = idx === featuredIndex;

                return (
                  <article
                    key={project.id}
                    className={`shelf-book-item ${
                      isCurrentActive ? 'shelf-book-item--selected' : ''
                    }`}
                  >
                    {/* Top Click Cue Pill on Each Card */}
                    <div
                      className={`shelf-card-cue ${
                        isCurrentActive ? 'shelf-card-cue--active' : ''
                      }`}
                      onClick={() => handleSelectFeatured(idx)}
                      title={isCurrentActive ? 'Currently Showcased' : 'Click to showcase above'}
                    >
                      {isCurrentActive ? (
                        <>
                          <span className="cue-dot" />
                          <span>SHOWCASED</span>
                        </>
                      ) : (
                        <span>CLICK TO PREVIEW ↗</span>
                      )}
                    </div>

                    <div className="shelf-book-card-body">
                      {/* The 3D Book Cover standing on the shelf */}
                      <div className="shelf-book-cover-col">
                        <Book3D
                          project={project}
                          index={idx}
                          isHero={false}
                          isActive={isCurrentActive}
                          onClick={() => handleSelectFeatured(idx)}
                        />
                      </div>

                      {/* Metadata beside the book (Stars, Title, Subtitle, Pill Buttons) */}
                      <div className="shelf-book-meta-col">
                        {/* Dynamic Star Rating */}
                        <RatingStars rating={project.rating || 5.0} />

                        {/* Title (Clicking highlights above) */}
                        <h3
                          className="shelf-book-title"
                          onClick={() => handleSelectFeatured(idx)}
                          title="Click to showcase above"
                        >
                          {project.bookSpineTitle || project.title}
                        </h3>

                        <p className="shelf-book-author">
                          {project.technologies?.slice(0, 3).join(' • ')}
                        </p>

                        {/* Action Pill Buttons (Never wraps into two lines!) */}
                        <div className="shelf-book-actions-row">
                          <button
                            type="button"
                            className="shelf-pill-btn shelf-pill-btn--primary"
                            onClick={() => handleOpenProject(project)}
                            aria-label={`Look inside ${project.title}`}
                          >
                            <BookOpen size={12} />
                            <span>Look Inside</span>
                          </button>

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="shelf-pill-btn shelf-pill-btn--gh"
                              aria-label={`View ${project.title} on GitHub`}
                              title="GitHub Repository"
                            >
                              <GithubIcon size={12} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Lower Floating Wooden Shelf Plank */}
          <div className="wooden-shelf-plank lower-shelf" aria-hidden="true" />
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseProject}
      />
    </div>
  );
}
