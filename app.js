/* Trail Resupply – mobiler Resupply-Planer */
'use strict';

const T = {
  en: {
    trail: 'Trail', start: 'Start / current stop', buffer: 'Buffer (days)', pace: u => `Daily distance (${u})`,
    nextStops: 'Next stops', myRoute: 'My route', clear: 'clear', tabPlan: 'Plan', tabStrat: 'Typical', tabInfo: 'Info',
    onTrail: 'right on trail', walk: d => `${d} walk`, hitch: d => `${d} hitch`, shuttle: d => `${d} shuttle/bus`, boat: d => `boat/ferry, ${d}`,
    gro: ['no store', 'small store / gas station', 'market / general store', 'supermarket'],
    po: 'post office', eat: 'food', bed: 'lodging', camp: 'camping', out: 'outfitter', wash: 'shower/laundry',
    use: p => `${p} % of hikers stop here`, box: p => `📦 ${p} % send a box`, boxRec: '📦 box recommended', est: 'estimated',
    days: 'd', walkDays: 'hiking days', foodDays: 'days of food', dist: 'distance',
    setDest: 'Set as destination', goOn: 'Continue from here', destSet: 'Destination set', legAdded: 'Leg added to route',
    total: (d, km, days) => `${d} legs · ${km} · ≈ ${days} hiking days`,
    common: 'popular', planFood: 'Plan food for this leg →',
    routeHeavy: (n, m) => `${n} leg(s) need more than ${m} days of food.`, routeFix: 'Replace with typical plan (max. 6 days)',
    noStop: 'There is no store in between, carry more or send a box.',
    fromWord: n => `from ${n}`, fillStop: 'extra stop: over 6 days of food otherwise', heavy: '> 6 days food',
    tooMuch: m => `More than ${m} days of food is a heavy carry. Most hikers resupply in between.`,
    kick: 'Resupply planner', dayWord: 'days', store: 'Store', access: 'Getting there', stopHere: 'Hikers stopping here', boxLbl: 'Send a box',
    subLeg: (a, b, d, f) => `From ${a} to ${b} · ${d} · ${f} days of food`, subStart: a => `Starting at ${a}`,
    stratTitle: 'How most hikers do it', stratNone: 'No survey data for this trail yet. All known stops are listed.',
    stratTake: 'Use this as my route', stratTaken: 'Typical plan copied to your route',
    stratStats: ['mailed a few boxes (1⁠–⁠10 %)', 'mailed some (10⁠–⁠50 %)', 'mailed most', 'mailed none / all'],
    stratAvg: ['avg. daily distance', 'avg. resupplies'],
    stratFoot: 'Survey: Halfway Anywhere PCT Hiker Survey 2025 (resupply strategy, stop usage), 2024 (daily miles, resupplies).',
    seg: (d, days) => `+${d} · ${days} d`,
    noNext: 'No further stops in this direction.',
    infoHtml: `<h2>What this is</h2><p>A quick resupply planner for long trails. Choose trail, direction and where you are, set your daily distance, and see what's next: how far, how many days, what each town has and how most hikers handle it.</p>
<h2>Legend</h2><div class="legend"><span>🛒</span><span>supermarket</span><span>🏪</span><span>market / general store</span><span>⛽</span><span>small store / gas station</span><span>📮</span><span>post office</span><span>🍔</span><span>restaurant / food</span><span>🛏</span><span>motel, hotel, lodge, hostel</span><span>⛺</span><span>camping</span><span>🎒</span><span>outfitter</span><span>🚿</span><span>shower / laundry</span><span>📦</span><span>sending a box is common or recommended</span></div>
<h2>Data</h2><p><b>PCT</b>: stop usage and box percentages from the Halfway Anywhere PCT Hiker Survey 2025, miles and notes partly from The Trek's 2026 PCT resupply strategy, services from my own research. <b>Other trails</b>: services estimated from store size (marked "estimated"), no usage data.</p>
<p>No guarantee. Businesses, hours and road access change every season. Always double-check in FarOut.</p>
<h2>Food</h2><p>For what to buy, see the companion <a href="https://dacat84.github.io/trail-food/">Trail Food Planner</a> (based on GearSkeptic's Hiker Food sheet).</p>`,
  },
  de: {
    trail: 'Trail', start: 'Start / aktueller Stop', buffer: 'Reserve (Tage)', pace: u => `Tagesdistanz (${u})`,
    nextStops: 'Nächste Stops', myRoute: 'Meine Route', clear: 'löschen', tabPlan: 'Planen', tabStrat: 'Üblich', tabInfo: 'Info',
    onTrail: 'direkt am Trail', walk: d => `${d} zu Fuß`, hitch: d => `${d} trampen`, shuttle: d => `${d} Shuttle/Bus`, boat: d => `Boot/Fähre, ${d}`,
    gro: ['kein Laden', 'kleiner Laden / Tankstelle', 'Markt / General Store', 'Supermarkt'],
    po: 'Post', eat: 'Essen', bed: 'Unterkunft', camp: 'Camping', out: 'Outfitter', wash: 'Dusche/Wäsche',
    use: p => `${p} % der Hiker halten hier`, box: p => `📦 ${p} % schicken eine Box`, boxRec: '📦 Box empfohlen', est: 'geschätzt',
    days: 'T', walkDays: 'Lauftage', foodDays: 'Tage Essen', dist: 'Distanz',
    setDest: 'Als Ziel', goOn: 'Ab hier weiter', destSet: 'Ziel gesetzt', legAdded: 'Etappe zur Route hinzugefügt',
    total: (d, km, days) => `${d} Etappen · ${km} · ≈ ${days} Lauftage`,
    common: 'beliebt', planFood: 'Essen für diese Etappe planen →',
    routeHeavy: (n, m) => `${n} Etappe(n) brauchen mehr als ${m} Tage Essen.`, routeFix: 'Durch üblichen Plan ersetzen (max. 6 Tage)',
    noStop: 'Dazwischen gibt es keine Einkaufsmöglichkeit, also mehr tragen oder eine Box schicken.',
    fromWord: n => `ab ${n}`, fillStop: 'Zwischenstopp: sonst über 6 Tage Essen', heavy: '> 6 Tage Essen',
    tooMuch: m => `Mehr als ${m} Tage Essen wird schwer. Die meisten resupplien dazwischen.`,
    kick: 'Resupply-Planer', dayWord: 'Tage', store: 'Laden', access: 'Weg in den Ort', stopHere: 'Hiker halten hier', boxLbl: 'Box schicken',
    subLeg: (a, b, d, f) => `Von ${a} nach ${b} · ${d} · ${f} Tage Essen`, subStart: a => `Start in ${a}`,
    stratTitle: 'So machen es die meisten', stratNone: 'Für diesen Trail gibt es noch keine Umfragedaten. Alle bekannten Stops sind aufgelistet.',
    stratTake: 'Als meine Route übernehmen', stratTaken: 'Typischer Plan in deine Route übernommen',
    stratStats: ['ein paar Boxen geschickt (1⁠–⁠10 %)', 'einige geschickt (10⁠–⁠50 %)', 'die meisten geschickt', 'keine / alle geschickt'],
    stratAvg: ['Ø Tagesdistanz', 'Ø Resupplys'],
    stratFoot: 'Umfrage: Halfway Anywhere PCT Hiker Survey 2025 (Resupply-Strategie, Nutzung der Stops), 2024 (Tagesmeilen, Resupplys).',
    seg: (d, days) => `+${d} · ${days} T`,
    noNext: 'In dieser Richtung kommen keine weiteren Stops.',
    infoHtml: `<h2>Worum es geht</h2><p>Ein schneller Resupply-Planer für Langstrecken-Trails. Trail, Richtung und deinen Standort wählen, Tagesdistanz einstellen, und du siehst, was als Nächstes kommt: wie weit, wie viele Tage, was es im Ort gibt und wie es die meisten machen.</p>
<h2>Legende</h2><div class="legend"><span>🛒</span><span>Supermarkt</span><span>🏪</span><span>Markt / General Store</span><span>⛽</span><span>kleiner Laden / Tankstelle</span><span>📮</span><span>Post</span><span>🍔</span><span>Restaurant / Essen</span><span>🛏</span><span>Motel, Hotel, Lodge, Hostel</span><span>⛺</span><span>Camping</span><span>🎒</span><span>Outfitter</span><span>🚿</span><span>Dusche / Wäsche</span><span>📦</span><span>Box schicken ist üblich oder empfohlen</span></div>
<h2>Daten</h2><p><b>PCT</b>: Nutzung der Stops und Box-Anteile aus der Halfway Anywhere PCT Hiker Survey 2025, Meilen und Notizen teils aus der PCT-Resupply-Strategie 2026 von The Trek, Services aus eigener Recherche. <b>Andere Trails</b>: Services aus der Ladengröße geschätzt (markiert mit „geschätzt“), keine Nutzungsdaten.</p>
<p>Ohne Gewähr. Läden, Öffnungszeiten und Straßen ändern sich jede Saison. Immer in FarOut gegenchecken.</p>
<h2>Essen</h2><p>Was du einkaufst, planst du mit dem <a href="https://dacat84.github.io/trail-food/">Trail Food Planer</a> (auf Basis von GearSkeptics Hiker-Food-Tabelle).</p>`,
  },
  es: {
    trail: 'Trail', start: 'Inicio / parada actual', buffer: 'Reserva (días)', pace: u => `Distancia diaria (${u})`,
    nextStops: 'Próximas paradas', myRoute: 'Mi ruta', clear: 'borrar', tabPlan: 'Planear', tabStrat: 'Habitual', tabInfo: 'Info',
    onTrail: 'junto al trail', walk: d => `${d} a pie`, hitch: d => `${d} autostop`, shuttle: d => `${d} shuttle/bus`, boat: d => `barco/ferry, ${d}`,
    gro: ['sin tienda', 'tienda pequeña / gasolinera', 'mercado / tienda general', 'supermercado'],
    po: 'correos', eat: 'comida', bed: 'alojamiento', camp: 'camping', out: 'tienda outdoor', wash: 'ducha/lavandería',
    use: p => `${p} % de los hikers paran aquí`, box: p => `📦 ${p} % envían paquete`, boxRec: '📦 paquete recomendado', est: 'estimado',
    days: 'd', walkDays: 'días de marcha', foodDays: 'días de comida', dist: 'distancia',
    setDest: 'Como destino', goOn: 'Seguir desde aquí', destSet: 'Destino fijado', legAdded: 'Etapa añadida a la ruta',
    total: (d, km, days) => `${d} etapas · ${km} · ≈ ${days} días de marcha`,
    common: 'popular', planFood: 'Planear comida para esta etapa →',
    routeHeavy: (n, m) => `${n} etapa(s) necesitan más de ${m} días de comida.`, routeFix: 'Reemplazar por el plan típico (máx. 6 días)',
    noStop: 'No hay tienda en medio: carga más o envía un paquete.',
    fromWord: n => `desde ${n}`, fillStop: 'parada extra: si no, más de 6 días de comida', heavy: '> 6 días comida',
    tooMuch: m => `Más de ${m} días de comida pesa mucho. La mayoría se reabastece antes.`,
    kick: 'Planificador de reabastecimiento', dayWord: 'días', store: 'Tienda', access: 'Cómo llegar', stopHere: 'Hikers que paran', boxLbl: 'Enviar paquete',
    subLeg: (a, b, d, f) => `De ${a} a ${b} · ${d} · ${f} días de comida`, subStart: a => `Inicio en ${a}`,
    stratTitle: 'Cómo lo hace la mayoría', stratNone: 'Aún no hay datos de encuesta para este trail. Se listan todas las paradas conocidas.',
    stratTake: 'Usar como mi ruta', stratTaken: 'Plan típico copiado a tu ruta',
    stratStats: ['enviaron pocos paquetes (1⁠–⁠10 %)', 'enviaron algunos (10⁠–⁠50 %)', 'enviaron la mayoría', 'ninguno / todos'],
    stratAvg: ['distancia diaria media', 'reabastecimientos medios'],
    stratFoot: 'Encuesta: Halfway Anywhere PCT Hiker Survey 2025 (estrategia, uso de paradas), 2024 (millas diarias, reabastecimientos).',
    seg: (d, days) => `+${d} · ${days} d`,
    noNext: 'No hay más paradas en esta dirección.',
  },
  fr: {
    trail: 'Trail', start: 'Départ / étape actuelle', buffer: 'Réserve (jours)', pace: u => `Distance par jour (${u})`,
    nextStops: 'Prochaines étapes', myRoute: 'Mon itinéraire', clear: 'effacer', tabPlan: 'Planifier', tabStrat: 'Habituel', tabInfo: 'Info',
    onTrail: 'sur le trail', walk: d => `${d} à pied`, hitch: d => `${d} en stop`, shuttle: d => `${d} navette/bus`, boat: d => `bateau/ferry, ${d}`,
    gro: ['pas de magasin', 'petit magasin / station', 'épicerie / general store', 'supermarché'],
    po: 'poste', eat: 'restauration', bed: 'hébergement', camp: 'camping', out: 'magasin outdoor', wash: 'douche/laverie',
    use: p => `${p} % des randonneurs s'arrêtent ici`, box: p => `📦 ${p} % envoient un colis`, boxRec: '📦 colis recommandé', est: 'estimé',
    days: 'j', walkDays: 'jours de marche', foodDays: 'jours de nourriture', dist: 'distance',
    setDest: 'Comme destination', goOn: 'Continuer d\'ici', destSet: 'Destination définie', legAdded: 'Étape ajoutée',
    total: (d, km, days) => `${d} étapes · ${km} · ≈ ${days} jours de marche`,
    common: 'populaire', planFood: 'Planifier la nourriture →',
    routeHeavy: (n, m) => `${n} étape(s) demandent plus de ${m} jours de nourriture.`, routeFix: 'Remplacer par le plan type (max. 6 jours)',
    noStop: 'Pas de magasin entre les deux : porte plus ou envoie un colis.',
    fromWord: n => `depuis ${n}`, fillStop: 'arrêt en plus : sinon plus de 6 jours de nourriture', heavy: '> 6 jours',
    tooMuch: m => `Plus de ${m} jours de nourriture, c'est lourd. La plupart se ravitaillent entre-temps.`,
    kick: 'Planificateur de ravitaillement', dayWord: 'jours', store: 'Magasin', access: 'Accès', stopHere: 'Randonneurs qui s\'arrêtent', boxLbl: 'Envoyer un colis',
    subLeg: (a, b, d, f) => `De ${a} à ${b} · ${d} · ${f} jours de nourriture`, subStart: a => `Départ à ${a}`,
    stratTitle: 'Comment font la plupart', stratNone: 'Pas encore de données d\'enquête pour ce trail. Toutes les étapes connues sont listées.',
    stratTake: 'Utiliser comme mon itinéraire', stratTaken: 'Plan type copié dans ton itinéraire',
    stratStats: ['quelques colis (1⁠–⁠10 %)', 'certains (10⁠–⁠50 %)', 'la plupart', 'aucun / tous'],
    stratAvg: ['distance moyenne par jour', 'ravitaillements moyens'],
    stratFoot: 'Enquête : Halfway Anywhere PCT Hiker Survey 2025 (stratégie, usage des étapes), 2024 (miles/jour, ravitaillements).',
    seg: (d, days) => `+${d} · ${days} j`,
    noNext: 'Plus d\'étapes dans cette direction.',
  },
};
T.es = Object.assign({}, T.en, T.es);
T.fr = Object.assign({}, T.en, T.fr);

