/* HFA Franchise — Franchisee Portal Data Layer */

// ── SEED DATA ──
const SEED_FRANCHISEES = [
  {
    id: 'f001',
    firstName: 'Sarah', lastName: 'Mitchell',
    email: 'sarah@mitchellventures.com', password: 'demo123',
    phone: '(512) 555-0101',
    businessName: 'Mitchell Ventures LLC', entityType: 'LLC', ein: '12-3456789',
    address: '1234 Oak Creek Dr', city: 'Austin', state: 'TX', zip: '78758',
    netWorth: 620000, liquidAssets: 280000,
    fundingSource: 'Personal savings + SBA Loan',
    bio: 'Experienced entrepreneur with 2 existing service businesses. Looking to expand into franchise ownership.',
    profilePhoto: null,
    documents: { personalFinancial: true, taxReturns: true, bankStatement: true, govId: false, businessLicense: true },
    fddSigned: true, fddSignedDate: '2026-01-28',
    backgroundCheckAuth: true,
    createdAt: '2026-01-15', lastLogin: '2026-03-27',
    storeApplicationIds: ['sa001', 'sa002'],
    repName: 'James Okafor', repEmail: 'james.okafor@hfa.com', repPhone: '(512) 555-9900',
  }
];

const SEED_STORE_APPS = [
  {
    id: 'sa001', franchiseeId: 'f001',
    storeName: 'Austin North — HFA',
    territory: 'Austin North', territoryId: 't01',
    stage: 'site_selection',
    investmentBudget: 350000,
    fundingSource: 'Personal savings + SBA Loan',
    siteAddress: null, siteCity: 'Austin', siteState: 'TX',
    leaseStatus: 'Searching',
    repName: 'James Okafor', repEmail: 'james.okafor@hfa.com', repPhone: '(512) 555-9900',
    createdAt: '2026-01-20', stageDate: '2026-02-15',
    estimatedOpenDate: '2026-09-01',
    actualOpenDate: null,
    status: 'active',
    notes: 'Evaluating 2 potential sites: Research Blvd and Anderson Lane. Both meet proximity requirements.',
    storeDocuments: { loi: false, leaseExec: false, buildoutPlans: false, gcContract: false, staffRoster: false },
  },
  {
    id: 'sa002', franchiseeId: 'f001',
    storeName: 'Austin Central — HFA',
    territory: 'Austin Central', territoryId: 't03',
    stage: 'inquiry',
    investmentBudget: 420000,
    fundingSource: 'HELOC',
    siteAddress: null, siteCity: 'Austin', siteState: 'TX',
    leaseStatus: null,
    repName: 'James Okafor', repEmail: 'james.okafor@hfa.com', repPhone: '(512) 555-9900',
    createdAt: '2026-03-15', stageDate: '2026-03-15',
    estimatedOpenDate: null,
    actualOpenDate: null,
    status: 'pending_approval',
    notes: 'Second territory interest submitted. Awaiting corporate review.',
    storeDocuments: { loi: false, leaseExec: false, buildoutPlans: false, gcContract: false, staffRoster: false },
  }
];

