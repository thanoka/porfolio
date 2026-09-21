import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  Copy,
  Check,
  MapPin,
} from 'lucide-react';
import GithubIcon from '../icons/GithubIcon';
import portfolioData from '../../data/portfolioData';
import '../css/AboutRoom.css';

export default function AboutRoom() {
  const { profile, social, education } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(social.email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', '#projects');
    }
  };

  return (
    <div
      id="room-about"
      className="room-scene about-room"
      role="region"
      aria-label="Hero & Profile Introduction"
    >
      <div className="about-room-grid">
        {/* =========================================================
            1. HERO SECTION — Spacious 2-Column Editorial Presentation
            Left: Headline, Role, Tagline, System Highlights & Actions
            Right: About Story, Education Journey Timeline, My Work, Social
            ========================================================= */}
        <section className="hero-landing-section" aria-label="Hero Presentation">
          <div className="hero-two-column-grid">
            {/* Left Column: Heading, Role, Tagline, Focus Badge, Systems Metrics & CTAs */}
            <div className="hero-left-column" data-scroll-animate="fade-left">
              <div className="hero-status-pill" aria-label="Engineering Focus">
                <span className="hero-status-dot" />
                <span>{profile.focus || 'AI Systems & Software Engineering'}</span>
              </div>

              <div className="hero-accent-bar" aria-hidden="true" />

              <h1 className="hero-headline">
                I'm {profile.name ? profile.name.split(' ')[0] : 'Developer'}, an <br />
                <span className="hero-role-text">{profile.role}</span>
              </h1>

              <p className="hero-headline-sub">
                {profile.tagline || 'My dream is create something that change the world'}
              </p>

              {/* Engineering Highlights Strip — Dynamic from portfolioData */}
              <div className="hero-metrics-strip">
                {(profile.metrics || [
                  { val: '4', lbl: 'Shipped Systems' },
                  { val: 'Dual YOLO + OCR', lbl: 'Spatial Vision AI' },
                  { val: 'Full-Stack', lbl: 'Architecture' },
                ]).map((metric, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div className="hero-metric-item">
                      <span className="hero-metric-val">{metric.val}</span>
                      <span className="hero-metric-lbl">{metric.lbl}</span>
                    </div>
                    {idx < arr.length - 1 && <div className="hero-metric-separator" aria-hidden="true" />}
                  </React.Fragment>
                ))}
              </div>

              {/* Direct Actions */}
              <div className="hero-cta-group">
                <button
                  type="button"
                  className="hero-primary-btn"
                  onClick={scrollToProjects}
                  aria-label="Explore portfolio projects"
                >
                  <span>{profile.primaryCta || 'Explore Projects'}</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href={`mailto:${social.email}`}
                  className="hero-secondary-btn"
                  aria-label="Contact directly via email"
                >
                  <Mail size={18} />
                  <span>{profile.secondaryCta || 'Get in Touch'}</span>
                </a>
              </div>
            </div>

            {/* Center Hairline Divider to gracefully anchor the page center */}
            <div className="hero-center-divider" aria-hidden="true" />

            {/* Right Column: Stacked text blocks with dividers */}
            <div className="hero-right-column" data-scroll-animate="fade-right" data-scroll-delay="1">
              {/* Block 1: About Me */}
              <div className="hero-side-block">
                <span className="hero-side-eyebrow">{profile.aboutEyebrow || 'ABOUT ME'}</span>
                <p className="hero-side-text">
                  {profile.summary || profile.bio}
                </p>
              </div>

              <div className="hero-side-divider" aria-hidden="true" />

              {/* Block 2: Education Journey (Minimal Timeline) */}
              <div className="hero-side-block hero-edu-block">
                <span className="hero-side-eyebrow">{profile.educationEyebrow || 'EDUCATION JOURNEY'}</span>
                <div className="hero-edu-timeline">
                  {education.map((item, index) => (
                    <div key={index} className="hero-edu-item">
                      <div className="hero-edu-track">
                        <span className="hero-edu-dot" aria-hidden="true" />
                        {index < education.length - 1 && <span className="hero-edu-line" aria-hidden="true" />}
                      </div>
                      <div className="hero-edu-content">
                        <div className="hero-edu-header">
                          <span className="hero-edu-year">{item.year}</span>
                          {item.gpa && (
                            <span className="hero-edu-badge">
                              {item.gpa === 'In Progress' ? 'In Progress' : `GPA ${item.gpa}`}
                            </span>
                          )}
                        </div>
                        <h4 className="hero-edu-title">{item.title}</h4>
                        <p className="hero-edu-detail">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-side-divider" aria-hidden="true" />

              {/* Block 3: My Work */}
              <div className="hero-side-block">
                <span className="hero-side-eyebrow">{profile.workEyebrow || 'MY WORK'}</span>
                <p className="hero-side-text">
                  {profile.workSummary || `Handcrafted ${portfolioData.projects?.length || 4} software volumes spanning modern AI systems, full-stack web platforms, and interactive software.`}
                </p>
                <button
                  type="button"
                  className="hero-side-link-btn"
                  onClick={scrollToProjects}
                  aria-label="Browse portfolio projects"
                >
                  <span>{profile.browsePortfolioLabel || 'BROWSE PORTFOLIO'}</span>
                  <ArrowRight size={15} className="side-link-arr" />
                </button>
              </div>

              <div className="hero-side-divider" aria-hidden="true" />

              {/* Block 4: Follow Me / Connect */}
              <div className="hero-side-block">
                <span className="hero-side-eyebrow">{profile.followEyebrow || 'FOLLOW ME'}</span>
                <div className="hero-social-row">
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hero-social-btn"
                    aria-label="Visit GitHub Profile"
                    title="GitHub"
                  >
                    <GithubIcon size={20} />
                  </a>

                  <a
                    href={`mailto:${social.email}`}
                    className="hero-social-btn"
                    aria-label={`Send email to ${social.email}`}
                    title={social.email}
                  >
                    <Mail size={20} />
                  </a>

                  <button
                    type="button"
                    className="hero-social-btn hero-copy-btn"
                    onClick={handleCopyEmail}
                    aria-label={copied ? 'Email copied' : 'Copy email address'}
                    title={copied ? 'Copied!' : 'Copy email address'}
                  >
                    {copied ? <Check size={18} className="copied-icon" /> : <Copy size={18} />}
                  </button>

                  <span className="hero-location-chip">
                    <MapPin size={14} className="loc-pin" />
                    <span>{profile.location}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