const KM = 1.609344;
const LS = 'trailresupply-v1';
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const browserLang = () => { for (const l of (navigator.languages || [navigator.language || 'en'])) { const k = String(l).slice(0, 2).toLowerCase(); if (T[k]) return k; } return 'en'; };
const S = Object.assign({ lang: browserLang(), units: 'metric', trail: 'PCT', dir: 'fwd', start: null, dest: null, pace: 20, buf: 0.5, route: [], open: null }, load());
function load() { try { return JSON.parse(localStorage.getItem(LS)) || {}; } catch (e) { return {}; } }
function save() { try { localStorage.setItem(LS, JSON.stringify(S)); } catch (e) { /* egal */ } }
const L = () => T[S.lang] || T.en;
const t = k => L()[k] ?? T.en[k] ?? k;
const IMP = () => S.units === 'imperial';
const CUT = '<svg class="cut" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><defs><mask id="cutm" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><g transform="rotate(45 12 12)" fill="#000" stroke="#000" stroke-width="2.8" stroke-linejoin="round"><path d="M10.6 1Q16.4 4 13.6 13.2H10.4Z"/><rect x="10.4" y="12.4" width="3.2" height="10.4" rx="1.6"/></g></mask></defs><g mask="url(#cutm)"><g transform="rotate(-45 12 12)"><rect x="8.9" y="0.4" width="1.4" height="4.6" rx=".7"/><rect x="11.3" y="0.4" width="1.4" height="4.6" rx=".7"/><rect x="13.7" y="0.4" width="1.4" height="4.6" rx=".7"/><path d="M8.9 4.4H15.1V5.4Q15.1 7.6 13.4 8.1V9H10.6V8.1Q8.9 7.6 8.9 5.4Z"/><rect x="10.6" y="8" width="2.8" height="14.8" rx="1.4"/></g></g><g transform="rotate(45 12 12)"><path d="M10.6 1Q16.4 4 13.6 13.2H10.4Z"/><rect x="10.4" y="12.4" width="3.2" height="10.4" rx="1.6"/></g></svg>';
const fmt = (x, d = 0) => (x == null || !isFinite(x)) ? '–' : x.toLocaleString({ de: 'de-DE', es: 'es-ES', fr: 'fr-FR' }[S.lang] || 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const dist = mi => IMP() ? `${fmt(mi, mi < 10 ? 1 : 0)} mi` : `${fmt(mi * KM, mi * KM < 10 ? 1 : 0)} km`;
function toast(m) { const e = $('#toast'); e.textContent = m; e.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove('show'), 1700); }

