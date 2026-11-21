/* Trail Resupply – mobiler Resupply-Planer */
'use strict';

const T = {
  en: {
    trail: 'Trail', start: 'Start / current stop', buffer: 'Buffer (days)', pace: u => `Daily distance (${u})`,
    nextStops: 'Next stops', myRoute: 'My route', clear: 'clear', tabPlan: 'Plan', tabStrat: 'Typical', tabInfo: 'Info',
    onTrail: 'right on trail', walk: d => `${d} walk`, hitch: d => `${d} hitch`, shuttle: d => `${d} shuttle/bus`, boat: d => `boat/ferry, ${d}`,
    gro: ['no store', 'small store / gas station', 'market / general store', 'supermarket'],
    po: 'post office', eat: 'food', bed: 'lodging', camp: 'camping', out: 'outfitter', wash: 'shower/laundry',
    use: p => `${p} % of hikers stop here`, box: p => `📦 ${p} % send a box`, boxRec: '📦 box recommended', est: 'estimated',
    days: 'd', walkDays: 'hiking days', foodDays: 'days of food', dist: 'distance',
    setDest: 'Set as destination', goOn: 'Continue from here', destSet: 'Destination set', legAdded: 'Leg added to route',
    total: (d, km, days) => `${d} legs · ${km} · ≈ ${days} hiking days`,
    common: 'popular', planFood: 'Plan food for this leg →',
    stratTitle: 'How most hikers do it', stratNone: 'No survey data for this trail yet. All known stops are listed.',
    stratTake: 'Use this as my route', stratTaken: 'Typical plan copied to your route',
    stratStats: ['mailed a few boxes (1–10 %)', 'mailed some (10–50 %)', 'mailed most', 'mailed none / all'],
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
    use: p => `${p} % der Hiker halten hier`, box: p => `📦 ${p} % schicken eine Box`, boxRec: '📦 Box empfohlen', est: 'geschätzt',
    days: 'T', walkDays: 'Lauftage', foodDays: 'Tage Essen', dist: 'Distanz',
    setDest: 'Als Ziel', goOn: 'Ab hier weiter', destSet: 'Ziel gesetzt', legAdded: 'Etappe zur Route hinzugefügt',
    total: (d, km, days) => `${d} Etappen · ${km} · ≈ ${days} Lauftage`,
    common: 'beliebt', planFood: 'Essen für diese Etappe planen →',
    stratTitle: 'So machen es die meisten', stratNone: 'Für diesen Trail gibt es noch keine Umfragedaten. Alle bekannten Stops sind aufgelistet.',
    stratTake: 'Als meine Route übernehmen', stratTaken: 'Typischer Plan in deine Route übernommen',
    stratStats: ['ein paar Boxen geschickt (1–10 %)', 'einige geschickt (10–50 %)', 'die meisten geschickt', 'keine / alle geschickt'],
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
    use: p => `${p} % de los hikers paran aquí`, box: p => `📦 ${p} % envían paquete`, boxRec: '📦 paquete recomendado', est: 'estimado',
    days: 'd', walkDays: 'días de marcha', foodDays: 'días de comida', dist: 'distancia',
    setDest: 'Como destino', goOn: 'Seguir desde aquí', destSet: 'Destino fijado', legAdded: 'Etapa añadida a la ruta',
    total: (d, km, days) => `${d} etapas · ${km} · ≈ ${days} días de marcha`,
    common: 'popular', planFood: 'Planear comida para esta etapa →',
    stratTitle: 'Cómo lo hace la mayoría', stratNone: 'Aún no hay datos de encuesta para este trail. Se listan todas las paradas conocidas.',
    stratTake: 'Usar como mi ruta', stratTaken: 'Plan típico copiado a tu ruta',
    stratStats: ['enviaron pocos paquetes (1–10 %)', 'enviaron algunos (10–50 %)', 'enviaron la mayoría', 'ninguno / todos'],
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
    use: p => `${p} % des randonneurs s'arrêtent ici`, box: p => `📦 ${p} % envoient un colis`, boxRec: '📦 colis recommandé', est: 'estimé',
    days: 'j', walkDays: 'jours de marche', foodDays: 'jours de nourriture', dist: 'distance',
    setDest: 'Comme destination', goOn: 'Continuer d\'ici', destSet: 'Destination définie', legAdded: 'Étape ajoutée',
    total: (d, km, days) => `${d} étapes · ${km} · ≈ ${days} jours de marche`,
    common: 'populaire', planFood: 'Planifier la nourriture →',
    stratTitle: 'Comment font la plupart', stratNone: 'Pas encore de données d\'enquête pour ce trail. Toutes les étapes connues sont listées.',
    stratTake: 'Utiliser comme mon itinéraire', stratTaken: 'Plan type copié dans ton itinéraire',
    stratStats: ['quelques colis (1–10 %)', 'certains (10–50 %)', 'la plupart', 'aucun / tous'],
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
const fmt = (x, d = 0) => (x == null || !isFinite(x)) ? '–' : x.toLocaleString({ de: 'de-DE', es: 'es-ES', fr: 'fr-FR' }[S.lang] || 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const dist = mi => IMP() ? `${fmt(mi, mi < 10 ? 1 : 0)} mi` : `${fmt(mi * KM, mi * KM < 10 ? 1 : 0)} km`;
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
  renderNext(); renderLeg(); renderRoute(); renderStrat();
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
    html += `<div class="row ${open ? 'open' : ''} ${isDest ? 'dest' : ''} ${wd > 7 ? 'far' : ''}" data-i="${s.i}">
      <div class="h">
        <div class="d"><b>+${dist(mi)}</b><small>${fmt(wd, 1)} ${t('days')} → ${foodDays(mi)} 🍽</small></div>
        <div class="n"><strong>${esc(name(s))}${s.use >= 60 ? `<span class="typ">★ ${esc(t('common'))}</span>` : ''}</strong>
          <div class="mini">${svcIcons(s)}</div>
          ${s.use != null ? `<div class="usebar"><i><b style="width:${Math.min(100, s.use)}%"></b></i>${fmt(s.use)} %</div>` : ''}</div>
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
  $('#leg').innerHTML = `<div class="path">${esc(st.name)} → ${esc(d.name)}</div>
    <div class="big"><div><b>${dist(mi)}</b><small>${esc(t('dist'))}</small></div><div><b>${fmt(walkDays(mi), 1)}</b><small>${esc(t('walkDays'))}</small></div><div><b>${foodDays(mi)}</b><small>${esc(t('foodDays'))}</small></div></div>
    <p style="margin:8px 0 0"><a href="https://dacat84.github.io/trail-food/" target="_blank" rel="noopener">${esc(t('planFood'))}</a></p>`;
}
function renderRoute() {
  const r = (S.route || []).filter(x => D.stops[x.a] && D.stops[x.b]);
  $('#route-box').hidden = !r.length;
  if (!r.length) return;
  let tot = 0;
  $('#route').innerHTML = r.map((x, k) => {
    const a = D.stops[x.a], b = D.stops[x.b], mi = miBetween(a, b); tot += mi;
    return `<div class="rt"><span>${k + 1}. ${esc(a.name)} → <b>${esc(b.name)}</b></span><small>${dist(mi)} · ${foodDays(mi)} 🍽</small></div>`;
  }).join('') + `<div class="rt-sum">${esc(L().total(r.length, dist(tot), fmt(walkDays(tot), 0)))}</div>`;
}
function renderStrat() {
  const tm = trailMeta(), all = trailStops(), avg = all.filter(s => s.avg);
  if (avg.length && avg[0] !== all[0]) avg.unshift(all[0]);
  if (avg.length && avg[avg.length - 1] !== all[all.length - 1]) avg.push(all[all.length - 1]);
  const list = avg.length ? avg : all;
  let head = `<h2 class="sec2">${esc(t('stratTitle'))} · ${esc(tm.id)}</h2>`;
  if (tm.id === 'PCT') {
    const [a, b, c, d] = t('stratStats');
    head += `<div class="stat"><div><b>38 %</b><small>${esc(a)}</small></div><div><b>42 %</b><small>${esc(b)}</small></div><div><b>11 %</b><small>${esc(c)}</small></div><div><b>6 % / 3 %</b><small>${esc(d)}</small></div>
      <div><b>${IMP() ? '19 mi' : '31 km'}</b><small>${esc(t('stratAvg')[0])}</small></div><div><b>29</b><small>${esc(t('stratAvg')[1])}</small></div></div>
      <p class="note" style="color:var(--mute);font-size:.75rem">${esc(t('stratFoot'))}</p>`;
  } else head += `<p class="note">${esc(t('stratNone'))}</p>`;
  if (avg.length) head += `<button class="btn pri" id="strat-take" style="width:100%;margin-top:8px">${esc(t('stratTake'))}</button>`;
  $('#strat-head').innerHTML = head;
  let prev = null;
  $('#strat').innerHTML = list.map(s => {
    const mi = prev ? miBetween(prev, s) : 0; prev = s;
    return `<div class="row" data-i="${s.i}"><div class="h">
      <div class="d"><b>${mi ? '+' + dist(mi) : '🚩'}</b><small>${mi ? fmt(walkDays(mi), 1) + ' ' + t('days') : ''}</small></div>
      <div class="n"><strong>${esc(s.name)}</strong><div class="mini">${svcIcons(s)}</div>${s.use != null ? `<div class="usebar"><i><b style="width:${Math.min(100, s.use)}%"></b></i>${fmt(s.use)} %${s.box ? ` · 📦 ${fmt(s.box)} %` : ''}</div>` : ''}</div>
    </div><div class="x">${detail(s)}</div></div>`;
  }).join('');
  const take = $('#strat-take');
  if (take) take.onclick = () => {
    S.route = []; for (let k = 1; k < avg.length; k++) S.route.push({ a: avg[k - 1].i, b: avg[k].i });
    S.start = avg[0].i; S.dest = avg[1] ? avg[1].i : null; save(); render(); toast(t('stratTaken'));
  };
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
  $('#r-clear').onclick = () => { S.route = []; render(); };
  const rowClick = e => {
    const row = e.target.closest('.row'); if (!row) return;
    const i = +row.dataset.i, act = e.target.closest('[data-act]');
    if (act && act.dataset.act === 'dest') { S.dest = i; render(); toast(t('destSet')); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    if (act && act.dataset.act === 'go') {
      S.route = S.route || []; S.route.push({ a: startStop().i, b: i });
      S.start = i; S.dest = null; S.open = null; render(); toast(t('legAdded')); window.scrollTo({ top: 0, behavior: 'smooth' }); return;
    }
    if (e.currentTarget.id === 'next') { S.open = S.open === i ? null : i; renderNext(); save(); }
    else row.classList.toggle('open');
  };
  $('#next').addEventListener('click', rowClick);
  $('#strat').addEventListener('click', rowClick);
  $$('.tabbar button').forEach(b => b.onclick = () => {
    $$('.tabbar button').forEach(x => x.classList.toggle('active', x === b));
    $$('.view').forEach(v => v.classList.toggle('active', v.id === 'v-' + b.dataset.v));
    window.scrollTo(0, 0);
  });
}
