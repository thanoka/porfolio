import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  MapPin,
  Compass,
  Mail,
  Copy,
  Check,
  ExternalLink,
  CheckCircle2,
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

  return (
    <div id="room-about" className="room-scene about-room" role="region" aria-label="Wall 1: About & Profile">
      <div className="about-room-grid">
        {/* Upper Split: Left Compact Profile Card and Right Grand About Me Plaque */}
        <div className="about-upper-grid">
          {/* Left Column: Modern Portrait Profile Card (Smaller width) */}
          <aside className="about-left-column">
            <article className="sophie-style-card" aria-label="Personal Profile Card">
              {/* Top Rounded Image Viewport */}
              <div className="card-photo-viewport">
                <img
                  src={profile.avatarUrl || '/avatar.jpg'}
                  alt={profile.name}
                  className="card-photo-img"
                  onError={(e) => {
                    // Fallback to stylized monogram if file is missing
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="card-photo-fallback" style={{ display: 'none' }}>
                  <span className="fallback-initials">{profile.avatarBadge || 'ES'}</span>
                  <span className="fallback-sub">Software Builder</span>
                </div>
              </div>

              {/* Profile Details Underneath Photo */}
              <div className="card-details-section">
                {/* Name & Verified Badge */}
                <div className="card-name-row">
                  <h1 className="card-person-name">{profile.name}</h1>
                  <CheckCircle2
                    size={20}
                    className="verified-check-icon"
                    fill="#2ed573"
                    stroke="#121a14"
                  />
                </div>

                {/* Subtitle / Focus */}
                <p className="card-role-desc">
                  {profile.role} who focuses on clean systems, simplicity & usability.
                </p>

                {/* Location Tag */}
                <div className="card-meta-bar">
                  <span className="card-location-tag">
                    <MapPin size={13} className="loc-pin" />
                    {profile.location}
                  </span>
                </div>

                {/* Contact Action Buttons */}
                <div className="card-actions-group">
                  <div className="card-action-row">
                    <a
                      href={`mailto:${social.email}`}
                      className="card-action-btn card-action-btn--mail"
                      aria-label={`Send email to ${social.email}`}
                      title={social.email}
                    >
                      <Mail size={15} />
                      <span className="btn-text">{social.email}</span>
                    </a>
                    <button
                      type="button"
                      className="card-copy-btn"
                      onClick={handleCopyEmail}
                      aria-label={copied ? 'Email copied' : 'Copy email address'}
                      title={copied ? 'Copied!' : 'Copy email'}
                    >
                      {copied ? <Check size={14} className="copied-check" /> : <Copy size={14} />}
                    </button>
                  </div>

                  <a
                    href={social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="card-action-btn card-action-btn--github"
                    aria-label="Visit GitHub profile (opens in new tab)"
                  >
                    <GithubIcon size={15} />
                    <span>{social.github ? social.github.replace(/^https?:\/\//, '') : 'github.com/thanoka'}</span>
                    <ExternalLink size={13} className="external-arr" />
                  </a>
                </div>
              </div>
            </article>
          </aside>

          {/* Right Column: Grand About Me Plaque (Much wider, starts at top-left) */}
          <section className="about-right-column" aria-label={`About ${profile.name}`}>
            <article className="about-me-plaque">
              <header className="about-me-header">
                <Sparkles size={22} className="about-spark-icon" />
                <div>
                  <span className="about-eyebrow">Personal Introduction & Craft</span>
                  <h2 className="about-me-title">About Me</h2>
                </div>
              </header>

              <div className="about-me-body">
                <p className="about-bio-text">{profile.bio}</p>

                <blockquote className="about-quote">
                  <span className="quote-mark" aria-hidden="true">“</span>
                  <span className="quote-content">{profile.tagline}</span>
                </blockquote>
              </div>
            </article>
          </section>
        </div>

        {/* Bottom Section: Education Timeline */}
        <section className="about-bottom-education" aria-label="Education Timeline">
          <article className="education-horizontal-plaque">
            <div className="education-bottom-header">
              <div className="edu-title-group">
                <GraduationCap size={22} className="edu-icon" />
                <div>
                  <span className="edu-eyebrow">Academic Journey</span>
                  <h2 className="education-title">Education & Milestones</h2>
                </div>
              </div>

              <div className="education-footer-note">
                <Compass size={14} className="compass-mini" />
                <span>DCE University • Information Technology & Full Stack Engineering</span>
              </div>
            </div>

            <ol className="education-horizontal-grid">
              {education.map((item, index) => (
                <li key={index} className="education-grid-item">
                  <div className="timeline-marker-dot" aria-hidden="true" />
                  <div className="education-item-content">
                    <div className="education-item-header">
                      <span className="timeline-year">{item.year}</span>
                      {item.gpa && (
                        <span className="timeline-gpa-badge">
                          GPA: <strong>{item.gpa}</strong>
                        </span>
                      )}
                    </div>
                    <h3 className="timeline-institution">{item.title}</h3>
                    <p className="timeline-detail">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </section>
      </div>
    </div>
  );
}
