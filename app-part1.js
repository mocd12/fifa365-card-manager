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
    installIosSteps: "1. Tap the Share button ↓\n2. Choose Add to Home Screen\n3. Tap Add"
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
    installIosSteps: "1. לחץ על כפתור השיתוף ↓\n2. בחר הוסף למסך הבית\n3. לחץ הוסף"
  }
};

let currentLang = localStorage.getItem('fifa365_lang') || 'en';

const COUNTRIES = [
  { en: 'Algeria', he: 'אלג\'יריה' }, { en: 'Argentina', he: 'ארגנטינה' }, { en: 'Australia', he: 'אוסטרליה' },
  { en: 'Austria', he: 'אוסטריה' }, { en: 'Belgium', he: 'בלגיה' }, { en: 'Bosnia and Herzegovina', he: 'בוסניה והרצגובינה' },
  { en: 'Brazil', he: 'ברזיל' }, { en: 'Canada', he: 'קנדה' }, { en: 'Cape Verde', he: 'כף ורדה' },
  { en: 'Colombia', he: 'קולומביה' }, { en: 'Croatia', he: 'קרואטיה' }, { en: 'Curaçao', he: 'קוראסאו' },
  { en: 'Czech Republic', he: 'צ\'כיה' }, { en: 'DR Congo', he: 'הרפובליקה הדמוקרטית של קונגו' },
  { en: 'Ecuador', he: 'אקוודור' }, { en: 'Egypt', he: 'מצרים' }, { en: 'England', he: 'אנגליה' },
  { en: 'France', he: 'צרפת' }, { en: 'Germany', he: 'גרמניה' }, { en: 'Ghana', he: 'גאנה' },
  { en: 'Haiti', he: 'האיטי' }, { en: 'Iran', he: 'איראן' }, { en: 'Iraq', he: 'עיראק' },
  { en: 'Italy', he: 'איטליה' }, { en: 'Ivory Coast', he: 'חוף השנהב' }, { en: 'Japan', he: 'יפן' },
  { en: 'Jordan', he: 'ירדן' }, { en: 'Mexico', he: 'מקסיקו' }, { en: 'Morocco', he: 'מרוקו' },
  { en: 'Netherlands', he: 'הולנד' }, { en: 'New Zealand', he: 'ניו זילנד' }, { en: 'Norway', he: 'נורווגיה' },
  { en: 'Panama', he: 'פנמה' }, { en: 'Paraguay', he: 'פרגוואי' }, { en: 'Portugal', he: 'פורטוגל' },
  { en: 'Qatar', he: 'קטאר' }, { en: 'Saudi Arabia', he: 'ערב הסעודית' }, { en: 'Scotland', he: 'סקוטלנד' },
  { en: 'Senegal', he: 'סנגל' }, { en: 'South Africa', he: 'דרום אפריקה' }, { en: 'South Korea', he: 'דרום קוריאה' },
  { en: 'Spain', he: 'ספרד' }, { en: 'Sweden', he: 'שוודיה' }, { en: 'Switzerland', he: 'שווייץ' },
  { en: 'Tunisia', he: 'תוניסיה' }, { en: 'Turkey', he: 'טורקיה' }, { en: 'United States', he: 'ארצות הברית' },
  { en: 'Uruguay', he: 'אורוגוואי' }, { en: 'Uzbekistan', he: 'אוזבקיסטן' }, { en: 'Other', he: 'אחר' }
];

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
}

function populateCountrySelect() {
  const select = document.getElementById('country');
  if (!select) return;
  const currentValue = select.value;
  select.innerHTML = '';
  const empty = document.createElement('option');
  empty.value = '';
  empty.textContent = '—';
  select.appendChild(empty);
  COUNTRIES.forEach(function(c) {
    const opt = document.createElement('option');
    opt.value = c.en;
    opt.textContent = currentLang === 'he' ? c.he : c.en;
    select.appendChild(opt);
  });
  if (currentValue) select.value = currentValue;
}
