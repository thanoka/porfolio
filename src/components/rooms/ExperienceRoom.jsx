import React from 'react';
import { Compass, Sparkles, CheckCircle2, Radio, ArrowUpRight, MapPin, Calendar, Flame } from 'lucide-react';
import portfolioData from '../../data/portfolioData';
import ContactCard from '../ContactCard';
import '../css/ExperienceRoom.css';

export default function ExperienceRoom() {
  const { experienceBoard, roomMetadata } = portfolioData;
  const experienceMeta = roomMetadata?.find((r) => r.id === 'experience') || {};

  const {
    sectionEyebrow,
    sectionTitle,
    crestNumeral,
    sectionBadge,
    fieldLogTag,
    milestones = [],
    research,
    dispatch,
  } = experienceBoard || {};

  const handleNavigateToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', '#projects');
    }
  };

  return (
    <div
      id="room-experience"
      className="room-scene experience-room"
      role="region"
      aria-label="The Field Board & Experience"
    >
      {/* Ambient warm spotlight */}
      <div className="board-ambient-light" aria-hidden="true" />

      <div className="experience-room-layout">
        {/* Main Cabinet Frame: Polished Obsidian Wood & Warm Brass Trim */}
        <div className="field-command-cabinet">
          {/* Corner Brass Brackets */}
          <div className="cabinet-corner-brackets" aria-hidden="true">
            <span className="corner-bracket corner-bracket--tl" />
            <span className="corner-bracket corner-bracket--tr" />
            <span className="corner-bracket corner-bracket--bl" />
            <span className="corner-bracket corner-bracket--br" />
          </div>

          {/* Cabinet Header Plaque */}
          <div className="cabinet-header" data-scroll-animate="fade-down">
            <div className="cabinet-header-left">
              <div className="cabinet-crest-seal">
                <span className="crest-numeral">{crestNumeral || experienceMeta.crest || 'IV'}</span>
              </div>
              <div className="cabinet-header-titles">
                <span className="cabinet-eyebrow">
                  {sectionEyebrow || experienceMeta.eyebrow || 'The Field Board'}
                </span>
                <h2 className="cabinet-main-title">
                  {sectionTitle || experienceMeta.title || 'Engineering Experience & Field Log'}
                </h2>
              </div>
            </div>

            {sectionBadge && (
              <div className="cabinet-header-badge">
                <span className="badge-pulse-beacon" aria-hidden="true" />
                <span>{sectionBadge}</span>
              </div>
            )}
          </div>

          {/* Inner Expedition Grid Surface */}
          <div className="cabinet-surface-grid">
            {/* Left Column: Milestones Stream */}
            <div className="cabinet-stream-column">
              <div className="column-section-header" data-scroll-animate="fade-left">
                <Compass size={14} className="column-tag-icon" />
                <span>{fieldLogTag || 'Professional Milestones & Field Missions'}</span>
              </div>

              <div className="milestones-stack" data-scroll-animate="reveal" data-scroll-stagger>
                {milestones.map((item) => (
                  <article
                    key={item.id}
                    className="milestone-card"
                    style={{ '--milestone-color': item.color || '#d4a754' }}
                  >
                    {/* Glowing Left Indicator Strip */}
                    <div
                      className="milestone-accent-strip"
                      style={{ backgroundColor: item.color || '#d4a754' }}
                      aria-hidden="true"
                    />

                    <div className="milestone-card-inner">
                      {/* Meta Row: Period & Role Badge */}
                      <div className="milestone-meta-row">
                        <div className="milestone-period-pill">
                          <span
                            className="period-beacon"
                            style={{
                              backgroundColor: item.color || '#d4a754',
                              boxShadow: `0 0 8px ${item.color || '#d4a754'}`,
                            }}
                          />
                          <Calendar size={12} className="period-icon" />
                          <span>{item.period}</span>
                        </div>

                        {item.badge && (
                          <span
                            className="milestone-role-badge"
                            style={{
                              color: item.color || '#d4a754',
                              borderColor: `${item.color || '#d4a754'}55`,
                              backgroundColor: `${item.color || '#d4a754'}18`,
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Header & Organization */}
                      <h3 className="milestone-role-title">{item.header}</h3>

                      <div className="milestone-org-row">
                        <span className="milestone-org-name">{item.organization}</span>
                        <span className="org-divider">•</span>
                        <span className="milestone-location-tag">
                          <MapPin size={11} className="location-pin-icon" />
                          {item.location}
                        </span>
                      </div>

                      {/* Tech Stack Chips */}
                      {item.techStack && item.techStack.length > 0 && (
                        <div className="milestone-tech-chips">
                          {item.techStack.map((tech, tIdx) => (
                            <span key={tIdx} className="milestone-chip">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Architectural Achievements & Highlights */}
                      <ul className="milestone-highlights-list">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="milestone-highlight-item">
                            <CheckCircle2
                              size={14}
                              className="highlight-check-icon"
                              style={{ color: item.color || '#d4a754' }}
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Cross-Link Button to Projects Room */}
                      {item.projectLinkText && (
                        <div className="milestone-footer-action">
                          <a
                            href="#projects"
                            onClick={handleNavigateToProjects}
                            className="milestone-project-link"
                            style={{ borderColor: `${item.color || '#d4a754'}40` }}
                          >
                            <span>{item.projectLinkText}</span>
                            <ArrowUpRight
                              size={13}
                              className="link-arrow-icon"
                              style={{ color: item.color || '#d4a754' }}
                            />
                          </a>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Column: Research Telemetry & Cabin Dispatch */}
            <div className="cabinet-telemetry-column">
              {/* Research Telemetry Card */}
              {research && (
                <article
                  className="telemetry-card"
                  style={{ '--telemetry-color': research.color || '#ffd88a' }}
                  data-scroll-animate="fade-right"
                  data-scroll-delay="1"
                >
                  <div className="telemetry-card-inner">
                    <div className="telemetry-header">
                      <div className="telemetry-radar-beacon">
                        <Radio size={15} className="telemetry-icon" style={{ color: research.color || '#ffd88a' }} />
                        <span
                          className="telemetry-pulse"
                          style={{ borderColor: research.color || '#ffd88a' }}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="telemetry-title" style={{ color: research.color || '#ffd88a' }}>
                        {research.header}
                      </h3>
                    </div>

                    <p className="telemetry-detail">{research.detail}</p>

                    {research.tags && research.tags.length > 0 && (
                      <div className="telemetry-tags-cloud">
                        {research.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className="telemetry-tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {research.footerNote && (
                      <div className="telemetry-footer">
                        <span className="telemetry-status-dot" />
                        <span className="telemetry-footer-text">{research.footerNote}</span>
                        <Sparkles
                          size={12}
                          className="telemetry-sparkle"
                          style={{ color: research.color || '#ffd88a' }}
                        />
                      </div>
                    )}
                  </div>
                </article>
              )}

              {/* Natural Cabin Dispatch Plaque */}
              <div className="cabinet-dispatch-container" data-scroll-animate="fade-up" data-scroll-delay="2">
                {dispatch && (
                  <div className="dispatch-header-bar">
                    <Flame
                      size={13}
                      className="dispatch-flame-icon"
                      style={{ color: dispatch.color || 'var(--amber-brass)' }}
                    />
                    <span
                      className="dispatch-label-text"
                      style={{ color: dispatch.color || 'var(--amber-brass)' }}
                    >
                      {dispatch.header}
                    </span>
                  </div>
                )}

                {dispatch?.detail && (
                  <p className="dispatch-detail-snippet">{dispatch.detail}</p>
                )}

                <ContactCard variant="desktop-plaque" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
