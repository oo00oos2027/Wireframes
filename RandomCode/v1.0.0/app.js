/* HFA Franchise Onboarding - Data Layer & Utilities */

// ── CONSTANTS ──
const STAGES = [
  { id: 'inquiry',      label: 'Inquiry',        color: '#6B778C', bg: '#EBECF0' },
  { id: 'qualification',label: 'Qualification',  color: '#0052CC', bg: '#DEEBFF' },
  { id: 'application',  label: 'Application',    color: '#6554C0', bg: '#EAE6FF' },
  { id: 'fdd_review',   label: 'FDD Review',     color: '#FF8B00', bg: '#FFFAE6' },
  { id: 'discovery_day',label: 'Discovery Day',  color: '#00875A', bg: '#E3FCEF' },
  { id: 'agreement',    label: 'Agreement',      color: '#0052CC', bg: '#DEEBFF' },
  { id: 'site_selection',label:'Site Selection', color: '#6554C0', bg: '#EAE6FF' },
  { id: 'buildout',     label: 'Build-Out',      color: '#FF8B00', bg: '#FFFAE6' },
  { id: 'training',     label: 'Training',       color: '#00875A', bg: '#E3FCEF' },
  { id: 'open',         label: 'Grand Opening',  color: '#006644', bg: '#DCFFF4' }
];

const STAGE_IDS = STAGES.map(s => s.id);

const NSO_MILESTONES = [
  { phase: 'Site Selection & Legal', items: [
    { id: 'm1',  title: 'Territory approved by corporate',        due: 7,  owner: 'Corporate' },
    { id: 'm2',  title: 'Letter of Intent (LOI) signed',         due: 14, owner: 'Franchisee' },
    { id: 'm3',  title: 'Lease executed',                        due: 30, owner: 'Franchisee' },
    { id: 'm4',  title: 'Permits & zoning confirmed',            due: 35, owner: 'Franchisee' },
  ]},
  { phase: 'Build-Out & Equipment', items: [
    { id: 'm5',  title: 'General contractor selected',           due: 42, owner: 'Franchisee' },
    { id: 'm6',  title: 'Build-out plans approved by corporate', due: 50, owner: 'Corporate' },
    { id: 'm7',  title: 'Construction commenced',               due: 56, owner: 'GC' },
    { id: 'm8',  title: 'Equipment order placed',               due: 60, owner: 'Franchisee' },
    { id: 'm9',  title: 'Build-out complete & inspected',        due: 100, owner: 'GC' },
    { id: 'm10', title: 'Equipment installed & tested',          due: 105, owner: 'Vendor' },
  ]},
  { phase: 'Training & Staffing', items: [
    { id: 'm11', title: 'Franchisee attends HQ training',        due: 70, owner: 'Franchisee' },
    { id: 'm12', title: 'Key staff hired',                       due: 90, owner: 'Franchisee' },
    { id: 'm13', title: 'Staff training completed',              due: 108, owner: 'Franchisee' },
    { id: 'm14', title: 'POS & systems configured',             due: 110, owner: 'IT' },
  ]},
  { phase: 'Pre-Opening & Launch', items: [
    { id: 'm15', title: 'Marketing assets delivered',            due: 112, owner: 'Marketing' },
    { id: 'm16', title: 'Soft open / dry run',                   due: 118, owner: 'Franchisee' },
    { id: 'm17', title: 'Corporate pre-opening inspection',      due: 120, owner: 'Corporate' },
    { id: 'm18', title: '🎉 Grand Opening Day',                  due: 125, owner: 'All' },
  ]}
];

