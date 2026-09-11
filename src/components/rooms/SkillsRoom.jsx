import React from 'react';
import { Bookmark } from 'lucide-react';
import portfolioData from '../../data/portfolioData';
import '../css/SkillsRoom.css';

// Skill categories mapped to their section number and page placement
const PAGE_CONFIG = [
  {
    pageLabel: 'Folio I • Core Foundations & Backend',
    pageNum: 'p. 04',
    footerLeft: `${portfolioData.profile.name} • Study Desk`,
    footerRight: 'Rainforest Cabin Study',
    sections: [
      { key: 'Programming Languages', num: '1.0' },
      { key: 'Frameworks & Libraries', num: '2.0' },
      { key: 'Backend & Data', num: '3.0' },
    ],
  },
  {
    pageLabel: 'Folio II • AI Systems, Tooling & Languages',
    pageNum: 'p. 05',
    footerLeft: 'Field Journal • Technical Compendium',
    footerRight: portfolioData.profile.location || 'Bangkok, TH',
    sections: [
      { key: 'AI, Computer Vision & NLP', num: '4.0' },
      { key: 'Tools & Technologies', num: '5.0' },
      { key: 'Languages', num: '6.0' },
    ],
  },
];

export default function SkillsRoom() {
  const { skills, profile } = portfolioData;

  return (
    <div id="room-skills" className="room-scene skills-room" role="region" aria-label="Wall 2: The Study & Open Field Journal">
      <div className="study-ambient-glow" aria-hidden="true" />

      <div className="open-journal-container">
        {/* Wall Banner */}
        <div className="study-wall-banner">
          <div className="banner-left">
            <span className="study-crest-numeral">II</span>
            <div className="banner-text">
              <span className="study-eyebrow">The Study • Technical Compendium</span>
              <h2 className="study-main-title">Field Journal & Skills</h2>
            </div>
          </div>
          <div className="banner-right">
            <span className="journal-status-pill">
              <Bookmark size={14} className="bookmark-icon" />
              <span>Verified Folio Entries</span>
            </span>
          </div>
        </div>

        {/* The Open Book */}
        <div className="grand-open-book" role="article" aria-label="Open Field Journal with Technical Skills">
          {/* Leather Cover Edge (Left) */}
          <div className="book-cover-edge book-cover-edge--left" aria-hidden="true" />

          {/* Central Leather Spine & Ribbon */}
          <div className="book-center-spine" aria-hidden="true">
            <div className="spine-stitch spine-stitch--left" />
            <div className="spine-ribbon-tail" />
            <div className="spine-stitch spine-stitch--right" />
          </div>

          {/* Leather Cover Edge (Right) */}
          <div className="book-cover-edge book-cover-edge--right" aria-hidden="true" />

          {/* Left Page */}
          <div className="grand-book-page page--left">
            <div className="page-inner-scroll">
              <header className="page-header-mark">
                <span className="page-chapter-label">{PAGE_CONFIG[0].pageLabel}</span>
                <span className="page-decor-line" />
                <span className="page-folio-num">{PAGE_CONFIG[0].pageNum}</span>
              </header>

              {PAGE_CONFIG[0].sections.map(({ key, num }) => (
                <section key={key} className="diary-skill-section" aria-labelledby={`sec-${key}`}>
                  <div className="skill-section-header">
                    <span className="section-index-num">{num}</span>
                    <h3 id={`sec-${key}`} className="skill-section-title">{key}</h3>
                  </div>
                  <div className="skill-items-list">
                    {skills[key]?.map((item, i) => (
                      <article key={i} className="diary-skill-entry">
                        <div className="entry-title-row">
                          <h4 className="entry-name">{item.name}</h4>
                          <span className="entry-tag">{item.tag || item.level}</span>
                        </div>
                        <p className="entry-desc">{item.description}</p>
                      </article>
                    ))}
                  </div>
                </section>
              ))}

              <footer className="page-bottom-notes">
                <span className="notes-left">{PAGE_CONFIG[0].footerLeft}</span>
                <span className="notes-right">{PAGE_CONFIG[0].footerRight}</span>
              </footer>
            </div>
          </div>

          {/* Right Page */}
          <div className="grand-book-page page--right">
            <div className="page-inner-scroll">
              <header className="page-header-mark">
                <span className="page-chapter-label">{PAGE_CONFIG[1].pageLabel}</span>
                <span className="page-decor-line" />
                <span className="page-folio-num">{PAGE_CONFIG[1].pageNum}</span>
              </header>

              {PAGE_CONFIG[1].sections.map(({ key, num }) => (
                <section key={key} className="diary-skill-section" aria-labelledby={`sec-${key}`}>
                  <div className="skill-section-header">
                    <span className="section-index-num">{num}</span>
                    <h3 id={`sec-${key}`} className="skill-section-title">{key}</h3>
                  </div>
                  <div className="skill-items-list">
                    {skills[key]?.map((item, i) => (
                      <article key={i} className="diary-skill-entry">
                        <div className="entry-title-row">
                          <h4 className="entry-name">{item.name}</h4>
                          <span className="entry-tag">{item.tag || item.level}</span>
                        </div>
                        <p className="entry-desc">{item.description}</p>
                      </article>
                    ))}
                  </div>
                </section>
              ))}

              <footer className="page-bottom-notes">
                <span className="notes-left">{PAGE_CONFIG[1].footerLeft}</span>
                <span className="notes-right">{PAGE_CONFIG[1].footerRight}</span>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
