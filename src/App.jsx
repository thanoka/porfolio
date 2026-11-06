import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight, Mail, Plus, X, Pause, Play, Sun, Moon } from 'lucide-react';
import portfolioData from './data/portfolioData';
import GithubIcon from './components/icons/GithubIcon';
import RainScene from './components/RainScene';
import SystemsPlayground from './components/SystemsPlayground';
import './App.css';

const { profile, social, projects, skillsGrimoire, education, experienceBoard, languages } = portfolioData;
const sections = ['about', 'projects', 'skills', 'experience'];
const shortNames = ['Lumi', 'Nyx Cloud', 'Loremaster', 'War Dragons'];
const categories = ['AI & COMPUTER VISION', 'FULL-STACK APPLICATION', 'STORY & GAME SYSTEMS', 'JAVASCRIPT FOUNDATIONS'];

function initialTheme() {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>;
}

function ProjectDetails({ project, onClose }) {
  const dialogRef = useRef(null);
  const [tab, setTab] = useState('overview');
  const [imageIndex, setImageIndex] = useState(0);
  const images = project.images || [];

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  return (
    <dialog ref={dialogRef} className="project-dialog" onCancel={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} aria-labelledby="project-title">
      <div className="dialog-inner">
        <header className="dialog-header"><span className="mono">PROJECT NOTES / {project.volumeNumeral}</span><button className="icon-button" onClick={onClose} aria-label="Close project"><X size={21} /></button></header>
        <div className="dialog-heading"><span className="eyebrow">PERSONAL / ACADEMIC PROJECT</span><h2 id="project-title">{project.title}</h2><p>{project.shortDescription}</p><a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">View source code <ArrowUpRight size={16} /></a></div>
        {images.length > 0 && <figure className="dialog-gallery"><img src={images[imageIndex].url} alt={images[imageIndex].alt} /><figcaption><span>{images[imageIndex].caption}</span>{images.length > 1 && <div className="gallery-controls"><button className="icon-button" aria-label="Previous image" onClick={() => setImageIndex((imageIndex - 1 + images.length) % images.length)}><ChevronLeft size={18} /></button><span>{imageIndex + 1} / {images.length}</span><button className="icon-button" aria-label="Next image" onClick={() => setImageIndex((imageIndex + 1) % images.length)}><ChevronRight size={18} /></button></div>}</figcaption></figure>}
        <div className="detail-tabs" role="tablist" aria-label="Project information">{['overview', 'stack', 'notes'].map((name, index) => <button key={name} id={`detail-tab-${name}`} role="tab" aria-selected={tab === name} aria-controls={`detail-panel-${name}`} tabIndex={tab === name ? 0 : -1} onKeyDown={(event) => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); const names = ['overview', 'stack', 'notes']; const next = names[(index + (event.key === 'ArrowRight' ? 1 : 2)) % 3]; setTab(next); document.getElementById(`detail-tab-${next}`)?.focus(); } }} className={tab === name ? 'selected' : ''} onClick={() => setTab(name)}>{name === 'stack' ? 'Tools & technologies' : name === 'notes' ? 'Engineering notes' : 'Overview'}</button>)}</div>
        {project.keyMetrics?.length > 0 && <div className="project-metrics">{project.keyMetrics.map((metric) => <div key={metric.label}><span className="eyebrow">{metric.label}</span><strong>{metric.value}</strong></div>)}</div>}
        <div className="detail-panel" id={`detail-panel-${tab}`} role="tabpanel" aria-labelledby={`detail-tab-${tab}`} tabIndex={0}>
          {tab === 'overview' && <><div className="highlight-grid">{project.highlights?.map((item) => <article key={item.label}><Plus size={17} /><h3>{item.label}</h3><p>{item.detail}</p></article>)}</div><h3 className="detail-subheading">Components & responsibilities</h3>{project.services?.map((service) => <article className="service-row" key={service.name}><div><h4>{service.name}</h4><span className="mono">{service.stack}</span></div><p>{service.role}</p></article>)}</>}
          {tab === 'stack' && <div className="technology-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>}
          {tab === 'notes' && <><p className="engineering-notes">{project.longDescription}</p>{project.documentationUrl && <a className="text-link" href={project.documentationUrl} target="_blank" rel="noreferrer">Read documentation <ArrowUpRight size={16} /></a>}</>}
        </div>
      </div>
    </dialog>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);
  const [skillIndex, setSkillIndex] = useState(0);
  const [rainPaused, setRainPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(initialTheme);
  const pageRef = useRef(null);
  const folio = skillsGrimoire.folios[skillIndex];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#101010' : '#f8f8f8');
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    document.title = `${profile.name} — Full-Stack & AI Portfolio`;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }), { rootMargin: '-15% 0px -55% 0px' });
    sections.forEach((id) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); revealObserver.unobserve(entry.target); } }), { threshold: 0.08 });
    pageRef.current?.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));
    return () => { observer.disconnect(); revealObserver.disconnect(); };
  }, []);

  return (
    <div className="portfolio" ref={pageRef}>
      <div className="ambient-rain" aria-hidden="true"><RainScene variant="background" paused={rainPaused} theme={theme} /></div>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a href="#about" className="brand" aria-label="Thannava, back to top"><span className="brand-mark">ta<span>*</span></span><span className="brand-name">THANNAVA<br /><span>AUAMYAM</span></span></a>
        <nav className={menuOpen ? 'main-nav menu-open' : 'main-nav'} aria-label="Main navigation">{sections.map((id, index) => <a href={`#${id}`} key={id} className={activeSection === id ? 'active' : ''} aria-current={activeSection === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{id === 'about' ? 'About' : id === 'projects' ? 'Work' : id === 'skills' ? 'Expertise' : 'Journey'}</a>)}</nav>
        <div className="header-actions">
          <button className="theme-toggle icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={theme === 'dark'} title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button className="background-rain-toggle icon-button" onClick={() => setRainPaused(!rainPaused)} aria-label={rainPaused ? 'Play background rain' : 'Pause background rain'} aria-pressed={rainPaused} title={rainPaused ? 'Play background rain' : 'Pause background rain'}>{rainPaused ? <Play size={15} /> : <Pause size={15} />}</button>
          <a className="header-contact" href={`mailto:${social.email}`}>Let’s talk <ArrowUpRight size={17} /></a>
        </div>
        <button className="mobile-menu icon-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <span className="menu-lines"><i /><i /></span>}</button>
      </header>

      <main id="main">
        <section className="hero page-width" id="about">
          <div className="hero-topline"><span className="mono">INDEPENDENT MIND. CONNECTED SYSTEMS.</span><span className="mono hero-location">BANGKOK, THAILAND <span className="small-cross">+</span></span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability"><span className="status-dot" /> OPEN TO INTERNSHIPS</div>
              <h1 className="hero-mission">Always<br />learning.<br /><em>Drawn to<br />challenges.</em></h1>
              <div className="hero-intro"><span className="intro-rule" /><div><strong className="hero-name">{profile.name}</strong><p>{profile.role}.<br className="desktop-break" /> Curious by nature. I love taking on new challenges and learning through building.</p></div></div>
              <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <ArrowDown size={17} /></a><a className="github-link" href={social.github} target="_blank" rel="noreferrer"><GithubIcon size={18} /> GitHub <ArrowUpRight size={14} /></a></div>
            </div>
            <SystemsPlayground />
          </div>
          <div className="hero-bottom"><span className="mono">AI APPLICATIONS <span>/</span> SYSTEMS <span>/</span> AUTOMATION</span><a href="#projects" className="scroll-cue mono">SCROLL TO EXPLORE <ArrowDown size={15} /></a></div>
        </section>

        <section className="work-section" id="projects">
          <div className="page-width">
            <div className="section-heading" data-reveal><div><SectionLabel number="01">SELECTED WORK</SectionLabel><h2>Ideas, put<br />into <em>practice.</em></h2></div><div className="section-aside"><p>{profile.workSummary}</p><span className="mono">FOUR PROJECTS. ALWAYS LEARNING.</span></div></div>
            <div className="project-grid">{projects.map((project, index) => <article className={`project-card project-card-${index}`} key={project.id} data-reveal>
              <button className="project-visual" onClick={() => setSelectedProject(project)} aria-label={`Explore ${shortNames[index]}`}>
                <div className="project-visual-top"><span className="mono">0{index + 1} / {categories[index]}</span>{project.featured && <span className="featured-label">FEATURED</span>}</div>
                {index === 0 ? <div className="lumi-art" aria-hidden="true"><div className="vision-orbit orbit-one" /><div className="vision-orbit orbit-two" /><div className="vision-corner corner-tl" /><div className="vision-corner corner-tr" /><div className="vision-corner corner-bl" /><div className="vision-corner corner-br" /><div className="lumi-wordmark">lumi<span>✳</span></div><span className="lumi-subtitle mono">A CLEARER WAY FORWARD.</span><div className="vision-path"><span /><span /><span /></div><span className="vision-label mono">VISION → VOICE → NAVIGATION</span></div> : <div className="project-preview-frame"><div className="preview-browser"><i /><i /><i /><span>{shortNames[index].toLowerCase().replaceAll(' ', '')}.project</span></div><img src={project.images[0].url} alt={project.images[0].alt} loading="lazy" /></div>}
                <span className="project-open"><ArrowUpRight size={24} /></span>
              </button>
              <div className="project-info"><div><span className="mono project-category">{categories[index]}</span><button className="project-title" onClick={() => setSelectedProject(project)}>{shortNames[index]} <ArrowUpRight size={24} /></button></div><p>{project.shortDescription}</p><div className="project-tags">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div></div>
            </article>)}</div>
            <a className="all-code-link" href={social.github} target="_blank" rel="noreferrer"><GithubIcon size={19} /><span>More experiments live on GitHub.</span><ArrowUpRight size={20} /></a>
          </div>
        </section>

        <section className="skills-section page-width" id="skills">
          <div className="section-heading" data-reveal><div><SectionLabel number="02">THE TOOLKIT</SectionLabel><h2>Curious by nature.<br /><em>Technical by practice.</em></h2></div><p className="section-aside">From a model’s output to the system around it.<br />The tools I use, and what I’m learning next.</p></div>
          <div className="skills-layout" data-reveal><div className="skill-selector" role="tablist" aria-label="Areas of expertise" aria-orientation="vertical">{skillsGrimoire.folios.map((item, index) => <button key={item.id} id={`skill-tab-${index}`} role="tab" aria-controls="skill-panel" aria-selected={skillIndex === index} tabIndex={skillIndex === index ? 0 : -1} onKeyDown={(event) => { if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); const next = (index + (event.key === 'ArrowDown' ? 1 : 2)) % 3; setSkillIndex(next); document.getElementById(`skill-tab-${next}`)?.focus(); } }} onClick={() => setSkillIndex(index)} className={skillIndex === index ? 'selected' : ''}><span className="mono">0{index + 1}</span><span>{['Applied AI', 'Systems & code', 'Delivery & growth'][index]}</span><ArrowUpRight size={20} /></button>)}<p className="skill-footnote mono">BUILT THROUGH PROJECTS.<br />GROWING THROUGH PRACTICE.</p></div>
            <div className="skill-content" id="skill-panel" role="tabpanel" aria-labelledby={`skill-tab-${skillIndex}`} key={folio.id} tabIndex={0}><p className="skill-detail">{folio.detail}</p>{[folio.leftPage, folio.rightPage].map((page) => <div className="skill-group" key={page.title}><h3>{page.title}</h3>{page.sections.flatMap((section) => section.items).map((item) => <details key={item.header} className="skill-item"><summary><span>{item.header}</span><span className="skill-badge">{item.badge}</span><Plus size={16} /></summary><p>{item.detail}</p></details>)}</div>)}</div>
          </div>
          <div className="languages-block" data-reveal>
            <div><span className="eyebrow">LANGUAGES</span><h3>Ideas travel.<br />So do conversations.</h3></div>
            <div className="language-list">{languages.map((language) => <article className="language-card" key={language.name}><span className="language-code mono">{language.code}</span><div><h4>{language.name}</h4><p>{language.detail}</p></div><span className="language-level">{language.level}</span></article>)}</div>
          </div>
        </section>

        <section className="about-section" id="experience"><div className="page-width">
          <div className="section-heading" data-reveal><div><SectionLabel number="03">THE PERSON BEHIND THE CODE</SectionLabel><h2>Still learning.<br /><em>Always building.</em></h2></div><span className="about-asterisk" aria-hidden="true">✳</span></div>
          <div className="about-layout" data-reveal><div className="about-bio"><span className="eyebrow">A LITTLE ABOUT ME</span><p>{profile.bio}</p><div className="education-list"><span className="eyebrow">EDUCATION</span>{education.map((item) => <div className="education-item" key={item.title}><span className="mono">{item.year}</span><h3>{item.title}</h3><p>{item.detail}</p><span className="mono">GPA / {item.gpa}</span></div>)}</div></div>
            <div className="journey-list"><span className="eyebrow">TEACHING & PROJECT EXPERIENCE</span>{experienceBoard.milestones.map((item, index) => <article className="journey-item" key={item.id}><span className="journey-number mono">0{index + 1}</span><div><span className="mono">{item.organization} / {item.period}</span><h3>{item.header}</h3><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>{item.projectLinkText && <a className="text-link" href="#projects">Explore the work <ArrowUpRight size={15} /></a>}</div></article>)}<div className="next-goals"><span className="eyebrow">WHAT’S NEXT</span><p>{experienceBoard.research.detail}</p><div className="project-tags">{experienceBoard.research.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></div>
          </div>
        </div></section>

        <section className="contact-section page-width" id="contact" data-reveal><div className="contact-top"><span className="availability"><span className="status-dot" /> OPEN TO WHAT’S NEXT</span><span className="mono">BANGKOK, THAILAND / AVAILABLE TO CONNECT</span></div><div className="contact-main"><h2>Let’s make<br /><em>something useful.</em></h2><a className="contact-arrow" href={`mailto:${social.email}`} aria-label="Email Thannava"><ArrowUpRight strokeWidth={1} /></a></div><div className="contact-bottom"><a className="contact-email" href={`mailto:${social.email}`}><Mail size={18} />{social.email}</a><p>Seeking an internship in<br />AI engineering, DevOps, or platform engineering.</p></div></section>
      </main>
      <footer className="site-footer page-width"><a className="footer-brand" href="#about">ta<span>*</span></a><span className="mono">© {new Date().getFullYear()} {profile.name.toUpperCase()}</span><span className="mono footer-note">A LITTLE LOGIC. A LITTLE RAIN.</span><a href="#about" className="mono">BACK TO TOP <ArrowUpRight size={15} /></a></footer>
      {selectedProject && <ProjectDetails key={selectedProject.id} project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}