// ── SEED DATA ──
const SEED_PROSPECTS = [
  { id: 'p001', firstName: 'Sarah', lastName: 'Mitchell', email: 'sarah.mitchell@email.com', phone: '(512) 555-0101', state: 'TX', city: 'Austin', stage: 'qualification', netWorth: 620000, liquidAssets: 280000, investmentBudget: 350000, territory: 'Austin North', assignedTo: 'James Okafor', appliedDate: '2026-01-15', notes: 'Strong candidate, owns 2 other businesses', stageDate: '2026-02-01' },
  { id: 'p002', firstName: 'Marcus', lastName: 'Chen', email: 'marcus.chen@email.com', phone: '(713) 555-0202', state: 'TX', city: 'Houston', stage: 'fdd_review', netWorth: 850000, liquidAssets: 420000, investmentBudget: 500000, territory: 'Houston Midtown', assignedTo: 'Lisa Park', appliedDate: '2025-12-10', notes: 'Ready to sign - waiting on attorney review', stageDate: '2026-01-20' },
  { id: 'p003', firstName: 'Priya', lastName: 'Sharma', email: 'priya.sharma@email.com', phone: '(214) 555-0303', state: 'TX', city: 'Dallas', stage: 'agreement', netWorth: 1200000, liquidAssets: 600000, investmentBudget: 627000, territory: 'Dallas Uptown', assignedTo: 'James Okafor', appliedDate: '2025-11-05', notes: 'Multi-unit interest - wants 3 territories', stageDate: '2026-02-10' },
  { id: 'p004', firstName: 'Tom', lastName: 'Nguyen', email: 'tom.nguyen@email.com', phone: '(210) 555-0404', state: 'TX', city: 'San Antonio', stage: 'buildout', netWorth: 490000, liquidAssets: 195000, investmentBudget: 220000, territory: 'San Antonio NW', assignedTo: 'Lisa Park', appliedDate: '2025-10-20', notes: 'Build-out on track, 60% complete', stageDate: '2025-12-15' },
  { id: 'p005', firstName: 'Angela', lastName: 'Brooks', email: 'angela.brooks@email.com', phone: '(512) 555-0505', state: 'TX', city: 'Austin', stage: 'open', netWorth: 750000, liquidAssets: 350000, investmentBudget: 420000, territory: 'Austin South', assignedTo: 'James Okafor', appliedDate: '2025-09-01', notes: 'Grand Opening held Feb 14th — excellent launch!', stageDate: '2026-02-14' },
  { id: 'p006', firstName: 'Derek', lastName: 'Walsh', email: 'derek.walsh@email.com', phone: '(281) 555-0606', state: 'TX', city: 'The Woodlands', stage: 'inquiry', netWorth: 310000, liquidAssets: 120000, investmentBudget: 185000, territory: null, assignedTo: null, appliedDate: '2026-03-20', notes: 'Just submitted inquiry form', stageDate: '2026-03-20' },
  { id: 'p007', firstName: 'Lisa', lastName: 'Fontaine', email: 'lisa.fontaine@email.com', phone: '(972) 555-0707', state: 'TX', city: 'Plano', stage: 'site_selection', netWorth: 980000, liquidAssets: 510000, investmentBudget: 580000, territory: 'Plano East', assignedTo: 'Lisa Park', appliedDate: '2025-11-15', notes: 'Evaluating 2 sites, decision expected by April', stageDate: '2026-02-20' },
  { id: 'p008', firstName: 'Carlos', lastName: 'Rivera', email: 'carlos.rivera@email.com', phone: '(817) 555-0808', state: 'TX', city: 'Fort Worth', stage: 'training', netWorth: 670000, liquidAssets: 290000, investmentBudget: 395000, territory: 'Fort Worth South', assignedTo: 'James Okafor', appliedDate: '2025-10-01', notes: 'In HQ training week 2 of 4', stageDate: '2026-03-10' },
];

