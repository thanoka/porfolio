import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Layers,
  Terminal,
  Sparkles,
} from 'lucide-react';
import portfolioData from '../../data/portfolioData';
import '../css/SkillsRoom.css';

const ICON_MAP = {
  Cpu,
  Layers,
  Terminal,
  Sparkles,
};

export default function SkillsRoom() {
  const { profile, skillsGrimoire, roomMetadata } = portfolioData;
  const [activeFolioIndex, setActiveFolioIndex] = useState(0);

  const roomMeta = roomMetadata?.find((r) => r.id === 'skills') || {
    crest: 'II',
    eyebrow: 'The Study • Field Journal 2.0',
    title: 'Technical Compendium & Codex',
  };

  const folios = skillsGrimoire?.folios || [];
  const currentFolio = folios[activeFolioIndex] || folios[0] || {};

  const handlePrevFolio = () => {
    setActiveFolioIndex((prev) => (prev > 0 ? prev - 1 : folios.length - 1));
  };

  const handleNextFolio = () => {
    setActiveFolioIndex((prev) => (prev < folios.length - 1 ? prev + 1 : 0));
  };

  // Dynamic seal renderer driven directly by data
  const renderBadgeSeal = (badgeText, badgeColor) => {
    const text = badgeText || 'Verified';
    const color = badgeColor || '#ffd88a';

    const customStyle = {
      borderColor: `${color}66`,
      color: color,
      background: `${color}18`,
      boxShadow: `0 0 10px ${color}22`,
    };

    const dotStyle = {
      background: color,
      boxShadow: `0 0 6px ${color}`,
    };

    return (
      <span className="grimoire-seal" style={customStyle}>
        <span className="seal-dot" style={dotStyle} />
        <span>{text}</span>
      </span>
    );
  };

  return (
    <div
      id="room-skills"
      className="room-scene skills-room"
      role="region"
      aria-label={skillsGrimoire?.ariaLabel || `${roomMeta.name} — ${roomMeta.title}`}
    >
      {/* Ambient warm lantern glow */}
      <div className="study-ambient-glow" aria-hidden="true" />

      <div className="open-journal-container">
        {/* =========================================================
            1. WALL BANNER (Study Header - Dynamically bound from data)
            ========================================================= */}
        <header className="study-wall-banner" data-scroll-animate="fade-down">
          <div className="banner-left">
            <span className="study-crest-numeral">
              {skillsGrimoire?.crestNumeral || roomMeta.crest || 'II'}
            </span>
            <div className="banner-text">
              <span className="study-eyebrow">
                {skillsGrimoire?.sectionEyebrow || roomMeta.eyebrow}
              </span>
              <h2 className="study-main-title">
                {skillsGrimoire?.sectionTitle || roomMeta.title}
              </h2>
            </div>
          </div>

          <div className="banner-right">
            <div className="folio-counter-pill" aria-label="Folio Chapter Navigation">
              <span
                className="counter-dot"
                style={{
                  background: currentFolio.color || 'var(--amber-bright)',
                  boxShadow: `0 0 8px ${currentFolio.color || 'var(--amber-bright)'}`,
                }}
              />
              <span>
                {currentFolio.numeral || `FOLIO ${activeFolioIndex + 1}`} / {folios.length || 3}
              </span>
              <span
                className="counter-name"
                style={{ color: currentFolio.color || 'var(--amber-brass)' }}
              >
                • {currentFolio.header || 'Engineering Codex'}
              </span>
            </div>
          </div>
        </header>

        {/* =========================================================
            2. THE GRAND DARK GRIMOIRE CONTAINER & RIBBON BOOKMARKS
            ========================================================= */}
        <div className="grimoire-wrapper" data-scroll-animate="scale-in">
          {/* Top Edge Hanging Silk Ribbon Bookmarks (Colors and text directly from data) */}
          <nav className="grimoire-ribbons-shelf" aria-label="Folio Chapter Selection">
            {folios.map((folio, idx) => {
              const IconComponent = ICON_MAP[folio.icon] || Sparkles;
              const isActive = idx === activeFolioIndex;
              const tabColor = folio.color || '#d4a754';

              return (
                <button
                  key={folio.id || idx}
                  type="button"
                  className={`grimoire-ribbon ${isActive ? 'ribbon--active' : ''}`}
                  onClick={() => setActiveFolioIndex(idx)}
                  aria-selected={isActive}
                  role="tab"
                  title={`Turn to ${folio.detail || folio.header}`}
                  style={{ '--tab-color': tabColor }}
                >
                  <span className="ribbon-hanging-strip">
                    <IconComponent size={13} className="ribbon-icon" />
                    <span className="ribbon-text">{folio.header}</span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* The Open Book Structure — Locked 570px Height */}
          <div
            className="grand-open-grimoire"
            role="article"
            aria-label={`Open Field Journal - ${currentFolio.header || 'Technical Codex'}`}
          >
            {/* Gilded Corner Clasps */}
            <div className="grimoire-corner corner--top-left" aria-hidden="true" />
            <div className="grimoire-corner corner--top-right" aria-hidden="true" />
            <div className="grimoire-corner corner--bottom-left" aria-hidden="true" />
            <div className="grimoire-corner corner--bottom-right" aria-hidden="true" />

            {/* Leather Outer Margins */}
            <div className="book-leather-margin margin--left" aria-hidden="true" />
            <div className="book-leather-margin margin--right" aria-hidden="true" />

            {/* Central Leather Crease & Stitched Spine */}
            <div className="grimoire-center-spine" aria-hidden="true">
              <div className="spine-stitch-line spine-stitch-line--left" />
              <div className="spine-center-crease" />
              <div className="spine-stitch-line spine-stitch-line--right" />
              <div className="spine-ribbon-bookmark">
                <span className="ribbon-body" />
                <span className="ribbon-swallowtail" />
              </div>
            </div>

            {/* 3D Stacked Paper Leaves (Book Thickness) */}
            <div className="book-page-stack stack--bottom" aria-hidden="true">
              <div className="page-stack-leaves leaves--left" />
              <div className="page-stack-center-notch" />
              <div className="page-stack-leaves leaves--right" />
            </div>
            <div className="book-page-stack stack--left" aria-hidden="true" />
            <div className="book-page-stack stack--right" aria-hidden="true" />

            {/* =========================================================
                LEFT PAGE — Deep Charcoal Slate Parchment
                ========================================================= */}
            <div className="grimoire-page page--left">
              <header className="page-header-mark">
                <div className="header-meta-group">
                  <span className="page-chapter-badge">
                    {currentFolio.leftPage?.chapterNum || 'CAP. 01'}
                  </span>
                  <span className="page-chapter-label">
                    {currentFolio.leftPage?.title || 'System Foundations'}
                  </span>
                </div>
                <span className="page-folio-num">
                  {currentFolio.leftPage?.folioNum || 'p. 14'}
                </span>
              </header>

              <div className="page-editorial-body">
                {currentFolio.leftPage?.sections?.map((section, sIdx) => (
                  <section key={sIdx} className="codex-skill-section">
                    <div className="codex-section-header">
                      <span className="codex-section-num">§ {section.num}</span>
                      <h3 className="codex-section-title">{section.title}</h3>
                      <div className="codex-header-line" aria-hidden="true" />
                    </div>

                    <div
                      className={`codex-items-grid ${
                        section.isCompactGrid ? 'codex-items-grid--compact' : ''
                      }`}
                    >
                      {section.items?.map((item, i) => (
                        <article key={i} className="codex-skill-card">
                          <div className="codex-card-top">
                            <h4 className="codex-skill-name">{item.header}</h4>
                            {renderBadgeSeal(item.badge, item.color)}
                          </div>
                          <p className="codex-skill-desc">{item.detail}</p>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Page Footer Note & Flip Control */}
              <footer className="page-footer-bar">
                <button
                  type="button"
                  className="page-flip-btn btn-prev"
                  onClick={handlePrevFolio}
                  aria-label="Turn to previous folio chapter"
                >
                  <ChevronLeft size={16} />
                  <span>{skillsGrimoire?.turnBackLabel || 'Turn Back'}</span>
                </button>
                <span className="page-footer-signature">
                  {profile.name} • {skillsGrimoire?.signatureSuffix || 'Field Desk Bangkok'}
                </span>
              </footer>
            </div>

            {/* =========================================================
                RIGHT PAGE — Deep Charcoal Slate Parchment
                ========================================================= */}
            <div className="grimoire-page page--right">
              <header className="page-header-mark">
                <div className="header-meta-group">
                  <span className="page-chapter-badge">
                    {currentFolio.rightPage?.chapterNum || 'CAP. 02'}
                  </span>
                  <span className="page-chapter-label">
                    {currentFolio.rightPage?.title || 'Execution Architecture'}
                  </span>
                </div>
                <span className="page-folio-num">
                  {currentFolio.rightPage?.folioNum || 'p. 15'}
                </span>
              </header>

              <div className="page-editorial-body">
                {currentFolio.rightPage?.sections?.map((section, sIdx) => (
                  <section key={sIdx} className="codex-skill-section">
                    <div className="codex-section-header">
                      <span className="codex-section-num">§ {section.num}</span>
                      <h3 className="codex-section-title">{section.title}</h3>
                      <div className="codex-header-line" aria-hidden="true" />
                    </div>

                    <div className="codex-items-grid">
                      {section.items?.map((item, i) => (
                        <article key={i} className="codex-skill-card">
                          <div className="codex-card-top">
                            <h4 className="codex-skill-name">{item.header}</h4>
                            {renderBadgeSeal(item.badge, item.color)}
                          </div>
                          <p className="codex-skill-desc">{item.detail}</p>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Page Footer Note & Flip Control */}
              <footer className="page-footer-bar">
                <span className="page-footer-signature">
                  {currentFolio.detail}
                </span>
                <button
                  type="button"
                  className="page-flip-btn btn-next"
                  onClick={handleNextFolio}
                  aria-label="Turn to next folio chapter"
                >
                  <span>{skillsGrimoire?.nextFolioLabel || 'Next Folio'}</span>
                  <ChevronRight size={16} />
                </button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
