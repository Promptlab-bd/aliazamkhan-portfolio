import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Bot, 
  Cpu, 
  TrendingUp, 
  ArrowRight, 
  Send, 
  Mail, 
  Linkedin, 
  Github, 
  Check, 
  Zap, 
  Terminal, 
  FileCode, 
  Play, 
  Code,
  Users,
  Compass,
  AlertCircle,
  HelpCircle,
  Sparkles,
  ExternalLink,
  Flame
} from 'lucide-react';

const COPY = {
  heroTitlePre: "Practical Workflow Automation",
  heroTitleHighlight: "For Resilient Businesses.",
  heroSubtitle: "I build complex, multi-step n8n workflows that streamline operations, eliminate manual bottlenecks, and drive measurable efficiency. No generic hype, no unrealistic promises—just robust, code-supported automation pipelines.",
  exploreBtn: "Explore n8n Automations",
  letAutomateBtn: "Let's Automate",
  toolsHeader: "Core Stack & Trusted Technologies",
  
  journeyLabel: "My 15-Year Journey (Since 2008)",
  journeyTitle: "Grounded by the Harsh Realities of Physical Operations",
  journeyText1: "Starting from scratch in 2008, I spent over 15 years building, failing, learning, and automating. Along the way, I experienced the true struggles of business survival firsthand—including running a busy physical fast-food cafe named 'Tee Junction' for 4 years.",
  journeyText2: "Running a physical restaurant taught me what businesses actually need to survive, scale, and thrive: practical structure, zero fluff, and eliminating manual bottlenecks. Today, my core focus is solving real-world business challenges using n8n automation paired with modern AI systems like Claude and Gemini.",
  journeyLabel2: "Education & Public Impact",
  journeyText3: "Beyond consulting for corporate and global clients, my deepest interest lies in sharing these hard-earned insights with beginners. Through my 100% free community platform, 'Prompt Lab Bangla', I help tech enthusiasts master actual, practical automation and engineering logic without false promises or commercial paywalls.",
  
  servicesTitle: "Real Solutions for Complex Bottlenecks",
  servicesSubtitle: "I don't play with trendy toys. I construct stable pipelines and structures that save thousands of physical hours.",
  service1Title: "Advanced n8n Automation",
  service1Desc: "Building highly complex, multi-branch workflows with custom webhook listeners, direct API interactions, JavaScript code transformations, and robust error handling to keep operations running 24/7.",
  service2Title: "AI Consultation & Integration",
  service2Desc: "Strategic deployment of Claude, Gemini, and OpenAI's chat and agent capabilities into your workflows to parse messy leads, summarize text, categorize data, and generate reliable outputs.",
  service3Title: "Mentorship & Content Creation",
  service3Desc: "Providing structured, reality-grounded, and 100% free community learning content, video tutorials, and technical resources to help beginners build actual tech skills in the Bengali language.",
  
  communityTitle: "Prompt Lab Bangla",
  communitySubtitle: "Our Primary Community & Educational Initiative",
  communityText1: "Prompt Lab Bangla is a 100% FREE, non-commercial community platform. It was founded as a direct response to overhyped AI buzzwords to share practical, reality-based AI and n8n automation guides. We help beginners and tech enthusiasts master real engineering logic without any paywalls or empty promises.",
  communityStat1: "15+ Years",
  communityStat1Label: "Total Field Experience",
  communityStat2: "n8n Primary",
  communityStat2Label: "Workflow Engine Focus",
  communityStat3: "100% Free",
  communityStat3Label: "Community Resource",
  
  playgroundTitle: "Interactive n8n Workflow Simulator",
  playgroundSubtitle: "Select an automation template below and click 'Execute Live Run' to see how automated triggers and AI logic process live payload packets in real-time.",
  playgroundSelectLabel: "Choose an Automation Template:",
  btnExecute: "Execute Live Run",
  btnExecuting: "Running Node...",
  btnReset: "Reset Path",
  statusIdle: "System Idle",
  statusSuccess: "Execution Success (200 OK)",
  statusRunning: "Executing Node Sequence...",
  
  contactTitle: "Let's Eliminate Your Manual Tasks",
  contactSubtitle: "No generic consults. Describe your business bottleneck or CRM workflow below, and let's craft an n8n solution that scales.",
  contactName: "Your Name",
  contactEmail: "Business Email",
  contactChallenge: "What task or process are you looking to automate right now? (Provide as much manual logic detail as possible)",
  contactChallengePlaceholder: "List manual copy-paste triggers, CRM fields, spreadsheet rules, or specific API systems to integrate...",
  contactBudget: "Target Automation Budget",
  contactSubmit: "Transmit Request Payload",
  contactSending: "Broadcasting over API...",
  contactSuccess: "Payload Transmitted Successfully! I will analyze your challenge and respond personally within 24 hours.",
  useCaseSubtitle: "Production n8n Case Studies",
  footerCopy: "ALI AZAM KHAN — ALL RIGHTS RESERVED. FOUNDER OF PROMPT LAB BANGLA",
  backToTop: "Top",
  openConsultation: "Open for Consultations",
  slotsBannerText: "Limited slots reserved for business automation architecture",
  navJourney: "Journey",
  navServices: "Services",
  navPlayground: "Automator Playground",
  navCaseStudies: "Case Studies",
  navContact: "Contact",
  communityManifestoHeader: "COMMUNITY MANIFESTO & STRATEGY",
  communityQuote: `"I founded this platform to provide a concrete hub for aspiring technical builders, removing all the toxic noise of instant-rich promises."`,
  founderSign: "— Ali Azam Khan, Founder",
  manifestoItem1: "No Magic AI Buttons",
  manifestoItem2: "Practical API & Logic Work",
  manifestoItem3: "Real-Life Project-Based Learning",
  contactFormHeader: "ARCHITECT YOUR OPERATIONS",
  contactRequestReceived: "REQUEST RECEIVED",
  contactSubmitAnother: "Submit Another Response",
  contactIntegrityDisclaimerLabel: "🔒 NDA Compliance: By transmitting your operational details, your data is buffered securely in an isolated state. Client NDAs are strictly respected.",
  communityInitiativeLabel: "Educational Initiative Showcase",
  promptLabShortDesc: "A 100% FREE learning platform and community focused strictly on real-world automation, practical API integration, and engineering logic.",
  learnMissionBtn: "Explore Our Mission",
  sidebarDisclaimer: "Notice: This simulation models raw server execution. All API webhook calls represent verified production logic used in Ali Azam Khan's workflows.",
  activeStatusIndicator: "Active Operations Term",
  caseSubtitle: "Every use case below utilizes optimized custom code, webhook listeners, and conditional routing filters inside n8n.",
  teeJunctionCardDesc: "Owned & operated physical fast-food cafe for 4 years. Managed inventory, payroll, and physical operational bottlenecks firsthand.",
  teeJunctionQuote: '"Running Tee Junction cooked away any romanticized views I had of business operations. Physical clients who order and expect quality within minutes don\'t care for theoretical AI concepts; they care for prompt execution and seamless workflows."',
  promptLabCardDesc: "Built to empower tech beginners. Delivering complex automation guides and developer practices in clean Bengali completely free.",
  trustLabel: "Truth Policy",
  trustText: "We strictly prohibit promising direct riches, automated side income, or AI magic buttons. Solid workflow logic is our only doctrine.",
  whatIOfferLabel: "WHAT I OFFER",
  architectureInActionLabel: "AUTOMATION ARCHITECTURE IN ACTION",
  leadCaseTitle: "Omnichannel Lead Generation Sync",
  leadCaseDesc: "Triggered natively on Facebook Ads lead capture or dynamic API inbound. Parses name, budget constraints, and client request via Claude AI, syncs rows dynamically in real-time, and issues priority Slack alerting payloads.",
  financeCaseTitle: "Transactional Ledger Auto-Invoicing",
  financeCaseDesc: "Connects transaction events directly with financial Stripe webhooks. Reconciles paid indicators to external customer ledger tables (PostgreSQL) and sends immediate customized invoice details via transaction email pipelines (Resend API).",
  contentCaseTitle: "Prompt Lab Bangla Community Automator",
  contentCaseDesc: "Listens to draft updates, leverages Gemini AI model APIs to generate hyper-structured education scripts, and schedules automatic releases to multiple platforms with zero marketing bloat."
};