const TERRITORIES = [
  { id: 't01', name: 'Austin North',       status: 'pending',  stores: 0, zip: '78758' },
  { id: 't02', name: 'Austin South',       status: 'taken',    stores: 1, zip: '78704' },
  { id: 't03', name: 'Austin Central',     status: 'available',stores: 0, zip: '78701' },
  { id: 't04', name: 'Austin East',        status: 'available',stores: 0, zip: '78721' },
  { id: 't05', name: 'Houston Midtown',    status: 'pending',  stores: 0, zip: '77004' },
  { id: 't06', name: 'Houston Heights',    status: 'available',stores: 0, zip: '77008' },
  { id: 't07', name: 'Houston Sugar Land', status: 'taken',    stores: 1, zip: '77479' },
  { id: 't08', name: 'Houston Katy',       status: 'available',stores: 0, zip: '77450' },
  { id: 't09', name: 'Dallas Uptown',      status: 'pending',  stores: 0, zip: '75219' },
  { id: 't10', name: 'Dallas Frisco',      status: 'available',stores: 0, zip: '75034' },
  { id: 't11', name: 'Dallas Plano',       status: 'available',stores: 0, zip: '75023' },
  { id: 't12', name: 'Plano East',         status: 'pending',  stores: 0, zip: '75074' },
  { id: 't13', name: 'Fort Worth South',   status: 'taken',    stores: 0, zip: '76115' },
  { id: 't14', name: 'Fort Worth North',   status: 'available',stores: 0, zip: '76248' },
  { id: 't15', name: 'San Antonio NW',     status: 'taken',    stores: 1, zip: '78249' },
  { id: 't16', name: 'San Antonio SE',     status: 'available',stores: 0, zip: '78223' },
  { id: 't17', name: 'San Antonio NE',     status: 'available',stores: 0, zip: '78233' },
  { id: 't18', name: 'The Woodlands',      status: 'available',stores: 0, zip: '77380' },
];

// ── DATA ACCESS ──
const DB = {
  key: 'hfa_franchise_db',

  load() {
    const raw = localStorage.getItem(this.key);
    if (!raw) {
      const init = { prospects: SEED_PROSPECTS, territories: TERRITORIES, milestones: {}, nextId: 100 };
      localStorage.setItem(this.key, JSON.stringify(init));
      return init;
    }
    return JSON.parse(raw);
  },

  save(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  },

  getProspects() { return this.load().prospects; },

  getProspect(id) { return this.load().prospects.find(p => p.id === id); },

  saveProspect(prospect) {
    const db = this.load();
    const idx = db.prospects.findIndex(p => p.id === prospect.id);
    if (idx >= 0) db.prospects[idx] = prospect;
    else { prospect.id = 'p' + String(++db.nextId).padStart(3,'0'); db.prospects.push(prospect); }
    this.save(db);
    return prospect;
  },

  getMilestones(prospectId) {
    const db = this.load();
    return db.milestones[prospectId] || [];
  },

  toggleMilestone(prospectId, milestoneId) {
    const db = this.load();
    if (!db.milestones[prospectId]) db.milestones[prospectId] = [];
    const arr = db.milestones[prospectId];
    const idx = arr.indexOf(milestoneId);
    if (idx >= 0) arr.splice(idx, 1);
    else arr.push(milestoneId);
    this.save(db);
    return db.milestones[prospectId];
  },

  getTerritories() { return this.load().territories; },

  reset() { localStorage.removeItem(this.key); }
};

// ── UTILITIES ──
function fmt$$(n) {
  if (!n && n !== 0) return '—';
  return '$' + Number(n).toLocaleString();
}

function fmtDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function stageBadge(stageId) {
  const s = STAGES.find(x => x.id === stageId) || STAGES[0];
  return `<span class="badge" style="background:${s.bg};color:${s.color}">${s.label}</span>`;
}

function stageIndex(stageId) { return STAGE_IDS.indexOf(stageId); }

