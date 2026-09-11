import React, { useState } from 'react';
import { Mail, Check, Copy, ExternalLink, MapPin } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import portfolioData from '../data/portfolioData';
import './css/ContactCard.css';

export default function ContactCard({ variant = 'desktop-plaque' }) {
  const { profile, social } = portfolioData;
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
    <div
      id="cabin-contact-card"
      className={`contact-card contact-card--${variant}`}
      role="region"
      aria-label="Direct Contact Card"
    >
      <div className="contact-card-brass-rim" aria-hidden="true">
        <span className="brass-screw brass-screw-tl" />
        <span className="brass-screw brass-screw-tr" />
        <span className="brass-screw brass-screw-bl" />
        <span className="brass-screw brass-screw-br" />
      </div>

      <div className="contact-card-inner">
        <div className="contact-header">
          <div className="contact-avatar-seal" aria-hidden="true">
            <span>{profile.avatarBadge || 'ES'}</span>
          </div>
          <div className="contact-titles">
            <span className="contact-builder-name">{profile.name}</span>
            <span className="contact-builder-role">{profile.role}</span>
          </div>
        </div>

        <div className="contact-location">
          <MapPin size={13} className="pin-icon" />
          <span>{profile.location}</span>
        </div>

        <div className="contact-links-group">
          {/* Email Button with direct mailto & quick copy */}
          <div className="contact-link-row">
            <a
              href={`mailto:${social.email}`}
              className="contact-btn contact-btn--mail"
              aria-label={`Send an email to ${social.email}`}
            >
              <Mail size={15} className="contact-icon" />
              <span className="contact-link-text">{social.email}</span>
            </a>
            <button
              type="button"
              className="contact-copy-btn"
              onClick={handleCopyEmail}
              aria-label={copied ? 'Email copied' : 'Copy email address'}
              title={copied ? 'Copied to clipboard!' : 'Copy email'}
            >
              {copied ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
            </button>
          </div>

          {/* GitHub External Link */}
          <div className="contact-link-row">
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="contact-btn contact-btn--github"
              aria-label="Visit GitHub profile (opens in a new tab)"
            >
              <GithubIcon size={15} className="contact-icon" />
              <span className="contact-link-text">
                {social.github ? social.github.replace(/^https?:\/\//, '') : 'github.com/thanoka'}
              </span>
              <ExternalLink size={13} className="external-mark" />
            </a>
          </div>
        </div>

        <div className="contact-footer-quote">
          <span>Rainforest Cabin Study • Bangkok</span>
        </div>
      </div>
    </div>
  );
}