const TEMPLATES = {
  crmLead: {
    name: "Lead Generation & CRM Automation",
    desc: "Automatically capture incoming webhook leads, analyze purchase intent using Gemini AI, save details into Google Sheets, and notify sales team in Slack.",
    nodes: [
      { id: 'n1', name: 'Facebook Webhook', type: 'webhook', label: 'Trigger', status: 'idle', value: 'Lead Event Captured' },
      { id: 'n2', name: 'Gemini AI Intent Node', type: 'ai', label: 'AI Agent', status: 'idle', value: 'Scoring Lead Intent' },
      { id: 'n3', name: 'Google Sheets CRM', type: 'db', label: 'Database', status: 'idle', value: 'Inserting Row' },
      { id: 'n4', name: 'Slack Alert', type: 'notification', label: 'Alert', status: 'idle', value: 'Broadcast alert' }
    ],
    logs: [
      "⚡ Trigger Event: Webhook received payload from Facebook Ads Lead Form.",
      "🔍 Extracting raw applicant info: { name: 'Suhail Ahmed', email: 'suhail@example.com', text: 'Need advanced n8n setups ASAP' }",
      "🤖 Calling 'gemini-3.5-flash' to analyze user inquiry and intent level.",
      "💡 Gemini AI Response: High purchase intent. Formulated priority score: 9.5/10.",
      "💾 Appending payload and scoring metadata directly into Google Sheets, Sheet ID: grid-889a.",
      "🔔 Sync successful. Formatting Slack payload with custom blocks.",
      "🚀 Slack API broadcast dispatched: #sales-alerts notified with premium green label.",
      "✅ Workflow completed successfully with code status 200."
    ]
  },
  autoInvoicing: {
    name: "Auto-Invoicing & Stripe Pipeline",
    desc: "Listens to incoming Stripe invoices event triggers, updates external bookkeeping SQL, and sends transactional confirmation emails to clients via Claude classification.",
    nodes: [
      { id: 'n1', name: 'Stripe Event Listener', type: 'webhook', label: 'Trigger', status: 'idle', value: 'Invoice.Paid Event' },
      { id: 'n2', name: 'Claude API Router', type: 'ai', label: 'AI Router', status: 'idle', value: 'Classifying Client Package' },
      { id: 'n3', name: 'PostgreSQL Sync', type: 'db', label: 'SQL DB', status: 'idle', value: 'Updating Ledger Rows' },
      { id: 'n4', name: 'Resend Transactional', type: 'notification', label: 'Mailer', status: 'idle', value: 'Dispatch PDF Confirmation' }
    ],
    logs: [
      "⚡ Trigger Event: listening for Stripe 'invoice.payment_succeeded' webhooks.",
      "🔍 Received Stripe event ID: evt_1O839sLh11. Amount: $1,450.00 USD.",
      "🤖 Triggering Claude extraction node to catalog matching service bundle subscription.",
      "💼 Client matched: 'Premium n8n Operations retainer'.",
      "💾 Opening pool connection with Client PostgreSQL Database, matching Invoice ID.",
      "📊 Executing SQL query: UPDATE billing_ledger SET status = 'PAID', paid_at = NOW() WHERE invoice_id = 'stripe_129304';",
      "📤 Compiling dynamic HTML and generating payment receipt PDF container.",
      "🚀 Mailer dispatches premium responsive email to client inbox.",
      "✅ Transaction ledger sync successful. Connection pool gracefully released."
    ]
  },
  contentDist: {
    name: "Community Content Distributer",
    desc: "Triggered on raw text ideas, invokes script output via Gemini, formats custom newsletters, and queues multi-platform posts.",
    nodes: [
      { id: 'n1', name: 'Idea Box Inbound', type: 'trigger', label: 'Manual/API', status: 'idle', value: 'Raw Idea Submitted' },
      { id: 'n2', name: 'Gemini Content Writer', type: 'ai', label: 'AI Localization', status: 'idle', value: 'Drafting Script' },
      { id: 'n3', name: 'Social Scheduler', type: 'code', label: 'JS Code', status: 'idle', value: 'Constructing Payloads' },
      { id: 'n4', name: 'Multi-Channel Push', type: 'notification', label: 'API Push', status: 'idle', value: 'Queued for Distribution' }
    ],
    logs: [
      "⚡ Trigger Event: Manual dashboard raw text idea: 'How n8n state variables work'.",
      "🤖 Initializing Gemini 3.5 core engine with system Prompt: 'Technical Mentor'.",
      "📝 Generating educational, reality-grounded script outline avoiding false hype terms.",
      "📝 Draft complete: 'How state variables in n8n actually work. Practical logic explanation.'",
      "💻 Triggering JavaScript node to dynamically parse markdown, strip raw spaces, and format HTML email.",
      "📱 Compiling metadata blocks and generating platform headers for Facebook Graph API and LinkedIn API.",
      "🚀 API dispatch completed: newsletter broadcasted to Prompt Lab subscriber base & queued on social dashboards.",
      "✅ Execution success."
    ]
  }
};

