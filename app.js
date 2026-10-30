/* full app - loaded from local extract with PWA install prompt */
const translations = {
  en: {
    appTitle: "⚽ FIFA 365 Cards", langBtn: "עב", tabCollection: "My Collection", tabAdd: "Add Card",
    searchCollection: "Search name, country, ID...", labelCards: "Cards", labelUnique: "Unique",
    emptyText: "Your collection is empty.<br>Add your first card!",
    cameraHint: "📷 Optional: take a photo of the card (for your reference)", cameraBtn: "Camera / Photo Library",
    labelName: "Name *", labelCardId: "Card ID *", labelCountry: "Country", labelSection: "Section",
    labelDefence: "Defence", labelMidfield: "Midfield", labelAttack: "Attack", labelTotal: "Total",
    submitBtn: "➕ Add to Collection", modalTitle: "Card Details",
    toastAdded: "Card added!", toastRemoved: "Card removed", toastRequired: "Name and Card ID are required",
    toastSectionAdded: "Section added", owned: "Owned", removeOne: "Remove 1", addDuplicate: "+1 Duplicate",
    defence: "Defence", midfield: "Midfield", attack: "Attack", total: "Total", country: "Country",
    section: "Section", cardId: "Card ID", no: "No", allSections: "All", generalSection: "General",
    listView: "☰ List", gridView: "▦ Grid", addSection: "+ Section", sectionPrompt: "New section name:",
    filterSection: "Section", filterCountry: "Country", filterAll: "All",
    moveSection: "Move to section", toastSectionMoved: "Section updated",
    installTitle: "Install FIFA 365 Cards", installBody: "Add this app to your home screen for quick access.",
    installDismiss: "Not now", installAccept: "Install",
    installIosSteps: "1. Tap the Share button ↓\n2. Choose “Add to Home Screen”\n3. Tap Add"
  },
  he: {
    appTitle: "⚽ כרטיסי FIFA 365", langBtn: "EN", tabCollection: "האוסף שלי", tabAdd: "הוסף כרטיס",
    searchCollection: "חיפוש לפי שם, מדינה, מזהה...", labelCards: "כרטיסים", labelUnique: "ייחודיים",
    emptyText: "האוסף שלך ריק.<br>הוסף את הכרטיס הראשון!",
    cameraHint: "📷 אופציונלי: צלם את הכרטיס (לשמירה)", cameraBtn: "מצלמה / ספריית תמונות",
    labelName: "שם *", labelCardId: "מזהה כרטיס *", labelCountry: "מדינה", labelSection: "מדור",
    labelDefence: "הגנה", labelMidfield: "קישור", labelAttack: "התקפה", labelTotal: "סה״כ",
    submitBtn: "➕ הוסף לאוסף", modalTitle: "פרטי כרטיס",
    toastAdded: "הכרטיס נוסף!", toastRemoved: "הכרטיס הוסר", toastRequired: "שם ומזהה כרטיס הם שדות חובה",
    toastSectionAdded: "המדור נוסף", owned: "בבעלות", removeOne: "הסר 1", addDuplicate: "+1 כפול",
    defence: "הגנה", midfield: "קישור", attack: "התקפה", total: "סה״כ", country: "מדינה",
    section: "מדור", cardId: "מזהה כרטיס", no: "לא", allSections: "הכל", generalSection: "כללי",
    listView: "☰ רשימה", gridView: "▦ רשת", addSection: "+ מדור", sectionPrompt: "שם המדור החדש:",
    filterSection: "מדור", filterCountry: "מדינה", filterAll: "הכל",
    moveSection: "העבר למדור", toastSectionMoved: "המדור עודכן",
    installTitle: "התקן את כרטיסי FIFA 365", installBody: "הוסף את האפליקציה למסך הבית לגישה מהירה.",
    installDismiss: "לא עכשיו", installAccept: "התקן",
    installIosSteps: "1. לחץ על כפתור השיתוף ↓\n2. בחר \"הוסף למסך הבית\"\n3. לחץ הוסף"
  }
};