let D = null;
fetch('data/resupply.json').then(r => r.json()).then(d => { D = d; D.stops.forEach((s, i) => s.i = i); init(); render(); })
  .catch(e => { $('main').innerHTML = `<p class="empty">Could not load data (${esc(e.message)})</p>`; });

// ---------- Logik ----------
const trailMeta = () => D.trails.find(x => x.id === S.trail) || D.trails[0];
function trailStops() {
  const rev = S.dir === 'rev';
  return D.stops.filter(s => s.trail === S.trail).sort((a, b) => rev ? b.mile - a.mile : a.mile - b.mile);
}
function startStop() {
  const list = trailStops();
  let s = S.start != null ? D.stops[S.start] : null;
  if (!s || s.trail !== S.trail) { s = list[0]; S.start = s.i; }
  return s;
}
function nextStops() {
  const s = startStop(), rev = S.dir === 'rev';
  return trailStops().filter(x => rev ? x.mile < s.mile : x.mile > s.mile);
}
const miBetween = (a, b) => Math.abs(b.mile - a.mile);
const walkDays = mi => mi / S.pace;
const foodDays = mi => Math.max(1, Math.ceil(walkDays(mi) + +S.buf - 1e-9));
const MAXFOOD = 6; // mehr als 6 Tage Essen trägt kaum jemand
const note = s => (S.lang === 'de' ? s.de : s.en) || s.en || s.de || '';
const name = s => s.name;

