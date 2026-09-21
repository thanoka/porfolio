import React, { useState, useCallback, useEffect, useRef } from 'react';
import portfolioData from './data/portfolioData';
import RoomNavigator from './components/RoomNavigator';
import RotateOverlay from './components/RotateOverlay';
import AboutRoom from './components/rooms/AboutRoom';
import SkillsRoom from './components/rooms/SkillsRoom';
import ProjectsRoom from './components/rooms/ProjectsRoom';
import ExperienceRoom from './components/rooms/ExperienceRoom';
import useScrollReveal from './hooks/useScrollReveal';
import GithubIcon from './components/icons/GithubIcon';
import './components/css/App.css';
import './components/css/ScrollAnimations.css';

const SECTION_IDS = ['about', 'skills', 'projects', 'experience'];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const scrollContainerRef = useRef(null);

  const { roomMetadata, profile, navbarConfig, social } = portfolioData;

  // Dynamically sync web title
  useEffect(() => {
    document.title = `${profile.name} — ${profile.role} | Portfolio`;
  }, [profile.name, profile.role]);

  const handleModalStateChange = useCallback((isOpen) => {
    setIsModalOpen(isOpen);
    // Prevent scroll when modal is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, []);

  // Track which section is in view via scroll position & update URL hash in address bar
  useEffect(() => {
    let lastSectionId = '';

    const handleScroll = () => {
      let currentIdx = 0;

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Section is active if its top has scrolled above 45% of viewport
          if (rect.top <= window.innerHeight * 0.45) {
            currentIdx = i;
            break;
          }
        }
      }

      setActiveSection(currentIdx);

      const newSectionId = SECTION_IDS[currentIdx];
      if (newSectionId && newSectionId !== lastSectionId) {
        lastSectionId = newSectionId;
        // Update browser URL (Https src) without jumping or cluttering history
        if (window.location.hash !== `#${newSectionId}`) {
          window.history.replaceState(null, '', `#${newSectionId}`);
        }
      }
    };

    // If user loaded with a hash in URL (e.g. #projects), scroll to that section
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && SECTION_IDS.includes(initialHash)) {
      setTimeout(() => {
        const targetEl = document.getElementById(initialHash);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 120);
    } else {
      handleScroll();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize scroll-reveal animations
  useScrollReveal(scrollContainerRef);

  const handleNavigateToSection = useCallback((index) => {
    const id = SECTION_IDS[index];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update browser URL hash immediately on click
      window.history.replaceState(null, '', `#${id}`);
    }
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className={`cabin-app-viewport ${isModalOpen ? 'modal-active' : ''}`}
    >
      {/* Minimal Ambient Rain Background Animation */}
      <div className="cabin-minimal-rain-bg" aria-hidden="true">
        <div className="ambient-rain-layer ambient-rain--layer1" />
        <div className="ambient-rain-layer ambient-rain--layer2" />
      </div>

      {/* Sticky Cabin HUD Header */}
      <header className={`cabin-hud-header ${isModalOpen ? 'modal-hidden' : ''}`} role="banner">
        <div className="hud-left">
          <button
            type="button"
            className="hud-brand-btn"
            onClick={() => handleNavigateToSection(0)}
            aria-label="Navigate to top (About)"
          >
            <div className="hud-cabin-seal" aria-hidden="true">
              <span className="seal-monogram">{navbarConfig?.brandInitials || profile.avatarBadge || 'TA'}</span>
            </div>
            <div className="hud-identity">
              <span className="hud-title">{navbarConfig?.brandTitle || profile.name}</span>
              <span className="hud-subtitle">{navbarConfig?.brandRole || profile.role}</span>
            </div>
          </button>
        </div>

        <div className="hud-center">
          <nav className="hud-section-nav" aria-label="Section navigation">
            {roomMetadata.map((room, idx) => (
              <button
                key={room.id}
                type="button"
                className={`hud-section-link ${idx === activeSection ? 'active' : ''}`}
                onClick={() => handleNavigateToSection(idx)}
              >
                <span className="hud-link-numeral">{room.crest || ['I', 'II', 'III', 'IV'][idx]}</span>
                <span className="hud-link-text">{room.duty || room.name}</span>
                {idx === activeSection && <span className="hud-active-glow-dot" aria-hidden="true" />}
              </button>
            ))}
          </nav>
        </div>

        <div className="hud-right">
          {navbarConfig?.statusBeacon && (
            <div className="hud-status-pill">
              <span
                className="hud-status-beacon"
                style={{
                  backgroundColor: navbarConfig.statusBeacon.color || '#55efc4',
                  boxShadow: `0 0 8px ${navbarConfig.statusBeacon.color || '#55efc4'}`,
                }}
                aria-hidden="true"
              />
              <span className="hud-status-text">{navbarConfig.statusBeacon.header}</span>
            </div>
          )}

          {navbarConfig?.quickAction && (
            <button
              type="button"
              className="hud-quick-action-btn"
              onClick={() => handleNavigateToSection(3)}
              style={{ '--action-color': navbarConfig.quickAction.color || '#d4a754' }}
            >
              <span>{navbarConfig.quickAction.detail || navbarConfig.quickAction.header}</span>
            </button>
          )}

          {social?.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="hud-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
          )}
        </div>
      </header>

      {/* Scrollable Content Sections */}
      <main className="cabin-scroll-content" role="main">
        {/* Section 1: About */}
        <section id="about" className="cabin-scroll-section">
          <AboutRoom />
        </section>

        <div className="scroll-section-divider" aria-hidden="true" />

        {/* Section 2: Skills */}
        <section id="skills" className="cabin-scroll-section">
          <SkillsRoom />
        </section>

        <div className="scroll-section-divider" aria-hidden="true" />

        {/* Section 3: Projects */}
        <section id="projects" className="cabin-scroll-section">
          <ProjectsRoom onModalStateChange={handleModalStateChange} />
        </section>

        <div className="scroll-section-divider" aria-hidden="true" />

        {/* Section 4: Experience */}
        <section id="experience" className="cabin-scroll-section">
          <ExperienceRoom />
        </section>

        {/* Footer */}
        <footer className="cabin-scroll-footer" role="contentinfo">
          <div className="footer-inner">
            <span className="footer-flame" aria-hidden="true" />
            <span className="footer-text">{profile.name} • {profile.role}</span>
            <span className="footer-note">{profile.footerNote || 'Built with care in the Rainforest Cabin'}</span>
            <span className="footer-flame" aria-hidden="true" />
          </div>
        </footer>
      </main>

      {/* Floating Section Dot Navigator (Right Edge) */}
      <RoomNavigator
        activeSection={activeSection}
        onNavigate={handleNavigateToSection}
        isModalOpen={isModalOpen}
        sectionNames={roomMetadata.map((r) => r.duty || r.name)}
      />

      {/* PC-Only Overlay (blocks screens < 1024px) */}
      <RotateOverlay />
    </div>
  );
}