// ── STAGE-SPECIFIC REQUIREMENTS (franchisee-facing) ──
const STAGE_REQUIREMENTS = {
  inquiry:       [{ id: 'r1', label: 'Submit initial inquiry form', owner: 'You', done: true }],
  qualification: [
    { id: 'r2', label: 'Upload Personal Financial Statement', owner: 'You', docKey: 'personalFinancial' },
    { id: 'r3', label: 'Upload last 2 years tax returns', owner: 'You', docKey: 'taxReturns' },
    { id: 'r4', label: 'Upload 90-day bank statement', owner: 'You', docKey: 'bankStatement' },
    { id: 'r5', label: 'Government-issued ID', owner: 'You', docKey: 'govId' },
    { id: 'r6', label: 'Authorize background & credit check', owner: 'You', fieldKey: 'backgroundCheckAuth' },
  ],
  application: [
    { id: 'r7', label: 'Complete full application form', owner: 'You', done: true },
    { id: 'r8', label: 'Corporate review & approval', owner: 'Corporate', waitOnly: true },
  ],
  fdd_review: [
    { id: 'r9', label: 'Receive FDD from HFA', owner: 'Corporate', waitOnly: true },
    { id: 'r10', label: 'Review FDD (minimum 14 days)', owner: 'You', fieldKey: 'fddSigned' },
    { id: 'r11', label: 'Consult with franchise attorney', owner: 'You' },
    { id: 'r12', label: 'Attend Discovery Day at HFA HQ', owner: 'You' },
  ],
  agreement: [
    { id: 'r13', label: 'Sign Franchise Agreement (DocuSign)', owner: 'You', fieldKey: 'fddSigned' },
    { id: 'r14', label: 'Pay initial franchise fee', owner: 'You' },
    { id: 'r15', label: 'Execute Area Development Agreement (if multi-unit)', owner: 'You' },
  ],
  site_selection: [
    { id: 'r16', label: 'Select & submit site for corporate approval', owner: 'You' },
    { id: 'r17', label: 'Corporate site approval', owner: 'Corporate', waitOnly: true },
    { id: 'r18', label: 'Sign Letter of Intent (LOI)', owner: 'You', storeDocKey: 'loi' },
    { id: 'r19', label: 'Confirm zoning & permits', owner: 'You' },
    { id: 'r20', label: 'Execute lease agreement', owner: 'You', storeDocKey: 'leaseExec' },
  ],
  buildout: [
    { id: 'r21', label: 'Select & submit General Contractor for approval', owner: 'You' },
    { id: 'r22', label: 'Submit build-out plans to corporate', owner: 'You', storeDocKey: 'buildoutPlans' },
    { id: 'r23', label: 'GC contract executed', owner: 'You', storeDocKey: 'gcContract' },
    { id: 'r24', label: 'Begin construction', owner: 'GC/You' },
    { id: 'r25', label: 'Order equipment through approved vendors', owner: 'You' },
    { id: 'r26', label: 'Pass corporate build-out inspection', owner: 'Corporate', waitOnly: true },
  ],
  training: [
    { id: 'r27', label: 'Attend 3-week HFA HQ training program', owner: 'You' },
    { id: 'r28', label: 'Hire & train key staff members', owner: 'You' },
    { id: 'r29', label: 'Submit staff roster to corporate', owner: 'You', storeDocKey: 'staffRoster' },
    { id: 'r30', label: 'Configure POS and systems with IT team', owner: 'You/IT' },
  ],
  open: [
    { id: 'r31', label: 'Complete all pre-opening requirements', owner: 'You', done: true },
    { id: 'r32', label: 'Grand Opening event complete', owner: 'You', done: true },
  ]
};