function accText(s) {
  if (!s.acc) return s.off ? `${dist(s.off)} ${S.lang === 'de' ? 'vom Trail' : 'off trail'}` : '';
  if (s.acc === 'trail') return '🥾 ' + t('onTrail');
  const d = s.off ? dist(s.off) : '';
  return { walk: '🚶 ', hitch: '👍 ', shuttle: '🚌 ', boat: '⛴ ' }[s.acc] + L()[s.acc](d);
}
const GRO_ICON = ['🚫', '⛽', '🏪', '🛒'];
function svcIcons(s) {
  const v = s.s, out = [GRO_ICON[v.gro] || ''];
  for (const [k, ic] of [['po', '📮'], ['eat', '🍔'], ['bed', '🛏'], ['camp', '⛺'], ['out', '🎒'], ['wash', '🚿']]) if (v[k]) out.push(ic);
  if (s.boxRec || s.box) out.push('📦');
  return out.join(' ');
}
function svcChips(s) {
  const v = s.s;
  let h = `<span class="chip">${GRO_ICON[v.gro]} ${esc(t('gro')[v.gro])}</span>`;
  for (const [k, ic] of [['po', '📮'], ['eat', '🍔'], ['bed', '🛏'], ['camp', '⛺'], ['out', '🎒'], ['wash', '🚿']]) {
    if (v[k] == null) continue;
    h += `<span class="chip ${v[k] ? '' : 'off'}">${ic} ${esc(t(k))}</span>`;
  }
  if (s.box) h += `<span class="chip box">${esc(L().box(fmt(s.box)))}</span>`;
  else if (s.boxRec) h += `<span class="chip box">${esc(t('boxRec'))}</span>`;
  if (s.est) h += `<span class="chip est">≈ ${esc(t('est'))}</span>`;
  return `<div class="svc">${h}</div>`;
}
function useBar(s) {
  if (s.use == null) return '';
  return `<div class="usebar"><i><b style="width:${Math.min(100, s.use)}%"></b></i>${esc(L().use(fmt(s.use)))}</div>`;
}
function detail(s) {
  return `${svcChips(s)}<div class="acc">${esc(accText(s))}</div>${note(s) ? `<p class="note">${esc(note(s))}</p>` : ''}${useBar(s)}`;
}

