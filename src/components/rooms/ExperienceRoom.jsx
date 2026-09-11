import React from 'react';
import { Pin, Compass, Sparkles, Hammer, CheckCircle2 } from 'lucide-react';
import portfolioData from '../../data/portfolioData';
import ContactCard from '../ContactCard';
import '../css/ExperienceRoom.css';

export default function ExperienceRoom() {
  const { experience, currentlyLearning } = portfolioData;

  return (
    <div id="room-experience" className="room-scene experience-room" role="region" aria-label="Wall 4: The Field Board & Experience">
      {/* Ambient warm pinboard light */}
      <div className="board-ambient-light" aria-hidden="true" />

      <div className="experience-room-layout">
        {/* Main Board Area: Wooden Pinned Corkboard */}
        <div className="field-corkboard-frame">
          {/* Corkboard Header Plaque */}
          <div className="corkboard-header">
            <span className="field-crest-numeral">IV</span>
            <div className="field-titles">
              <span className="field-eyebrow">The Field Board</span>
              <h2 className="field-main-title">Experience & Field Notes</h2>
            </div>
          </div>

          {/* Cork Surface with Pinned Notes */}
          <div className="cork-surface">
            {/* Left Side of Corkboard: Pinned Experience Cards */}
            <div className="pinned-notes-column">
              <span className="cork-section-tag">
                <Pin size={13} className="pin-tag-icon" />
                <span>Field Log • Professional Path</span>
              </span>

              <div className="pinned-cards-stack">
                {experience.map((item) => (
                  <article key={item.id} className="pinned-note-card pinned-note-card--experience">
                    {/* Brass Pushpin */}
                    <div className="brass-pushpin" aria-hidden="true">
                      <span className="pushpin-head" />
                      <span className="pushpin-shadow" />
                    </div>

                    <div className="note-card-inner">
                      <div className="note-meta-row">
                        <span className="note-period-badge">{item.period}</span>
                        <span className="note-location-stamp">{item.location}</span>
                      </div>

                      <h3 className="note-role-title">{item.role}</h3>
                      <h4 className="note-org-title">{item.organization}</h4>

                      <ul className="note-highlights-list">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="note-highlight-bullet">
                            <CheckCircle2 size={13} className="bullet-check" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Side of Corkboard: "Currently Learning / Building" Pinned Note & Telegram Desk Card */}
            <div className="pinned-sidebar-column">
              {/* Special Pinned Note: Currently Learning / Building */}
              <article className="pinned-note-card pinned-note-card--learning">
                {/* Masking Tape strip */}
                <div className="masking-tape-strip" aria-hidden="true" />

                <div className="brass-pushpin brass-pushpin--amber" aria-hidden="true">
                  <span className="pushpin-head" />
                  <span className="pushpin-shadow" />
                </div>

                <div className="learning-note-content">
                  <div className="learning-header">
                    <Hammer size={16} className="learning-icon" />
                    <h3 className="learning-title">Current Focus & Research</h3>
                  </div>

                  <p className="learning-body-text">{currentlyLearning}</p>

                  <div className="learning-footer">
                    <span className="learning-timestamp">Cabin Workbench • Active</span>
                    <Sparkles size={13} className="sparkle-active" />
                  </div>
                </div>
              </article>

              {/* Natural Desk Contact Card */}
              <div className="field-contact-container">
                <span className="contact-shelf-label">Natural Cabin Post • Dispatch Slip</span>
                <ContactCard variant="corkboard-desk" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