let currentLang = localStorage.getItem('fifa365_lang') || 'en';

const COUNTRIES = [
  { en: "Algeria", he: "אלג'יריה" }, { en: "Argentina", he: "ארגנטינה" }, { en: "Australia", he: "אוסטרליה" },
  { en: "Austria", he: "אוסטריה" }, { en: "Belgium", he: "בלגיה" }, { en: "Bosnia and Herzegovina", he: "בוסניה והרצגובינה" },
  { en: "Brazil", he: "ברזיל" }, { en: "Canada", he: "קנדה" }, { en: "Cape Verde", he: "כף ורדה" },
  { en: "Colombia", he: "קולומביה" }, { en: "Croatia", he: "קרואטיה" }, { en: "Curaçao", he: "קוראסאו" },
  { en: "Czech Republic", he: "צ'כיה" }, { en: "DR Congo", he: "הרפובליקה הדמוקרטית של קונגו" },
  { en: "Ecuador", he: "אקוודור" }, { en: "Egypt", he: "מצרים" }, { en: "England", he: "אנגליה" },
  { en: "France", he: "צרפת" }, { en: "Germany", he: "גרמניה" }, { en: "Ghana", he: "גאנה" },
  { en: "Haiti", he: "האיטי" }, { en: "Iran", he: "איראן" }, { en: "Iraq", he: "עיראק" },
  { en: "Italy", he: "איטליה" }, { en: "Ivory Coast", he: "חוף השנהב" }, { en: "Japan", he: "יפן" },
  { en: "Jordan", he: "ירדן" }, { en: "Mexico", he: "מקסיקו" }, { en: "Morocco", he: "מרוקו" },
  { en: "Netherlands", he: "הולנד" }, { en: "New Zealand", he: "ניו זילנד" }, { en: "Norway", he: "נורווגיה" },
  { en: "Panama", he: "פנמה" }, { en: "Paraguay", he: "פרגוואי" }, { en: "Portugal", he: "פורטוגל" },
  { en: "Qatar", he: "קטאר" }, { en: "Saudi Arabia", he: "ערב הסעודית" }, { en: "Scotland", he: "סקוטלנד" },
  { en: "Senegal", he: "סנגל" }, { en: "South Africa", he: "דרום אפריקה" }, { en: "South Korea", he: "דרום קוריאה" },
  { en: "Spain", he: "ספרד" }, { en: "Sweden", he: "שוודיה" }, { en: "Switzerland", he: "שווייץ" },
  { en: "Tunisia", he: "תוניסיה" }, { en: "Turkey", he: "טורקיה" }, { en: "United States", he: "ארצות הברית" },
  { en: "Uruguay", he: "אורוגוואי" }, { en: "Uzbekistan", he: "אוזבקיסטן" }, { en: "Other", he: "אחר" }
];

function t(key return translations[currentLang][key] || translations.en[key] || key; }