// ── FRANCHISEE DATA STORE ──
const FranchiseeDB = {
  KEY: 'hfa_franchisee_db',
  SESSION_KEY: 'hfa_current_franchisee',

  load() {
    const raw = localStorage.getItem(this.KEY);
    if (!raw) {
      const init = { franchisees: SEED_FRANCHISEES, storeApps: SEED_STORE_APPS, milestonesF: {}, nextId: 100 };
      localStorage.setItem(this.KEY, JSON.stringify(init));
      return init;
    }
    return JSON.parse(raw);
  },

  save(data) { localStorage.setItem(this.KEY, JSON.stringify(data)); },

  // ── AUTH ──
  login(email, password) {
    const db = this.load();
    const user = db.franchisees.find(f => f.email.toLowerCase() === email.toLowerCase() && f.password === password);
    if (user) {
      user.lastLogin = new Date().toISOString().split('T')[0];
      this.save(db);
      sessionStorage.setItem(this.SESSION_KEY, JSON.stringify({ id: user.id, email: user.email, name: `${user.firstName} ${user.lastName}` }));
      return user;
    }
    return null;
  },

  logout() { sessionStorage.removeItem(this.SESSION_KEY); },

  getCurrentSession() {
    const raw = sessionStorage.getItem(this.SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  },

  requireAuth() {
    if (!this.getCurrentSession()) {
      window.location.href = 'franchisee-login.html';
      return false;
    }
    return true;
  },

  register(profile) {
    const db = this.load();
    const existing = db.franchisees.find(f => f.email.toLowerCase() === profile.email.toLowerCase());
    if (existing) return { success: false, error: 'An account with this email already exists.' };
    profile.id = 'f' + String(++db.nextId).padStart(3, '0');
    profile.createdAt = new Date().toISOString().split('T')[0];
    profile.storeApplicationIds = [];
    profile.documents = { personalFinancial: false, taxReturns: false, bankStatement: false, govId: false, businessLicense: false };
    profile.fddSigned = false;
    profile.backgroundCheckAuth = false;
    db.franchisees.push(profile);
    this.save(db);
    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify({ id: profile.id, email: profile.email, name: `${profile.firstName} ${profile.lastName}` }));
    return { success: true, franchisee: profile };
  },

  // ── PROFILE ──
  getProfile(id) {
    return this.load().franchisees.find(f => f.id === id);
  },

  saveProfile(profile) {
    const db = this.load();
    const idx = db.franchisees.findIndex(f => f.id === profile.id);
    if (idx >= 0) db.franchisees[idx] = profile;
    this.save(db);
    return profile;
  },

  getProfileCompletion(profile) {
    let score = 0;
    // Personal (25%)
    if (profile.firstName && profile.lastName) score += 5;
    if (profile.email && profile.phone) score += 5;
    if (profile.address && profile.city) score += 5;
    if (profile.businessName && profile.entityType) score += 5;
    if (profile.netWorth > 0 && profile.liquidAssets > 0) score += 5;
    // Documents (40%)
    const docs = profile.documents || {};
    const docKeys = ['personalFinancial', 'taxReturns', 'bankStatement', 'govId', 'businessLicense'];
    const uploadedDocs = docKeys.filter(k => docs[k]).length;
    score += Math.round(uploadedDocs / docKeys.length * 30);
    if (profile.backgroundCheckAuth) score += 10;
    // FDD (35%)
    if (profile.fddSigned) score += 35;
    return Math.min(100, score);
  },

  getMissingActions(profile) {
    const actions = [];
    const docs = profile.documents || {};
    if (!docs.personalFinancial) actions.push({ label: 'Upload Personal Financial Statement', priority: 'high', href: 'franchisee-dashboard.html#documents' });
    if (!docs.taxReturns) actions.push({ label: 'Upload 2-year Tax Returns', priority: 'high', href: 'franchisee-dashboard.html#documents' });
    if (!docs.bankStatement) actions.push({ label: 'Upload Bank Statement', priority: 'medium', href: 'franchisee-dashboard.html#documents' });
    if (!docs.govId) actions.push({ label: 'Upload Government-issued ID', priority: 'high', href: 'franchisee-dashboard.html#documents' });
    if (!profile.backgroundCheckAuth) actions.push({ label: 'Authorize background check', priority: 'high', href: 'franchisee-dashboard.html#documents' });
    if (!profile.fddSigned) actions.push({ label: 'Review & sign FDD', priority: 'high', href: 'franchisee-dashboard.html#documents' });
    return actions;
  },

  // ── STORE APPLICATIONS ──
  getStoreApps(franchiseeId) {
    const db = this.load();
    return db.storeApps.filter(a => a.franchiseeId === franchiseeId);
  },

  getStoreApp(id) {
    return this.load().storeApps.find(a => a.id === id);
  },

  saveStoreApp(app) {
    const db = this.load();
    const idx = db.storeApps.findIndex(a => a.id === app.id);
    if (idx >= 0) {
      db.storeApps[idx] = app;
    } else {
      app.id = 'sa' + String(++db.nextId).padStart(3, '0');
      app.createdAt = new Date().toISOString().split('T')[0];
      app.stageDate = new Date().toISOString().split('T')[0];
      db.storeApps.push(app);
      // Link to franchisee
      const fi = db.franchisees.findIndex(f => f.id === app.franchiseeId);
      if (fi >= 0) {
        if (!db.franchisees[fi].storeApplicationIds) db.franchisees[fi].storeApplicationIds = [];
        db.franchisees[fi].storeApplicationIds.push(app.id);
      }
    }
    this.save(db);
    return app;
  },

  // ── MILESTONES (franchisee-side) ──
  getFMilestones(storeAppId) {
    return this.load().milestonesF[storeAppId] || [];
  },

  toggleFMilestone(storeAppId, milestoneId) {
    const db = this.load();
    if (!db.milestonesF[storeAppId]) db.milestonesF[storeAppId] = [];
    const arr = db.milestonesF[storeAppId];
    const idx = arr.indexOf(milestoneId);
    if (idx >= 0) arr.splice(idx, 1); else arr.push(milestoneId);
    this.save(db);
    return db.milestonesF[storeAppId];
  },

  // ── DOCUMENT UPLOAD (simulated) ──
  uploadDoc(franchiseeId, docKey) {
    const db = this.load();
    const fi = db.franchisees.findIndex(f => f.id === franchiseeId);
    if (fi >= 0) { db.franchisees[fi].documents[docKey] = true; this.save(db); }
  },

  uploadStoreDoc(storeAppId, docKey) {
    const db = this.load();
    const si = db.storeApps.findIndex(a => a.id === storeAppId);
    if (si >= 0) { if (!db.storeApps[si].storeDocuments) db.storeApps[si].storeDocuments = {}; db.storeApps[si].storeDocuments[docKey] = true; this.save(db); }
  },

  reset() { localStorage.removeItem(this.KEY); sessionStorage.removeItem(this.SESSION_KEY); }
};