interface N8nNode {
  id: string;
  name: string;
  type: string;
  label: string;
  status: 'idle' | 'running' | 'success' | 'detail';
  value: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'services' | 'playground' | 'caseStudies' | 'contact'>('home');
  const [selectedTemplate, setSelectedTemplate] = useState<keyof typeof TEMPLATES>('crmLead');
  const [simulatorNodes, setSimulatorNodes] = useState<N8nNode[]>([]);
  const [simulationStatus, setSimulationStatus] = useState<'idle' | 'running' | 'success'>('idle');
  const [currentPulseNode, setCurrentPulseNode] = useState<number>(-1);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    challenge: '',
    budget: '$1,000 - $3,000'
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState<boolean>(false);

  // Destructure content from English COPY
  const t = COPY;

  // Initialize nodes when template changes
  useEffect(() => {
    const currentTemplate = TEMPLATES[selectedTemplate];
    setSimulatorNodes(currentTemplate.nodes.map(n => ({ ...n, status: 'idle' as const })));
    setSimulationStatus('idle');
    setCurrentPulseNode(-1);
    setProgressPercent(0);
    setConsoleLogs([
      `[System] Template changed to: ${currentTemplate.name}. Ready for execution.`
    ]);
  }, [selectedTemplate]);

  // Run simulated n8n node flow
  const handleExecuteLiveRun = () => {
    if (simulationStatus === 'running') return;
    
    setSimulationStatus('running');
    setProgressPercent(10);
    setCurrentPulseNode(0);
    
    const currentTemplate = TEMPLATES[selectedTemplate];
    const logsToPrint = currentTemplate.logs;
    const totalNodes = simulatorNodes.length;
    setConsoleLogs([
      `🤖 Initializing n8n Core workflow: ${currentTemplate.name}...`
    ]);

    let currentStep = 0;
    
    const runInterval = setInterval(() => {
      if (currentStep < totalNodes) {
        setSimulatorNodes(prev => prev.map((node, i) => {
          if (i === currentStep) return { ...node, status: 'running' as const };
          if (i < currentStep) return { ...node, status: 'success' as const };
          return { ...node, status: 'idle' as const };
        }));

        setCurrentPulseNode(currentStep);
        setProgressPercent(Math.floor(((currentStep + 1) / totalNodes) * 100));

        const stepLogIndex1 = currentStep * 2;
        const stepLogIndex2 = currentStep * 2 + 1;
        setConsoleLogs(prev => {
          const nextLogs = [...prev];
          if (logsToPrint[stepLogIndex1]) nextLogs.push(logsToPrint[stepLogIndex1]);
          if (logsToPrint[stepLogIndex2]) nextLogs.push(logsToPrint[stepLogIndex2]);
          return nextLogs;
        });

        currentStep++;
      } else {
        clearInterval(runInterval);
        setSimulatorNodes(prev => prev.map(n => ({ ...n, status: 'success' as const })));
        setSimulationStatus('success');
        setCurrentPulseNode(-1);
        setProgressPercent(100);
        setConsoleLogs(prev => [
          ...prev, 
          `🟢 Execution finished WITH ALL NODES OK. Dispatched webhook payload feedback.`
        ]);
      }
    }, 1500);
  };