function populateCountrySelect() {
  const select = document.getElementById('country');
  if (!select) return;
  const currentValue = select.value;
  select.innerHTML = '';
  const empty = document.createElement('option');
  empty.value = ''; empty.textContent = '—';
  select.appendChild(empty);
  COUNTRIES.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.en;
    opt.textContent = currentLang === 'he' ? c.he : c.en;
.appendChild(opt);
  });
  if (currentValue) select.value = currentValue;
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'he' ? 'rtl' : 'ltr';
  document.getElementById('appTitle').textContent = t('appTitle');
  document.getElementById('langBtn').textContent = t('langBtn');
  document.getElementById('tabCollection').textContent = t('tabCollection');
  document.getElementById('tabAdd').textContent = t('tabAdd');
  document.getElementById('searchCollection').placeholder = t('searchCollection');
  document.getElementById('labelCards').textContent = t('labelCards');
  document.getElementById('labelUnique').textContent = t('labelUnique');
  document.getElementById('emptyText').innerHTML = t('emptyText');
  document.getElementById('cameraHint').textContent = t('cameraHint');
  document.getElementById('cameraBtn').textContent = t('cameraBtn');
  document.getElementById('labelName').textContent = t('labelName');
  document.getElementById('labelCardId').textContent = t('labelCardId');
  document.getElementById('labelCountry').textContent = t('labelCountry');
  const labelSection = document.getElementById('labelSection');
  if (labelSection) labelSection.textContent = t('labelSection');
  document.getElementById('labelDefence').textContent = t('labelDefence');
  document.getElementById('labelMidfield').textContent = t('labelMidfield');
  document.getElementById('labelAttack').textContent = t('labelAttack');
  document.getElementById('labelTotal').textContent = t('labelTotal');
  document.getElementById('submitBtn').textContent = t('submitBtn');
  populateCountrySelect();
  populateSectionSelect();
  renderSectionFilter();
  populateCountryFilter();
  updateViewToggleLabel();
  renderCollection(document.getElementById('searchCollection').value);
  if (document.getElementById('installBanner').classList.contains('show')) updateInstallBannerText();
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'he' : 'en';
  localStorage.setItem('fifa365_lang', currentLang);
  applyLanguage();
}

const STORAGE_KEY = 'fifa365_collection_v2';
const SECTIONS_KEY = 'fifa365_sections_v1';
const VIEW_KEY = 'fifa365_view_mode';
let collection = [];
let sections = ['General'];
let currentPhoto = null;
let activeSectionFilter = 'all';
let activeCountryFilter = 'all';
let viewMode = localStorage.getItem(VIEW_KEY) || 'grid';

function loadData() {
  try { collection = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch (e) { collection = []; }
  try {
    sections = JSON.parse(localStorage.getItem(SECTIONS_KEY) || '["General"]');
    if (!sections.includes('General')) sections.unshift('General');
  } catch (e) { sections = ['General']; }
}
function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(collection));
  localStorage.setItem(SECTIONS_KEY, JSON.stringify(sections));
  updateHeaderCount();
}
function getSectionLabel(key) { return key === 'General' ? t('generalSection') : key; }
function populateSectionSelect() {
  const select = document.getElementById('section');
  if (!select) return;
  const current = select.value;
  select.innerHTML = '';
  sections.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s; opt.textContent = getSectionLabel(s);
    select.appendChild(opt);
  });
  select.value = current && sections.includes(current) ? current : 'General';
}
function renderSectionFilter() {
  const el = document.getElementById('sectionFilter');
  if (!el) return;
  const chips = [{ key: 'all', label: t('filterAll') }, ...sections.map(s => ({ key: s, label: getSectionLabel(s) }))];
  el.innerHTML = chips.map(c =>
    `<button type="button" class="section-chip ${activeSectionFilter === c.key ? 'active' : ''}" onclick="setSectionFilter('${c.key}')">${c.label}</button>`
  ).join('');
  const secLabel = document.getElementById('filterSectionLabel');
  if (secLabel) secLabel.textContent = t('filterSection');
  const ctryLabel = document.getElementById('filterCountryLabel');
  if (ctryLabel) ctryLabel.textContent = t('filterCountry');
}
function populateCountryFilter() {
  const select = document.getElementById('countryFilter');
  if (!select) return;
  const used = new Set();
  collection.forEach(c => {
    const key = (c.country && c.country.en) || (typeof c.country === 'string' ? c.country : '');
    if (key) used.add(key);
  });
  const prev = select.value || activeCountryFilter;
  select.innerHTML = `<option value="all">${t('filterAll')}</option>`;
  Array.from(used).sort().forEach(key => {
    const opt = document.createElement('option');
    opt.value = key; opt.textContent = getCountryLabel(key);
    select.appendChild(opt);
  });
  select.value = prev && (prev === 'all' || used.has(prev)) ? prev : 'all';
  activeCountryFilter = select.value;
}
function setSectionFilter(key) {
  activeSectionFilter = key;
  renderSectionFilter();
  renderCollection(document.getElementById('searchCollection').value);
}
function setCountryFilter(key) {
  activeCountryFilter = key || 'all';
  renderCollection(document.getElementById('searchCollection').value);
}
function promptAddSection() {
  const name = prompt(t('sectionPrompt'));
  if (!name) return;
  const trimmed = name.trim();
  if (!trimmed) return;
  if (sections.includes(trimmed)) {
    activeSectionFilter = trimmed;
    renderSectionFilter();
    renderCollection(document.getElementById('searchCollection').value);
    return;
  }
  sections.push(trimmed);
  saveData();
  populateSectionSelect();
  activeSectionFilter = trimmed;
  renderSectionFilter();
  renderCollection(document.getElementById('searchCollection').value);
  showToast(t('toastSectionAdded'));
}
function toggleViewMode() {
  viewMode = viewMode === 'grid' ? 'list' : 'grid';
  localStorage.setItem(VIEW_KEY, viewMode);
  updateViewToggleLabel();
  renderCollection(document.getElementById('searchCollection').value);
}
function updateViewToggleLabel() {
  const btn = document.getElementById('viewToggleBtn');
  if (btn) btn.textContent = viewMode === 'grid' ? t('listView') : t('gridView');
  const addBtn = document.getElementById('addSectionBtn');
  if (addBtn) addBtn.textContent = t('addSection');
}
function showToast(msg, isError = false) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.className = 'toast' + (isError ? ' error' : '');
  void el.offsetWidth;
  el.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}