// ---------- Rendern ----------
function render() {
  $$('[data-i18n]').forEach(e => { e.textContent = t(e.dataset.i18n); });
  document.documentElement.lang = S.lang;
  const pair = (a, b, on) => on === a ? `<b>${a.toUpperCase()}</b>\u00a0·\u00a0<span>${b.toUpperCase()}</span>` : `<span>${a.toUpperCase()}</span>\u00a0·\u00a0<b>${b.toUpperCase()}</b>`;
  $('#t-lang').innerHTML = pair('de', 'en', S.lang === 'de' ? 'de' : 'en');
  $('#t-units').innerHTML = pair('km', 'mi', IMP() ? 'mi' : 'km');
  const tm = trailMeta();
  $('#s-trail').innerHTML = D.trails.map(x => `<option value="${x.id}">${esc(x.name)} · ${x.approx ? '~' : ''}${dist(x.len)}</option>`).join('');
  $('#s-trail').value = S.trail;
  const [bf, br] = $$('#s-dir button');
  bf.textContent = tm.fwd; br.textContent = tm.rev;
  bf.classList.toggle('on', S.dir === 'fwd'); br.classList.toggle('on', S.dir === 'rev');
  const st = startStop();
  $('#s-start').innerHTML = trailStops().map(s => `<option value="${s.i}">${fmt(s.mile, s.mile % 1 ? 1 : 0)} · ${esc(s.name)}</option>`).join('');
  $('#s-start').value = st.i;
  $('#start-info').innerHTML = detail(st);
  $('#l-pace').textContent = L().pace(IMP() ? 'mi' : 'km');
  $('#s-pace').value = IMP() ? Math.round(S.pace) : Math.round(S.pace * KM);
  $$('#s-buf button').forEach(b => b.classList.toggle('on', +b.dataset.v === +S.buf));
  if (S.routeAuto) { const p = typicalPlan(); if (p.length) S.route = planLegs(p); }
  renderNext(); renderLeg(); renderRoute(); renderStrat(); renderHead();
  $('#info').innerHTML = t('infoHtml');
  save();
}
function renderNext() {
  const st = startStop(), list = nextStops();
  if (!list.length) { $('#next').innerHTML = `<p class="empty">${esc(t('noNext'))}</p>`; return; }
  const maxDays = 12;
  let html = '';
  for (const s of list) {
    const mi = miBetween(st, s), wd = walkDays(mi);
    if (wd > maxDays && html) break;
    const open = S.open === s.i, isDest = S.dest === s.i;
    const heavy = foodDays(mi) > MAXFOOD;
    html += `<div class="row ${open ? 'open' : ''} ${isDest ? 'dest' : ''} ${heavy ? 'far' : ''}" data-i="${s.i}">
      <div class="h">
        <div class="d"><b>+${dist(mi)}</b><small class="wd">${fmt(wd, 1)} ${t('days')}</small><span class="fd">${foodDays(mi)} ${CUT}</span>${heavy ? `<small class="heavy">${esc(t('heavy'))}</small>` : ''}</div>
        <div class="n"><strong>${esc(name(s))}${s.use >= 60 ? `<span class="typ">★ ${esc(t('common'))}</span>` : ''}</strong>
          <div class="mini">${svcIcons(s)}</div>
          ${s.use != null ? `<div class="usebar"><i><b style="width:${Math.min(100, s.use)}%"></b></i>${fmt(s.use)} %</div>` : ''}</div>
      </div>
      <div class="x">${detail(s)}
        <div class="btns"><button class="btn" data-act="dest">${esc(t('setDest'))}</button><button class="btn pri" data-act="go">${esc(t('goOn'))}</button></div>
      </div>
    </div>`;
  }
  $('#next').innerHTML = html;
}
function renderLeg() {
  const st = startStop(), d = S.dest != null ? D.stops[S.dest] : null;
  const ok = d && d.trail === S.trail && nextStops().some(x => x.i === d.i);
  $('#leg').hidden = !ok;
  if (!ok) return;
  const mi = miBetween(st, d);
  const r = (k, v) => v ? `<div class="r"><span>${esc(k)}</span><b>${esc(v)}</b></div>` : '';
  $('#leg').innerHTML = `<div class="path">${esc(st.name)} → ${esc(d.name)}</div>
    <div class="big"><span class="t">${foodDays(mi)} ${esc(t('dayWord'))}</span><span class="d">${esc(t('foodDays'))}</span></div>
    <div class="km"><b>${dist(mi)}</b> · ${fmt(walkDays(mi), 1)} ${esc(t('walkDays'))}</div>
    ${r(t('store'), t('gro')[d.s.gro])}${r(t('access'), accText(d).replace(/^\S+\s/, ''))}${r(t('stopHere'), d.use != null ? fmt(d.use) + ' %' : '')}${r(t('boxLbl'), d.box ? fmt(d.box) + ' %' : (d.boxRec ? '✓' : ''))}
    ${foodDays(mi) > MAXFOOD ? `<p class="warn">${esc(L().tooMuch(MAXFOOD))}</p>` : ''}
    <a href="https://dacat84.github.io/trail-food/" target="_blank" rel="noopener">${esc(t('planFood'))}</a>`;
}
function renderRoute() {
  const r = (S.route || []).filter(x => D.stops[x.a] && D.stops[x.b]);
  $('#route-box').hidden = !r.length;
  if (!r.length) return;
  let tot = 0, nHeavy = 0;
  $('#route').innerHTML = r.map((x, k) => {
    const a = D.stops[x.a], b = D.stops[x.b], mi = miBetween(a, b); tot += mi;
    const heavy = foodDays(mi) > MAXFOOD; if (heavy) nHeavy++;
    return `<div class="rt ${heavy ? 'heavy' : ''}"><span><b>${k + 1}. ${esc(b.name)}</b><em class="rf">${esc(L().fromWord(a.name))}</em></span><div class="rm"><b>${dist(mi)}</b><span class="fd">${foodDays(mi)} ${CUT}${heavy ? ' ⚠' : ''}</span></div></div>`;
  }).join('') + `<div class="rt-sum">${esc(L().total(r.length, dist(tot), fmt(walkDays(tot), 0)))}</div>`
    + (nHeavy ? `<p class="warn">${esc(L().routeHeavy(nHeavy, MAXFOOD))}${S.routeAuto ? ' ' + esc(t('noStop')) : ''}</p>${S.routeAuto ? '' : `<button class="btn pri" id="r-fix" style="width:100%;margin-top:8px">${esc(t('routeFix'))}</button>`}` : '');
  const fix = $('#r-fix');
  if (fix) fix.onclick = () => { const p = typicalPlan(); S.route = planLegs(p); S.routeAuto = true; render(); toast(t('stratTaken')); };
}
function typicalPlan() {
  const all = trailStops(), avg = all.filter(s => s.avg);
  if (avg.length && avg[0] !== all[0]) avg.unshift(all[0]);
  if (avg.length && avg[avg.length - 1] !== all[all.length - 1]) avg.push(all[all.length - 1]);
  // Etappen mit mehr als MAXFOOD Tagen Essen (bei deinem Tempo): meistgenutzten Zwischenstopp einfügen
  all.forEach(s => { s.fill = false; });
  for (let guard = 0; avg.length && guard < 40; guard++) {
    let ins = false;
    for (let k = 1; k < avg.length; k++) {
      if (foodDays(miBetween(avg[k - 1], avg[k])) <= MAXFOOD) continue;
      const lo = Math.min(avg[k - 1].mile, avg[k].mile), hi = Math.max(avg[k - 1].mile, avg[k].mile);
      const between = all.filter(s => s.mile > lo && s.mile < hi && s.s.gro > 0);
      const mid = between.sort((a, b) => (b.use ?? -1) - (a.use ?? -1) || Math.abs((a.mile - lo) - (hi - a.mile)) - Math.abs((b.mile - lo) - (hi - b.mile)))[0];
      if (mid) { mid.fill = true; avg.splice(k, 0, mid); ins = true; break; }
    }
    if (!ins) break;
  }
  return avg;
}
const planLegs = avg => { const r = []; for (let k = 1; k < avg.length; k++) r.push({ a: avg[k - 1].i, b: avg[k].i }); return r; };
function renderStrat() {
  const tm = trailMeta(), all = trailStops(), avg = typicalPlan();
  const list = avg.length ? avg : all;
  let head = `<h2 class="sec2">${esc(t('stratTitle'))} · ${esc(tm.id)}</h2>`;
  if (tm.id === 'PCT') {
    const [a, b, c, d] = t('stratStats');
    head += `<div class="stat"><div><b>38 %</b><small>${esc(a)}</small></div><div><b>42 %</b><small>${esc(b)}</small></div><div><b>11 %</b><small>${esc(c)}</small></div><div><b>6 % / 3 %</b><small>${esc(d)}</small></div>
      <div><b>${IMP() ? '19 mi' : '31 km'}</b><small>${esc(t('stratAvg')[0])}</small></div><div><b>29</b><small>${esc(t('stratAvg')[1])}</small></div></div>
      <p class="note" style="color:var(--mute);font-size:.75rem">${esc(t('stratFoot'))}</p>`;
  } else head += `<p class="note">${esc(t('stratNone'))}</p>`;
  if (avg.length) head += `<button class="btn pri" id="strat-take" style="width:100%;margin-top:8px">${esc(t('stratTake'))}</button>`;
  $('#strat-head').innerHTML = head;
  let prev = null;
  $('#strat').innerHTML = list.map(s => {
    const mi = prev ? miBetween(prev, s) : 0; const prevName = prev ? prev.name : null; prev = s;
    return `<div class="row" data-i="${s.i}"><div class="h">
      <div class="d"><b>${mi ? '+' + dist(mi) : '🚩'}</b><small>${mi ? fmt(walkDays(mi), 1) + ' ' + t('days') : ''}</small></div>
      <div class="n">${prevName ? `<div class="from">${esc(L().fromWord(prevName))}${s.fill ? ` · <span class="fillb">${esc(t('fillStop'))}</span>` : ''}</div>` : ''}<strong>${esc(s.name)}</strong><div class="mini">${svcIcons(s)}</div>${s.use != null ? `<div class="usebar"><i><b style="width:${Math.min(100, s.use)}%"></b></i>${fmt(s.use)} %${s.box ? ` · 📦 ${fmt(s.box)} %` : ''}</div>` : ''}</div>
    </div><div class="x">${detail(s)}</div></div>`;
  }).join('');
  const take = $('#strat-take');
  if (take) take.onclick = () => {
    S.route = planLegs(avg); S.routeAuto = true;
    S.start = avg[0].i; S.dest = avg[1] ? avg[1].i : null; save(); render(); toast(t('stratTaken'));
  };
}