  const resetSimulation = () => {
    const currentTemplate = TEMPLATES[selectedTemplate];
    setSimulatorNodes(currentTemplate.nodes.map(n => ({ ...n, status: 'idle' as const })));
    setSimulationStatus('idle');
    setCurrentPulseNode(-1);
    setProgressPercent(0);
    setConsoleLogs([
      `[System Reset] Clean canvas ready for next operations telemetry run.`
    ]);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.challenge) return;

    setIsSubmittingForm(true);
    setTimeout(() => {
      setIsSubmittingForm(false);
      setFormSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e7eb] font-sans antialiased flex flex-col selection:bg-[#10b981] selection:text-black">
      
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b98110_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40"></div>

      {/* Global Banner Notification */}
      <div className="mb-0 bg-[#0c2e22] text-[#34d399] border-b border-[#10b981]/20 text-[11px] font-mono py-2 text-center flex items-center justify-center gap-2 px-4 z-20">
        <span className="inline-block w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
        <span>{t.openConsultation} — {t.slotsBannerText}</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 bg-[#050505]/95 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center z-50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#10b981] rounded flex items-center justify-center font-bold text-black text-xl shadow-lg shadow-[#10b981]/20">A</div>
          <div>
            <h1 className="text-md font-bold tracking-tight uppercase leading-none text-white">Ali Azam Khan</h1>
            <p className="text-[10px] text-[#10b981] font-mono tracking-wider uppercase mt-1">
              n8n Workflow Automation Expert
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-mono uppercase tracking-widest text-gray-400">
          <a href="#about" onClick={() => setActiveTab('about')} className="hover:text-[#10b981] transition-colors">{t.navJourney}</a>
          <a href="#services" onClick={() => setActiveTab('services')} className="hover:text-[#10b981] transition-colors">{t.navServices}</a>
          <a href="#promptlab" className="hover:text-[#10b981] transition-colors">Prompt Lab Bangla</a>
          <a href="#playground" onClick={() => setActiveTab('playground')} className="hover:text-[#10b981] transition-colors">{t.navPlayground}</a>
          <a href="#cases" className="hover:text-[#10b981] transition-colors">{t.navCaseStudies}</a>
          <a href="#contact" onClick={() => setActiveTab('contact')} className="hover:text-[#10b981] transition-colors">{t.navContact}</a>
        </nav>

        {/* Social Icons for Premium Feel */}
        <div className="flex items-center space-x-3 text-gray-400">
          <a href="https://github.com/aliazam" target="_blank" rel="noopener noreferrer" className="hover:text-[#10b981] transition-all p-1">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/aliazam" target="_blank" rel="noopener noreferrer" className="hover:text-[#10b981] transition-all p-1">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[85vh] py-16 px-6 md:px-12 flex items-center justify-center border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
              <p className="text-[11px] uppercase tracking-widest text-[#10b981] font-mono font-medium">
                n8n core logic &bull; multi-api orchestrations
              </p>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-6 text-left">
              {t.heroTitlePre} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-emerald-200">
                {t.heroTitleHighlight}
              </span>
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mb-8 text-left">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#playground"
                className="inline-flex items-center justify-center px-6 py-4 bg-[#10b981] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#34d399] transition-all group shadow-lg shadow-[#10b981]/20 active:translate-y-0.5"
              >
                {t.exploreBtn}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-4 border border-white/10 bg-white/5 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all active:translate-y-0.5"
              >
                {t.letAutomateBtn}
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 text-left">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4 font-mono">
                {t.toolsHeader}
              </p>
              <div className="flex flex-wrap gap-2.5">
                <span className="px-3 py-1.5 bg-[#10b981]/10 border border-[#10b981]/25 text-xs text-[#10b981] font-mono rounded">
                  n8n (Primary Focus)
                </span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 text-xs text-white font-mono rounded">
                  Gemini API
                </span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 text-xs text-white font-mono rounded">
                  Claude AI
                </span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 text-xs text-white font-mono rounded">
                  ChatGPT
                </span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 text-xs text-white font-mono rounded">
                  Google Veo
                </span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative bg-[#101010] border border-white/10 p-6 rounded-xl flex flex-col justify-between overflow-hidden shadow-2xl">
              
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                </div>
                <div className="px-2 py-0.5 bg-white/5 border border-white/10 text-[9px] font-mono text-gray-400 rounded">
                  Active Server Port: 3000
                </div>
              </div>

              <div className="space-y-4 text-left">
                <span className="text-[10px] font-mono text-[#10b981] uppercase tracking-wider block">
                  {t.communityInitiativeLabel}
                </span>
                <h3 className="text-xl font-extrabold text-white">Prompt Lab Bangla</h3>
                
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t.promptLabShortDesc}
                </p>

                <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 rounded border border-white/5">
                    <span className="block text-[10px] text-gray-500 uppercase font-mono tracking-wide">Learner Reach</span>
                    <span className="text-lg font-bold text-white font-mono mt-1">20,000+</span>
                  </div>
                  <div className="bg-[#10b981]/5 p-3 rounded border border-[#10b981]/10">
                    <span className="block text-[10px] text-gray-400 uppercase font-mono tracking-wide">Model</span>
                    <span className="text-xs font-bold text-[#10b981] uppercase flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping"></span>
                      {t.communityStat3}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-[10px] font-mono text-gray-500 pt-2">
                  <span>Zero Sales Pitch</span>
                  <span>&bull;</span>
                  <span>Pure Tech Logic</span>
                  <span>&bull;</span>
                  <span>100% Free</span>
                </div>

                <a 
                  href="#promptlab"
                  className="w-full text-center block bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-[10px] uppercase py-2.5 tracking-wider transition-all rounded"
                >
                  {t.learnMissionBtn} &rarr;
                </a>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12 bg-[#0c0c0c] border-b border-white/5 relative">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-12 text-left">
            <span className="text-xs font-mono text-[#10b981] uppercase tracking-widest block mb-2">{t.journeyLabel}</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{t.journeyTitle}</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-8 space-y-6 text-sm text-gray-300 leading-relaxed text-left">
              <p>
                {t.journeyText1}
              </p>
              
              <div className="bg-white/5 border border-white/10 p-5 rounded-lg text-emerald-100 font-mono italic text-xs leading-relaxed border-l-4 border-l-[#10b981] my-4">
                {t.teeJunctionQuote}
              </div>

              <p>
                {t.journeyText2}
              </p>

              <div className="pt-6">
                <h4 className="text-sm uppercase font-mono text-[#10b981] tracking-widest mb-3">{t.journeyLabel2}</h4>
                <p>
                  {t.journeyText3}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4 text-left">
              
              <div className="bg-[#101010] border border-white/5 p-5 rounded-lg">
                <h5 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">My Foundational Experience</h5>
                <h6 className="text-md font-bold text-[#10b981]">Tee Junction Cafe</h6>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  {t.teeJunctionCardDesc}
                </p>
              </div>

              <div className="bg-[#101010] border border-white/5 p-5 rounded-lg">
                <h5 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">My Community Work</h5>
                <h6 className="text-md font-bold text-white">Prompt Lab Bangla</h6>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  {t.promptLabCardDesc}
                </p>
              </div>

              <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-lg">
                <span className="text-[10px] text-red-400 uppercase font-mono flex items-center gap-1.5 mb-2">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {t.trustLabel}
                </span>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  {t.trustText}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-12 border-b border-white/5 relative">
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-xl mb-16 text-left">
            <span className="text-xs font-mono text-[#10b981] uppercase tracking-widest block mb-2">{t.whatIOfferLabel}</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{t.servicesTitle}</h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed mt-3">
              {t.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Service 1 */}
            <div className="bg-[#101010] border border-white/5 p-8 rounded-xl flex flex-col justify-between hover:border-[#10b981]/30 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-[#10b981]/10 rounded flex items-center justify-center text-[#10b981] mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{t.service1Title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t.service1Desc}
                </p>
              </div>
              
              <ul className="text-[11px] text-gray-500 font-mono space-y-2 mt-8 pt-6 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" /> Complex Multi-Branch Flows
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" /> Webhooks &amp; DB Synchants
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" /> Error Fallbacks &amp; Alerts
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-[#101010] border border-white/5 p-8 rounded-xl flex flex-col justify-between hover:border-[#10b981]/30 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-[#10b981]/10 rounded flex items-center justify-center text-[#10b981] mb-6">
                  <Bot className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{t.service2Title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t.service2Desc}
                </p>
              </div>
              
              <ul className="text-[11px] text-gray-500 font-mono space-y-2 mt-8 pt-6 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" /> Gemini &amp; Claude Deployment
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" /> Dynamic CRM Intent Scoring
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" /> Structuring Unstructured Data
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-[#101010] border border-white/5 p-8 rounded-xl flex flex-col justify-between hover:border-[#10b981]/30 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-[#10b981]/10 rounded flex items-center justify-center text-[#10b981] mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{t.service3Title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t.service3Desc}
                </p>
              </div>
              
              <ul className="text-[11px] text-gray-500 font-mono space-y-2 mt-8 pt-6 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" /> Bengali Educational Content
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" /> Practical Code &amp; Logic
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" /> 100% Free Resources
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-20 px-6 md:px-12 bg-[#080808] border-b border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16">
            <div>
              <span className="text-xs font-mono text-[#10b981] uppercase tracking-widest block mb-2">{t.architectureInActionLabel}</span>
              <h3 className="text-3xl font-extrabold text-white tracking-tight">{t.useCaseSubtitle}</h3>
            </div>
            <p className="text-xs text-gray-400 max-w-sm mt-4 lg:mt-0">
              {t.caseSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Case 1 */}
            <div className="p-6 bg-[#0f0f0f] border border-white/5 rounded-lg flex flex-col justify-between hover:shadow-lg hover:shadow-emerald-500/5 transition-all">
              <div>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-300 text-[10px] font-mono rounded inline-block mb-4">
                  Lead Automation
                </span>
                <h4 className="text-lg font-bold text-white mb-2">{t.leadCaseTitle}</h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-sans">
                  {t.leadCaseDesc}
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6">
                <span className="text-[10px] font-mono text-gray-500 block uppercase">Tools Utilized</span>
                <span className="text-xs font-mono text-[#10b981] mt-1 inline-block">n8n / Facebook API / Gemini / Google Sheets / Slack</span>
              </div>
            </div>

            {/* Case 2 */}
            <div className="p-6 bg-[#0f0f0f] border border-white/5 rounded-lg flex flex-col justify-between hover:shadow-lg hover:shadow-emerald-500/5 transition-all">
              <div>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-300 text-[10px] font-mono rounded inline-block mb-4">
                  Finance Operations
                </span>
                <h4 className="text-lg font-bold text-white mb-2">{t.financeCaseTitle}</h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-sans">
                  {t.financeCaseDesc}
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6">
                <span className="text-[10px] font-mono text-gray-500 block uppercase">Tools Utilized</span>
                <span className="text-xs font-mono text-[#10b981] mt-1 inline-block">n8n Core / Stripe Webhooks / PostgreSQL / Resend</span>
              </div>
            </div>

            {/* Case 3 */}
            <div className="p-6 bg-[#0f0f0f] border border-white/5 rounded-lg flex flex-col justify-between hover:shadow-lg hover:shadow-emerald-500/5 transition-all">
              <div>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-300 text-[10px] font-mono rounded inline-block mb-4">
                  Content Infrastructure
                </span>
                <h4 className="text-lg font-bold text-white mb-2">{t.contentCaseTitle}</h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-sans">
                  {t.contentCaseDesc}
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6">
                <span className="text-[10px] font-mono text-gray-500 block uppercase">Tools Utilized</span>
                <span className="text-xs font-mono text-[#10b981] mt-1 inline-block">n8n / Gemini / Claude API / Custom Dashboard Webhooks</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Simulator Playground */}
      <section id="playground" className="py-20 px-6 md:px-12 bg-[#050505] relative border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-xl mb-12 text-left">
            <span className="text-xs font-mono text-[#10b981] uppercase tracking-widest block mb-2">EXPERIENCE THE FLOW IN REAL-TIME</span>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">{t.playgroundTitle}</h3>
            <p className="text-xs text-gray-400 mt-3 leading-relaxed">
              {t.playgroundSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
              
              <div className="bg-[#101010] p-6 border border-white/5 rounded-xl space-y-6">
                <div>
                  <label className="text-xs font-mono text-gray-500 uppercase block mb-3 text-left">
                    {t.playgroundSelectLabel}
                  </label>
                  <div className="space-y-3">
                    {Object.keys(TEMPLATES).map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedTemplate(key as keyof typeof TEMPLATES)}
                        className={`w-full text-left p-4 rounded-lg border transition-all text-xs flex flex-col cursor-pointer ${selectedTemplate === key ? 'border-[#10b981] bg-[#10b981]/5 text-white' : 'border-white/5 bg-transparent text-gray-400 hover:border-white/10 hover:text-white'}`}
                      >
                        <span className="font-bold flex items-center justify-between">
                          {TEMPLATES[key as keyof typeof TEMPLATES].name}
                          {selectedTemplate === key && <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>}
                        </span>
                        <span className="text-[10px] text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                          {TEMPLATES[key as keyof typeof TEMPLATES].desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/5 pt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-500 uppercase">Engine Status</span>
                    <span className={`text-[11px] font-bold uppercase font-mono px-2 py-0.5 rounded ${simulationStatus === 'success' ? 'bg-[#10b981]/10 text-[#10b981]' : simulationStatus === 'running' ? 'bg-yellow-500/10 text-yellow-400 animate-pulse' : 'bg-white/5 text-gray-400'}`}>
                      {simulationStatus === 'success' ? t.statusSuccess : simulationStatus === 'running' ? t.statusRunning : t.statusIdle}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                      <span>FLOW ROUTE COVERAGE</span>
                      <span className="text-white font-bold">{progressPercent}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#10b981] transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <button
                      onClick={handleExecuteLiveRun}
                      disabled={simulationStatus === 'running'}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 text-black font-extrabold text-[11px] uppercase tracking-wider rounded transition-all ${simulationStatus === 'running' ? 'bg-gray-700 cursor-not-allowed text-gray-400' : 'bg-[#10b981] hover:bg-[#34d399] cursor-pointer'}`}
                    >
                      <Play className="w-3.5 h-3.5" />
                      {simulationStatus === 'running' ? t.btnExecuting : t.btnExecute}
                    </button>
                    
                    {(simulationStatus === 'success' || simulationStatus === 'running') && (
                      <button
                        onClick={resetSimulation}
                        className="px-4 border border-white/10 hover:border-white/25 text-white text-[11px] uppercase font-mono rounded hover:bg-white/5 transition-all text-center cursor-pointer font-bold"
                      >
                        {t.btnReset}
                      </button>
                    )}
                  </div>
                </div>

              </div>

              <div className="bg-white/5 p-4 border border-white/10 rounded-xl text-[10px] font-mono text-gray-500 leading-relaxed text-left flex gap-2.5 items-start">
                <HelpCircle className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span>
                  {t.sidebarDisclaimer}
                </span>
              </div>

            </div>

            <div className="lg:col-span-8 flex flex-col justify-between">
              
              <div className="bg-[#101010] border border-white/10 rounded-xl p-6 flex-1 flex flex-col justify-between min-h-[460px] overflow-hidden relative">
                
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

                <div className="flex justify-between items-center z-10 border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
                    <span className="text-[11px] font-mono text-white tracking-widest uppercase">
                      STATE CANVAS: {TEMPLATES[selectedTemplate].name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[10px] text-gray-500 font-mono">
                    <span>GRID API</span>
                    <span>&bull;</span>
                    <span className="text-[#10b981]">ACTIVE TELEMETRY</span>
                  </div>
                </div>

                <div className="relative flex-1 flex flex-col lg:flex-row items-center justify-around gap-6 py-6 z-10">
                  
                  {/* Absolute SVG Path overlay for connections */}
                  <div className="absolute inset-0 pointer-events-none hidden lg:block">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M 100,100 L 250,100 L 400,100 L 550,100" 
                        fill="none" 
                        stroke="rgba(255,255,255,0.06)" 
                        strokeWidth="3" 
                        strokeDasharray="6"
                      />
                      {simulationStatus === 'running' && (
                        <path 
                          className="animate-[dash_10s_linear_infinite]"
                          d="M 100,100 L 250,100 L 400,100 L 550,100" 
                          fill="none" 
                          stroke="#10b981" 
                          strokeWidth="3.5" 
                          strokeDasharray="14 10"
                        />
                      )}
                    </svg>
                  </div>

                  {simulatorNodes.map((node, i) => (
                    <div 
                      key={node.id}
                      className={`relative w-44 p-4 border rounded-xl flex flex-col justify-between transition-all duration-300 ${node.status === 'success' ? 'bg-[#10b981]/5 border-[#10b981] shadow-md shadow-[#10b981]/10' : node.status === 'running' ? 'bg-yellow-500/5 border-yellow-400 animate-pulse scale-[1.03] shadow-md shadow-yellow-500/10' : 'bg-[#151515] border-white/5'}`}
                    >
                      
                      <span className="absolute -top-2 -left-2 w-5 h-5 bg-white/5 border border-white/10 text-[9px] font-mono text-gray-400 rounded-full flex items-center justify-center">
                        {i + 1}
                      </span>

                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider block">
                          {node.label}
                        </span>
                        <span className={`w-2 h-2 rounded-full ${node.status === 'success' ? 'bg-[#10b981]' : node.status === 'running' ? 'bg-yellow-400 animate-ping' : 'bg-gray-600'}`}></span>
                      </div>

                      <h5 className="text-xs font-bold text-white tracking-tight text-left">{node.name}</h5>
                      
                      <p className="text-[10px] text-gray-400 mt-2 font-mono truncate py-1 border-t border-white/5 bg-white/2 cursor-default text-left" title={node.value}>
                        {node.status === 'running' ? node.value : node.status === 'success' ? 'Success (200 OK)' : 'Idle waiting...'}
                      </p>

                    </div>
                  ))}

                </div>

                <div className="bg-[#050505] border border-white/10 rounded-lg p-4 font-mono text-[11px] leading-relaxed text-left z-10 mt-6 max-h-[140px] overflow-y-auto">
                  <div className="flex justify-between items-center text-[10px] uppercase text-gray-500 font-bold mb-2 pb-1 border-b border-white/5">
                    <span>Telemetry Operations Terminal Log</span>
                    <span className="text-[#10b981]">Active Listener</span>
                  </div>
                  <div className="space-y-1 block max-h-[100px] overflow-y-auto scrollbar-thin">
                    {consoleLogs.map((log, index) => (
                      <div 
                        key={index} 
                        className={`transition-all duration-300 ${log.startsWith('⚡') ? 'text-[#10b981] font-bold' : log.startsWith('🤖') ? 'text-yellow-400' : log.startsWith('💡') ? 'text-cyan-300' : log.startsWith('🟢') ? 'text-[#10b981] font-bold underline' : 'text-gray-400'}`}
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Community Section */}
      <section id="promptlab" className="py-20 px-6 md:px-12 bg-[#0a0a0a] border-b border-white/5 relative text-left">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#10b981]/5 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 text-left space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-[#10b981]/10 border border-[#10b981]/25 px-3 py-1 rounded-full">
                <Flame className="w-3.5 h-3.5 text-[#10b981]" />
                <span className="text-[10px] uppercase font-mono text-[#10b981] tracking-wider font-bold">100% Free Learning Community</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-sharp">
                {t.communityTitle}
              </h3>
              
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-xl">
                {t.communityText1}
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
                <div>
                  <span className="block text-2xl font-extrabold text-white font-mono">{t.communityStat1}</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block mt-1">{t.communityStat1Label}</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold text-[#10b981] font-mono">{t.communityStat2}</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block mt-1">{t.communityStat2Label}</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold text-white font-mono">{t.communityStat3}</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block mt-1">{t.communityStat3Label}</span>
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 bg-[#121212] border border-white/10 rounded-xl p-8 relative">
              <span className="absolute top-4 right-4 text-[9px] font-mono text-gray-400 uppercase border border-white/5 px-2 py-0.5 rounded">
                Strict Quality
              </span>
              
              <div className="space-y-4 text-left">
                <span className="text-[10px] font-mono text-[#10b981] uppercase tracking-widest block font-bold">
                  {t.communityManifestoHeader}
                </span>

                <div className="space-y-3 italic text-gray-300 text-xs md:text-sm leading-relaxed">
                  <p>
                    {t.communityQuote}
                  </p>
                  <p className="text-[#10b981] mt-2 font-mono text-[11px] not-italic">
                    {t.founderSign}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-3 text-[11px] font-mono text-gray-400">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#10b981] flex-shrink-0" />
                    <span>{t.manifestoItem1}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#10b981] flex-shrink-0" />
                    <span>{t.manifestoItem2}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#10b981] flex-shrink-0" />
                    <span>{t.manifestoItem3}</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-[#050505] relative text-left">
        <div className="absolute top-1/2 left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          
          <div className="max-w-lg mx-auto text-center mb-12">
            <span className="text-xs font-mono text-[#10b981] uppercase tracking-widest block mb-2">{t.contactFormHeader}</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{t.contactTitle}</h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed mt-3">
              {t.contactSubtitle}
            </p>
          </div>

          <div className="bg-[#101010] border border-white/10 p-8 md:p-12 rounded-xl text-left shadow-2xl">
            
            {formSubmitted ? (
               <div className="py-12 px-6 text-center space-y-6">
                <div className="w-16 h-16 bg-[#10b981]/10 text-[#10b981] rounded-full flex items-center justify-center mx-auto border border-[#10b981]/25">
                  <Zap className="w-8 h-8 animate-bounce" />
                </div>
                <h4 className="text-2xl font-extrabold text-white">{t.contactRequestReceived}</h4>
                <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                  {t.contactSuccess}
                </p>

                <div className="bg-[#050505] border border-white/5 p-4 rounded-lg text-left max-w-sm mx-auto font-mono text-[10px] text-gray-500">
                  <span className="block text-gray-400 uppercase font-bold mb-2">&bull; Active Webhook Payload State</span>
                  <div>ID: req_01j955bcn72m</div>
                  <div>Sync Payload Intent: "Automation Consultation"</div>
                  <div>Sender: {formData.email}</div>
                  <div className="text-[#10b981] mt-1">Status: OK 201 Dispatched Slack webhook alert</div>
                </div>

                <button 
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', challenge: '', budget: '$1,000 - $3,000' });
                  }}
                  className="px-6 py-2.5 bg-[#10b981] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#34d399] transition-all cursor-pointer rounded"
                >
                  {t.contactSubmitAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase text-left block">
                      {t.contactName} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Suhail Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-xs text-white rounded focus:border-[#10b981] focus:outline-none focus:bg-[#1c1c1c] transition-all font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase text-left block">
                      {t.contactEmail} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. client@agency.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-xs text-white rounded focus:border-[#10b981] focus:outline-none focus:bg-[#1c1c1c] transition-all font-mono"
                    />
                  </div>

                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 uppercase text-left block">
                    {t.contactChallenge} <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    required
                    rows={4}
                    placeholder={t.contactChallengePlaceholder}
                    value={formData.challenge}
                    onChange={(e) => setFormData(prev => ({ ...prev, challenge: e.target.value }))}
                    className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-xs text-white rounded focus:border-[#10b981] focus:outline-none focus:bg-[#1c1c1c] transition-all font-mono min-h-[100px] leading-relaxed"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 uppercase block mb-1 text-left">
                    {t.contactBudget}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono">
                    {["under $1,000", "$1,000 - $3,000", "$3,000 - $8,000", "$8,000+"].map((tier) => (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setFormData(prev => ({ ...prev, budget: tier }))}
                        className={`py-3 text-[10px] text-center uppercase border rounded transition-all cursor-pointer ${formData.budget === tier ? 'border-[#10b981] bg-[#10b981]/5 text-[#10b981] font-bold' : 'border-white/10 text-gray-400 hover:border-white/20'}`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded text-[10px] font-mono text-gray-500 leading-relaxed text-left">
                  {t.contactIntegrityDisclaimerLabel}
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm}
                  className={`w-full py-4 bg-[#10b981] hover:bg-[#34d399] text-black font-extrabold text-xs uppercase tracking-widest transition-all text-center flex items-center justify-center gap-2 ${isSubmittingForm ? 'opacity-80 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <Send className="w-4 h-4" />
                  {isSubmittingForm ? t.contactSending : t.contactSubmit}
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-[#0a0a0a] border-t border-white/5 py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 z-10 text-left">
        
        <div className="text-[10px] text-gray-500 font-mono text-center md:text-left">
          {t.footerCopy} &copy; {new Date().getFullYear()}
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-[11px] font-mono text-gray-400 uppercase">
          <a href="mailto:ali@azam-khan.com" className="hover:text-[#10b981] transition-colors flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" /> ali@azam-khan.com
          </a>
          <span className="text-white/20 hidden md:inline">/</span>
          <a href="https://github.com/aliazam" target="_blank" rel="noopener noreferrer" className="hover:text-[#10b981] transition-colors flex items-center gap-1.5">
            <Github className="w-3.5 h-3.5" /> github/aliazam
          </a>
          <span className="text-white/20 hidden md:inline">/</span>
          <a href="https://linkedin.com/in/aliazam" target="_blank" rel="noopener noreferrer" className="hover:text-[#10b981] transition-colors flex items-center gap-1.5">
            <Linkedin className="w-3.5 h-3.5" /> linkedin/aliazam
          </a>
        </div>

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-3 py-1 bg-white/5 border border-white/10 hover:border-white/20 rounded font-mono text-[10px] uppercase text-gray-400 hover:text-white transition-all cursor-pointer"
        >
          {t.backToTop} &uarr;
        </button>
      </footer>

    </div>
  );
}
