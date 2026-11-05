import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Braces, Camera, Cpu, Database, GitBranch, Layers, Monitor, Pause, Play, Route, ScanLine, Server, Terminal, Volume2, Workflow } from 'lucide-react';
import './css/SystemsPlayground.css';

const scenarios = [
  {
    id: 'vision',
    label: 'AI vision',
    title: 'From pixels to possibility.',
    project: 'Inspired by Lumi',
    stages: [
      { name: 'Capture', tool: 'CAMERA INPUT', Icon: Camera, detail: 'A camera frame becomes the starting point for understanding a space.' },
      { name: 'Perceive', tool: 'VISION + OCR', Icon: ScanLine, detail: 'Object detections and recognized text provide clues about the surroundings.' },
      { name: 'Navigate', tool: 'GRAPH + BFS', Icon: Route, detail: 'Map landmarks and graph routing turn those clues into a route.' },
      { name: 'Guide', tool: 'THAI VOICE', Icon: Volume2, detail: 'Navigation events become spoken Thai guidance for the person using the app.' },
    ],
  },
  {
    id: 'fullstack',
    label: 'Full stack',
    title: 'One action. Connected layers.',
    project: 'Inspired by Nyx Cloud',
    stages: [
      { name: 'Interact', tool: 'REACT UI', Icon: Monitor, detail: 'A person starts with a clear interface and an action they want to take.' },
      { name: 'Request', tool: 'HTTP API', Icon: Braces, detail: 'The interface passes a request to the application’s API.' },
      { name: 'Connect', tool: 'DATA + SERVICES', Icon: Database, detail: 'Application logic connects file records, storage, and external services.' },
      { name: 'Respond', tool: 'UI UPDATE', Icon: Layers, detail: 'The result returns to the interface so the person knows what happened.' },
    ],
  },
  {
    id: 'automation',
    label: 'Automation',
    title: 'Less repetition. More building.',
    project: 'Inspired by my local tooling',
    stages: [
      { name: 'Trigger', tool: 'STARTUP SCRIPT', Icon: Terminal, detail: 'A startup script gives a repeatable starting point for local development.' },
      { name: 'Compose', tool: 'DOCKER COMPOSE', Icon: Workflow, detail: 'Container definitions coordinate the application and its backend services.' },
      { name: 'Connect', tool: 'LOCAL SERVICES', Icon: Server, detail: 'Service endpoints connect the client with the backends it needs.' },
      { name: 'Build', tool: 'DEV WORKSPACE', Icon: Cpu, detail: 'With the local environment running, attention returns to building and debugging.' },
    ],
  },
];

const positions = [{ x: 65, y: 146 }, { x: 225, y: 66 }, { x: 225, y: 226 }, { x: 385, y: 146 }];
const paths = ['M 65 146 L 65 66 L 225 66', 'M 225 66 L 225 226', 'M 225 226 L 385 226 L 385 146'];

export default function SystemsPlayground() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [stage, setStage] = useState(0);
  const [autoPlaying, setAutoPlaying] = useState(() => typeof window === 'undefined' || !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible, setVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(() => typeof document === 'undefined' || !document.hidden);
  const panelRef = useRef(null);
  const scenario = scenarios[scenarioIndex];
  const current = scenario.stages[stage];
  const running = autoPlaying && visible && pageVisible;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(panelRef.current);
    const onVisibilityChange = () => setPageVisible(!document.hidden);
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMotionChange = () => { if (preference.matches) setAutoPlaying(false); };
    document.addEventListener('visibilitychange', onVisibilityChange);
    preference.addEventListener('change', onMotionChange);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      preference.removeEventListener('change', onMotionChange);
    };
  }, []);

  useEffect(() => {
    if (!running) return;
    const finalStage = stage === scenario.stages.length - 1;
    const timer = window.setTimeout(() => {
      if (finalStage) {
        setScenarioIndex((index) => (index + 1) % scenarios.length);
        setStage(0);
      } else {
        setStage(stage + 1);
      }
    }, finalStage ? 2200 : 1500);
    return () => window.clearTimeout(timer);
  }, [running, stage, scenario]);

  function selectScenario(index) {
    setScenarioIndex(index);
    setStage(0);
    setAutoPlaying(false);
  }

  return (
    <aside ref={panelRef} className={`systems-playground is-${running ? 'running' : 'paused'}`} aria-labelledby="playground-title">
      <header className="playground-header">
        <span className="mono"><GitBranch size={13} /> SYSTEMS PLAYGROUND</span>
        <span className="playground-status mono"><i />{running ? 'AUTO / LOOPING' : 'PAUSED'}</span>
      </header>

      <div className="playground-intro"><span className="mono">SMALL INPUTS. USEFUL OUTCOMES.</span><h2 id="playground-title">{scenario.title}</h2></div>

      <div className="playground-presets" role="group" aria-label="Choose a system to explore" onFocus={() => setAutoPlaying(false)}>
        {scenarios.map((item, index) => <button key={item.id} aria-pressed={scenarioIndex === index} onClick={() => selectScenario(index)}><span className="mono">0{index + 1}</span>{item.label}</button>)}
      </div>

      <div className="signal-board" role="group" aria-label="Explore the four system stages" onFocus={() => setAutoPlaying(false)}>
        <svg viewBox="0 0 450 292" preserveAspectRatio="none" className="signal-wires" aria-hidden="true">
          <defs><pattern id="signal-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth=".5" /></pattern></defs>
          <rect width="450" height="292" fill="url(#signal-grid)" className="signal-grid" />
          {paths.map((path, index) => <g key={path}><path d={path} className="signal-wire" /><path d={path} className={`signal-flow${stage > index ? ' is-passed' : ''}${running && stage === index + 1 ? ' is-tracing' : ''}`} /></g>)}
          <text x="12" y="17" className="board-coordinate">INPUT / OUTPUT</text><text x="438" y="280" textAnchor="end" className="board-coordinate">{scenario.id.toUpperCase()}_SYSTEM</text>
        </svg>
        {scenario.stages.map(({ name, Icon }, index) => <button key={name} className={`signal-node${stage === index ? ' is-current' : ''}${stage > index ? ' is-passed' : ''}`} style={{ left: `${positions[index].x / 450 * 100}%`, top: `${positions[index].y / 292 * 100}%` }} aria-label={`Explore stage ${index + 1}: ${name}`} aria-pressed={stage === index} onClick={() => { setStage(index); setAutoPlaying(false); }}><span className="node-number">0{index + 1}</span><span className="node-icon"><Icon size={22} strokeWidth={1.4} /></span><span className="node-name">{name}</span></button>)}
      </div>

      <div className="playground-explanation" role="status" aria-live={autoPlaying ? 'off' : 'polite'} aria-atomic="true"><span className="mono">0{stage + 1} / {current.tool}</span><p>{current.detail}</p></div>

      <footer className="playground-footer"><div><span className="mono">INTERACTIVE CONCEPT / 0{scenarioIndex + 1} OF 0{scenarios.length}</span><span>{scenario.project}</span></div><button className="trace-button" aria-label={autoPlaying ? 'Pause automatic animation' : 'Resume automatic animation'} aria-pressed={!autoPlaying} onClick={() => setAutoPlaying(!autoPlaying)}>{autoPlaying ? 'Pause' : 'Autoplay'}{autoPlaying ? <Pause size={12} /> : <Play size={12} />}</button></footer>
      <a href="#projects" className="playground-project-link">Explore the actual projects <ArrowUpRight size={12} /></a>
    </aside>
  );
}