// ---------- Kopf und Hintergrund (wie die Reportage im PCT-Tracker) ----------
const BG = { PCT: [36.58, -118.29], CDT: [43.1, -109.6], AT: [35.6, -83.5], CT: [37.85, -107.6], JMT: [37.2, -118.7], AZT: [36.1, -112.1],
  PNT: [48.75, -121.2], LT: [44.54, -72.81], TRT: [39.05, -120.0], WON: [46.85, -121.76], SHT: [47.7, -90.9] };
function renderBg() {
  const c = BG[S.trail] || BG.PCT, z = 11, n = 2 ** z;
  const x = Math.floor((c[1] + 180) / 360 * n), lat = c[0] * Math.PI / 180;
  const y = Math.floor((1 - Math.log(Math.tan(lat) + 1 / Math.cos(lat)) / Math.PI) / 2 * n);
  const key = S.trail; if (renderBg.k === key) return; renderBg.k = key;
  let h = '';
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++)
    h += `<img alt="" onload="this.style.opacity=1" onerror="this.remove()" src="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y + dy}/${x + dx}">`;
  $('#bg').innerHTML = h;
}
function renderHead() {
  const tm = trailMeta(), st = startStop(), d = S.dest != null ? D.stops[S.dest] : null;
  const ok = d && d.trail === S.trail && nextStops().some(x => x.i === d.i);
  $('#kick').textContent = `${t('kick')} · ${tm.id} · ${S.dir === 'rev' ? tm.rev : tm.fwd}`;
  $('#htitle').textContent = tm.name;
  $('#hsub').textContent = ok ? L().subLeg(st.name, d.name, dist(miBetween(st, d)), foodDays(miBetween(st, d))) : L().subStart(st.name);
  document.title = `${tm.name} · Trail Resupply`;
  renderBg();
}