function qualifyProspect(netWorth, liquidAssets, budget) {
  const results = [];
  let pass = true;
  if (netWorth < 300000) { results.push({ field: 'Net Worth', status: 'fail', msg: `$${netWorth.toLocaleString()} — minimum $300,000 required` }); pass = false; }
  else results.push({ field: 'Net Worth', status: 'pass', msg: `$${netWorth.toLocaleString()} ✓ meets minimum` });

  if (liquidAssets < 100000) { results.push({ field: 'Liquid Assets', status: 'fail', msg: `$${liquidAssets.toLocaleString()} — minimum $100,000 required` }); pass = false; }
  else results.push({ field: 'Liquid Assets', status: 'pass', msg: `$${liquidAssets.toLocaleString()} ✓ meets minimum` });

  if (budget < 185000 || budget > 627000) { results.push({ field: 'Investment Budget', status: 'warn', msg: `$${budget.toLocaleString()} — range is $185,000–$627,000` }); }
  else results.push({ field: 'Investment Budget', status: 'pass', msg: `$${budget.toLocaleString()} ✓ within range` });

  return { pass, results };
}

// ── NAV BUILDER ──
function buildNav(activePage) {
  const pages = [
    { href: 'index.html',              icon: '📊', label: 'Dashboard' },
    { href: 'portal.html',             icon: '📋', label: 'Apply Now' },
    { href: 'pipeline.html',           icon: '🔀', label: 'Pipeline' },
    { href: 'nso.html',                icon: '🏗️', label: 'NSO Tracker' },
    { href: 'territory.html',          icon: '🗺️', label: 'Territory Map' },
    { href: 'franchisee-login.html',   icon: '🏪', label: 'Franchisee Portal' },
  ];
  return pages.map(p =>
    `<a href="${p.href}" class="${p.href.replace('.html','') === activePage ? 'active' : ''}">${p.icon} ${p.label}</a>`
  ).join('');
}

// ── JOURNEY BAR ──
function buildJourneyBar(currentStageId, containerId) {
  const currentIdx = stageIndex(currentStageId);
  const el = document.getElementById(containerId);
  if (!el) return;

  const items = STAGES.map((s, i) => {
    let cls = '';
    if (i < currentIdx) cls = 'completed';
    else if (i === currentIdx) cls = 'active';
    const connector = i < STAGES.length - 1 ? '<div class="stage-connector"></div>' : '';
    return `
      <div class="stage-item ${cls}">
        <button class="stage-btn" onclick="void(0)" title="${s.label}">
          <div class="stage-num">${i < currentIdx ? '✓' : i + 1}</div>
          <div class="stage-label">${s.label}</div>
        </button>
        ${connector}
      </div>`;
  });
  el.innerHTML = `<div class="journey-stages">${items.join('')}</div>`;
}

// ── CSV EXPORT ──
function exportCSV(data, filename) {
  if (!data.length) return;
  const headers = Object.keys(data[0]);
  const rows = data.map(r => headers.map(h => `"${String(r[h]||'').replace(/"/g,'""')}"`).join(','));
  const csv = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

// ── TOAST ──
function toast(msg, type = 'success') {
  const t = document.createElement('div');
  const colors = { success: '#00875A', error: '#DE350B', info: '#0052CC', warning: '#FF8B00' };
  t.style.cssText = `position:fixed;bottom:24px;right:24px;z-index:9999;background:${colors[type]||colors.info};color:white;padding:12px 20px;border-radius:8px;font-size:14px;font-weight:600;box-shadow:0 4px 12px rgba(0,0,0,0.25);max-width:320px;`;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.3s'; setTimeout(() => t.remove(), 300); }, 3000);
}

// ── PIPELINE SUMMARY FOR DASHBOARD ──
function getPipelineSummary() {
  const prospects = DB.getProspects();
  const summary = {};
  STAGES.forEach(s => { summary[s.id] = { count: 0, value: 0 }; });
  prospects.forEach(p => {
    if (summary[p.stage]) {
      summary[p.stage].count++;
      summary[p.stage].value += Number(p.investmentBudget) || 0;
    }
  });
  return summary;
}