function updateHeaderCount() {
  document.getElementById('collectionCount').textContent = collection.reduce((s, c) => s + (c.quantity || 1), 0);
}
function getLocalized(obj) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[currentLang] || obj.en || obj.he || '';
}
function getCountryLabel(keyOrObj) {
  if (!keyOrObj) return '';
  const key = typeof keyOrObj === 'string' ? keyOrObj : (keyOrObj.en || keyOrObj.he || '');
  const found = COUNTRIES.find(c => c.en === key || c.he === key);
  if (found) return currentLang === 'he' ? found.he : found.en;
  return getLocalized(keyOrObj) || key;
}
function renderCollection(filter = '') {
  const grid = document.getElementById('collectionGrid');
  const empty = document.getElementById('collectionEmpty');
  const q = filter.toLowerCase().trim();
  let items = [...collection];
  if (activeSectionFilter !== 'all') items = items.filter(c => (c.section || 'General') === activeSectionFilter);
  if (activeCountryFilter !== 'all') {
    items = items.filter(c => {
      const key = (c.country && c.country.en) || (typeof c.country === 'string' ? c.country : '');
      return key === activeCountryFilter;
    });
  }
  if (q) {
    items = items.filter(c => {
      const name = getLocalized(c.name).toLowerCase();
      const country = getCountryLabel(c.country).toLowerCase();
      const id = (c.cardId || '').toLowerCase();
      const sec = getSectionLabel(c.section || 'General').toLowerCase();
      return name.includes(q) || country.includes(q) || id.includes(q) || sec.includes(q);
    });
  }
  document.getElementById('statTotal').textContent = collection.reduce((s, c) => s + (c.quantity || 1), 0);
  document.getElementById('statUnique').textContent = collection.length;
  grid.classList.toggle('list-view', viewMode === 'list');
  if (items.length === 0) { grid.innerHTML = ''; empty.style.display = 'block'; return; }
  empty.style.display = 'none';
  grid.innerHTML = items.map(c => {
    const name = getLocalized(c.name) || '—';
    const country = getCountryLabel(c.country) || '';
    const sec = getSectionLabel(c.section || 'General');
    return `<div class="card-item" onclick="openDetail('${c.id}')">
      <div class="card-thumb"><span class="number">#${c.cardId || '?'}</span>
      ${c.photo ? `<img src="${c.photo}" alt="${name}" />` : `<div class="player-initial">${name.charAt(0)}</div>`}
      ${(c.quantity || 1) > 1 ? `<span class="qty-badge">${c.quantity}</span>` : ''}</div>
      <div class="card-info"><div class="name">${name}</div><div class="meta">${sec} · ${country} · ${c.total || '—'}</div></div></div>`;
  }).join('');
}
function openDetail(id) {
  const card = collection.find(c => c.id === id);
  if (!card) return;
  const name = getLocalized(card.name) || '—';
  const country = getCountryLabel(card.country) || '—';
  const currentSection = card.section || 'General';
  const sectionOptions = sections.map(s =>
    `<option value="${s}" ${s === currentSection ? 'selected' : ''}>${getSectionLabel(s)}</option>`
  ).join('');
  document.getElementById('modalTitle').textContent = name;
  document.getElementById('modalBody').innerHTML = `
    <div class="detail-hero">
      <span class="big-number">#${card.cardId || '?'}</span>
      ${card.photo ? `<img src="${card.photo}" alt="${name}" />` : ''}
      <div class="big-name">${name}</div><div class="big-country">${country}</div>
    </div>
    <div class="stats-row">
      <div class="stat-box defence"><div class="label">${t('defence')}</div><div class="value">${card.defence ?? '—'}</div></div>
      <div class="stat-box midfield"><div class="label">${t('midfield')}</div><div class="value">${card.midfield ?? '—'}</div></div>
      <div class="stat-box attack"><div class="label">${t('attack')}</div><div class="value">${card.attack ?? '—'}</div></div>
      <div class="stat-box total"><div class="label">${t('total')}</div><div class="value">${card.total ?? '—'}</div></div>
    </div>
    <div class="info-list">
      <div class="info-row"><span>${t('cardId')}</span><span>${card.cardId || '—'}</span></div>
      <div class="info-row"><span>${t('country')}</span><span>${country}</span></div>
      <div class="info-row"><span>${t('owned')}</span><span>${card.quantity || 1}×</span></div>
    </div>
    <div class="form-group" style="margin-bottom:16px;">
      <label>${t('section')}</label>
      <select id="detailSectionSelect" class="filter-select" style="width:100%;">${sectionOptions}</select>
    </div>
    <div class="btn-row" style="margin-bottom:12px;">
      <button class="btn btn-primary" onclick="changeCardSection('${id}')">${t('moveSection')}</button>
    </div>
    <div class="btn-row">
      <button class="btn btn-danger" onclick="removeOne('${id}')">${t('removeOne')}</button>
      <button class="btn btn-secondary" onclick="addDuplicate('${id}')">${t('addDuplicate')}</button>
    </div>`;
  document.getElementById('detailModal').classList.add('open');
}
function changeCardSection(id) {
  const card = collection.find(c => c.id === id);
  if (!card) return;
  const select = document.getElementById('detailSectionSelect');
  if (!select) return;
  card.section = select.value || 'General';
  saveData();
  renderSectionFilter();
  populateCountryFilter();
  renderCollection(document.getElementById('searchCollection').value);
  closeModal();
  showToast(t('toastSectionMoved'));
}
function closeModal() { document.getElementById('detailModal').classList.remove('open'); }
function addDuplicate(id) {
  const card = collection.find(c => c.id === id);
  if (!card) return;
  card.quantity = (card.quantity || 1) + 1;
  saveData();
  renderCollection(document.getElementById('searchCollection').value);
  closeModal();
  showToast(t('toastAdded'));
}
function removeOne(id) {
  const idx = collection.findIndex(c => c.id === id);
  if (idx === -1) return;
  if ((collection[idx].quantity || 1) > 1) collection[idx].quantity -= 1;
  else collection.splice(idx, 1);
  saveData();
  renderCollection(document.getElementById('searchCollection').value);
  closeModal();
  showToast(t('toastRemoved'));
}
document.getElementById('cameraInput').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    currentPhoto = ev.target.result;
    const img = document.getElementById('cameraPreview');
    img.src = currentPhoto;
    img.classList.add('visible');
  };
  reader.readAsDataURL(file);
});
document.getElementById('addForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nameVal = document.getElementById('name').value.trim();
  const cardIdVal = document.getElementById('cardId').value.trim();
  if (!nameVal || !cardIdVal) { showToast(t('toastRequired'), true); return; }
  const defence = parseInt(document.getElementById('defence').value) || null;
  const midfield = parseInt(document.getElementById('midfield').value) || null;
  const attack = parseInt(document.getElementById('attack').value) || null;
  let total = parseInt(document.getElementById('total').value) || null;
  if (!total && defence != null && midfield != null && attack != null) total = defence + midfield + attack;
  const countryVal = document.getElementById('country').value.trim();
  const sectionVal = (document.getElementById('section') && document.getElementById('section').value) || 'General';
  const nameObj = { en: '', he: '' }; nameObj[currentLang] = nameVal;
  const countryObj = { en: countryVal || '', he: '' };
  const existing = collection.find(c => c.cardId === cardIdVal);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
    if (!existing.name[currentLang]) existing.name[currentLang] = nameVal;
    if (countryVal && !existing.country.en) existing.country.en = countryVal;
    if (!existing.section) existing.section = sectionVal;
    if (currentPhoto && !existing.photo) existing.photo = currentPhoto;
  } else {
    collection.push({
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      cardId: cardIdVal, name: nameObj, country: countryObj, section: sectionVal,
      defence, midfield, attack, total, photo: currentPhoto, quantity: 1,
      addedAt: new Date().toISOString()
    });
  }
  saveData();
  populateCountryFilter();
  renderSectionFilter();
  renderCollection();
  this.reset();
  currentPhoto = null;
  document.getElementById('cameraPreview').classList.remove('visible');
  document.getElementById('cameraPreview').src = '';
  populateSectionSelect();
  populateCountrySelect();
  switchView('collection');
  showToast(t('toastAdded'));
});
function switchView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  document.querySelector(`.tab[data-view="${viewId}"]`).classList.add('active');
  if (viewId === 'collection') renderCollection(document.getElementById('searchCollection').value);
}
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => switchView(tab.dataset.view));
});
document.getElementById('searchCollection').addEventListener('input', e => renderCollection(e.target.value));
document.getElementById('detailModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// PWA install
let deferredInstallPrompt = null;
const INSTALL_DISMISS_KEY = 'fifa365_install_dismissed';
function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}
function isIos() { return /iphone|ipad|ipod/i.test(navigator.userAgent); }
function updateInstallBannerText() {
  document.getElementById('installBannerText').innerHTML =
    `<strong>${t('installTitle')}</strong><br>${t('installBody')}`;
  document.getElementById('installDismissBtn').textContent = t('installDismiss');
  document.getElementById('installAcceptBtn').textContent = t('installAccept');
  const iosEl = document.getElementById('installIosSteps');
  if (isIos()) {
    iosEl.style.display = 'block';
    iosEl.textContent = t('installIosSteps');
    document.getElementById('installAcceptBtn').style.display = 'none';
  } else {
    iosEl.style.display = 'none';
    document.getElementById('installAcceptBtn').style.display = '';
  }
}
function showInstallBanner() {
  if (isStandalone()) return;
  if (localStorage.getItem(INSTALL_DISMISS_KEY) === '1') return;
  updateInstallBannerText();
  document.getElementById('installBanner').classList.add('show');
}
function dismissInstallBanner() {
  document.getElementById('installBanner').classList.remove('show');
  localStorage.setItem(INSTALL_DISMISS_KEY, '1');
}
async function acceptInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    dismissInstallBanner();
  } else if (isIos()) {
    updateInstallBannerText();
    document.getElementById('installBanner').classList.add('show');
  }
}
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  setTimeout(showInstallBanner, 1500);
});
window.addEventListener('appinstalled', () => {
  document.getElementById('installBanner').classList.remove('show');
  localStorage.setItem(INSTALL_DISMISS_KEY, '1');
});
if (isIos() && !isStandalone()) setTimeout(showInstallBanner, 2000);
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

loadData();
updateHeaderCount();
applyLanguage();