// ---------- Events ----------
function init() {
  $('#t-lang').onclick = () => { S.lang = S.lang === 'de' ? 'en' : 'de'; render(); };
  $('#t-units').onclick = () => { S.units = IMP() ? 'metric' : 'imperial'; render(); };
  $('#s-trail').onchange = e => { S.trail = e.target.value; S.start = null; S.dest = null; S.open = null; render(); };
  $$('#s-dir button').forEach(b => b.onclick = () => { S.dir = b.dataset.v; S.start = null; S.dest = null; S.open = null; render(); });
  $('#s-start').onchange = e => { S.start = +e.target.value; S.dest = null; S.open = null; render(); };
  const setPace = v => { if (v > 0) S.pace = IMP() ? v : v / KM; render(); };
  $('#s-pace').onchange = e => setPace(+e.target.value);
  $$('.stepper button').forEach(b => b.onclick = () => setPace(+$('#s-pace').value + +b.dataset.step));
  $$('#s-buf button').forEach(b => b.onclick = () => { S.buf = +b.dataset.v; render(); });
  $('#r-clear').onclick = () => { S.route = []; S.routeAuto = false; render(); };
  const rowClick = e => {
    const row = e.target.closest('.row'); if (!row) return;
    const i = +row.dataset.i, act = e.target.closest('[data-act]');
    if (act && act.dataset.act === 'dest') { S.dest = i; render(); toast(t('destSet')); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    if (act && act.dataset.act === 'go') {
      S.route = S.route || []; S.route.push({ a: startStop().i, b: i }); S.routeAuto = false;
      S.start = i; S.dest = null; S.open = null; render(); toast(t('legAdded')); window.scrollTo({ top: 0, behavior: 'smooth' }); return;
    }
    if (e.currentTarget.id === 'next') { S.open = S.open === i ? null : i; renderNext(); save(); }
    else row.classList.toggle('open');
  };
  $('#next').addEventListener('click', rowClick);
  $('#strat').addEventListener('click', rowClick);
  $$('#nav .tab').forEach(b => b.onclick = () => {
    $$('#nav .tab').forEach(x => x.classList.toggle('active', x === b));
    $$('.view').forEach(v => v.classList.toggle('active', v.id === 'v-' + b.dataset.v));
    window.scrollTo(0, 0);
  });
}