// ── FRANCHISEE UI UTILITIES ──
function buildFranchiseeNav(activePage) {
  const session = FranchiseeDB.getCurrentSession();
  const initials = session ? session.name.split(' ').map(n=>n[0]).join('') : '?';
  return { navHtml: [
    { href: 'franchisee-dashboard.html', icon: '🏠', label: 'My Dashboard' },
    { href: 'franchisee-store.html',     icon: '🏪', label: 'My Stores' },
    { href: 'franchisee-login.html',     icon: '🔀', label: 'Corporate View' },
  ].map(p => `<a href="${p.href}" class="${p.href.replace('.html','')===activePage?'active':''}">${p.icon} ${p.label}</a>`).join(''),
  initials, name: session ? session.name : 'Guest' };
}

function storeStatusLabel(stage) {
  if (stage === 'open') return { label: 'Open', cls: 'badge-green' };
  if (['buildout','training'].includes(stage)) return { label: 'In Build-Out', cls: 'badge-yellow' };
  if (['agreement','site_selection'].includes(stage)) return { label: 'Active', cls: 'badge-blue' };
  if (stage === 'inquiry') return { label: 'Pending Approval', cls: 'badge-gray' };
  return { label: STAGES.find(s=>s.id===stage)?.label || stage, cls: 'badge-blue' };
}

function getNextAction(storeApp) {
  const reqs = STAGE_REQUIREMENTS[storeApp.stage] || [];
  // Find first incomplete non-wait item
  const pending = reqs.filter(r => !r.waitOnly && !r.done);
  if (!pending.length) {
    const waiting = reqs.filter(r => r.waitOnly);
    return waiting.length ? { label: `Awaiting: ${waiting[0].label}`, type: 'wait' } : null;
  }
  return { label: pending[0].label, type: 'action' };
}
