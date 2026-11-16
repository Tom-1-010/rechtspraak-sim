// Rechtbank Simulator NL — applicatielogica
const safariFix = document.createElement('style');
safariFix.textContent = `
  @media (max-width:430px){
    html,body{height:100dvh!important;min-height:100dvh!important;overflow:hidden!important;background:#f2f4f8!important;}
    .app{width:100vw!important;height:100dvh!important;min-height:100dvh!important;max-height:none!important;}
    .content{padding-bottom:96px!important;}
  }
`;
document.head.appendChild(safariFix);

const S = {
  page: 'home', current: SIM_DATA.cases[2], verdict: {}, selected: new Set(),
  history: [], bewezenkeuze: 'bewezen', docTab: 'overzicht', resultaten: []
};
const $ = id => document.getElementById(id);
const titleMap = {home:'Strafkamer',zaken:'Zaakbank',dossier:'Dossier',zitting:'Zitting',bewijs:'Bewijs en verweren',straf:'Strafmaat',uitspraak:'Vonnis',profiel:'Profiel'};

const genericReplies = {
  Verdachte: 'Ik kan daar alleen op antwoorden vanuit mijn eigen verklaring. Ik betwist vooral de zwaarste uitleg van het dossier.',
  Advocaat: 'Voor de verdediging staat de bewijswaardering centraal. De rechtbank moet de zwakke punten expliciet benoemen.',
  'Officier van justitie': 'Het OM kijkt naar de samenhang van de bewijsmiddelen en de strafwaardigheid van het feit.',
  Getuige: 'Ik kan alleen verklaren wat ik zelf heb gezien of gehoord. Details waar ik niet zeker van ben, moet ik niet invullen.',
  Slachtoffer: 'Voor mij gaat het vooral om de impact en de schade die door het incident is ontstaan.',
  Verbalisant: 'Ik kan toelichten wat wij hebben waargenomen en wat in het proces-verbaal is vastgelegd.',
  Reclassering: 'Ik kan iets zeggen over risico, beschermende factoren en passende voorwaarden.'
};

function html(s){return String(s ?? '').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]))}
function esc(s){return html(s)}

function show(page){
  S.page = page;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  $(page).classList.add('active');
  $('title').textContent = titleMap[page] || 'Strafkamer';
  $('crumb').textContent = 'Rechtbank Simulator NL / ' + (titleMap[page] || page);
  document.querySelectorAll('.nav').forEach(n=>n.classList.toggle('active', n.dataset.goto===page));
  document.querySelector('.content').scrollTo({top:0,behavior:'smooth'});
  if(page==='dossier') renderDoc();
  if(page==='zaken') renderCases();
  if(page==='bewijs') renderEvidence();
  if(page==='straf') renderMeasures();
  if(page==='uitspraak') renderVerdict();
  if(page==='profiel') renderProfile();
}

document.addEventListener('click', e=>{
  const g = e.target.closest('[data-goto]'); if(g) show(g.dataset.goto);
  const open = e.target.closest('[data-open-case]');
  if(open){
    S.current = SIM_DATA.cases.find(c=>c.id===open.dataset.openCase) || S.current;
    S.selected.clear(); S.history=[]; S.bewezenkeuze='bewezen'; S.docTab='overzicht';
    S.current.verwerenBehandeld = new Set();
    renderHeaderCase(); resetChat(); show('dossier');
  }
  const t = e.target.closest('.toggle'); if(t) t.classList.toggle('on');
  const info = e.target.closest('.info'); if(info) info.closest('.measure').classList.toggle('open');
});

function renderHeaderCase(){
  $('caseMini').textContent = `${S.current.name} · ${S.current.parket}`;
}
function pill(diff){
  return diff==='Zwaar' ? 'red' : diff==='Complex' ? 'gold' : diff==='Normaal' ? 'blue' : 'green';
}
function bewijsPill(niveau){
  return niveau==='onvoldoende' ? 'red' : niveau==='twijfelachtig' ? 'gold' : 'green';
}

function renderDashboard(){
  const done = Number(localStorage.getItem('done')||0);
  $('homeStats').innerHTML = `
    <div class="stat"><span>Zakenbank</span><strong>${SIM_DATA.cases.length}</strong></div>
    <div class="stat"><span>Afgerond</span><strong>${done}</strong></div>
    <div class="stat"><span>Score</span><strong>${Math.max(72,Math.min(98,82+done%10))}%</strong></div>
    <div class="stat"><span>HB-risico</span><strong>${Math.max(8,28-done%12)}%</strong></div>`;
  $('activeCase').innerHTML = caseCard(S.current,true);
}

function caseCard(c, active=false){
  return `<div class="card caseCard" ${active?'':`data-open-case="${c.id}"`}>
    <div class="row"><span class="pill ${pill(c.difficulty)}">${esc(c.difficulty)}</span><span class="pill blue">${esc(c.court)}</span><span class="pill">${esc(c.category)}</span></div>
    <h3>${esc(c.name)}</h3>
    <p>${esc(c.summary)}</p>
    <div class="meta">
      <span class="pill">${esc(c.city)}</span>
      <span class="pill">${esc(c.parket)}</span>
      <span class="pill ${bewijsPill(c.bewijsniveau)}">Bewijs: ${esc(c.bewijsniveau)}</span>
      <span class="pill">${c.bewijsstukken.length} bewijsstukken · ${c.verweren.length} verweren</span>
    </div>
    ${active?'<button class="btn primary full" data-goto="dossier">Open dossier</button>':`<button class="btn primary full" data-open-case="${c.id}">Start zaak</button>`}
  </div>`;
}

function renderCases(){
  const q = ($('search').value||'').toLowerCase();
  const cat = $('catFilter').value, dif = $('difFilter').value;
  let list = SIM_DATA.cases.filter(c=>
    (!q || `${c.name} ${c.city} ${c.parket} ${c.bewijsniveau} ${c.summary}`.toLowerCase().includes(q)) &&
    (cat==='Alle'||c.category===cat) && (dif==='Alle'||c.difficulty===dif));
  $('caseCount').textContent = list.length + ' zaken';
  $('caseList').innerHTML = list.slice(0,200).map(c=>caseCard(c)).join('');
}

function renderFilters(){
  $('catFilter').innerHTML = '<option>Alle</option>' + SIM_DATA.categories.map(c=>`<option>${esc(c)}</option>`).join('');
  ['search','catFilter','difFilter'].forEach(id=>$(id).addEventListener('input', renderCases));
}

// ---------- Dossier ----------
function renderDocTabs(){
  const labels = {
    overzicht:'Overzicht', dagvaarding:'Dagvaarding', tenlastelegging:'Tenlastelegging',
    pv:'Proces-verbaal', aangifte:'Aangifte', verdachte:'Verdachte', getuigen:'Getuigen',
    deskundige:'Deskundige', bewijs:'Bewijs', om:'OM', verdediging:'Verdediging',
    reclassering:'Reclassering', slachtofferimpact:'Slachtofferimpact', strafvordering:'Strafvordering'
  };
  const keys = Object.keys(S.current.documents);
  const tabsEl = $('docTabs');
  if(!tabsEl) return;
  tabsEl.innerHTML = keys.map(k=>`<button class="tab ${S.docTab===k?'active':''}" data-doc="${k}">${esc(labels[k]||k)}</button>`).join('');
  tabsEl.querySelectorAll('.tab').forEach(t=>t.addEventListener('click', ()=>{S.docTab=t.dataset.doc;renderDoc()}));
}

function renderDoc(key){
  if(key) S.docTab = key;
  renderDocTabs();
  const d = S.current.documents[S.docTab] || S.current.documents.overzicht;
  const punten = d.punten ? `<ul class="docPunten">${d.punten.map(p=>`<li>${esc(p)}</li>`).join('')}</ul>` : '';
  $('docPanel').innerHTML = `
    <h2>${esc(d.titel)}</h2>
    <div class="docMeta">${esc(d.meta)}</div>
    ${d.paragrafen.map(p=>`<p>${esc(p)}</p>`).join('')}
    ${punten}
    <div class="meta">
      <span class="pill ${bewijsPill(S.current.bewijsniveau)}">Bewijs: ${esc(S.current.bewijsniveau)}</span>
      <span class="pill blue">${esc(S.current.court)}</span>
      <span class="pill">${esc(S.current.city)}</span>
      <span class="pill">${esc(S.current.zaaksoort||'')}</span>
    </div>
    <button class="btn primary full" style="margin-top:10px" data-goto="zitting">Naar zitting</button>`;
}

// ---------- Zitting ----------
function renderZittingInfo(){
  const box = $('zittingInfo');
  if(!box) return;
  box.innerHTML = `
    <div class="row"><span class="pill gold">${esc(S.current.court)}</span><span class="pill blue">${esc(S.current.zaaksoort||'Zitting')}</span></div>
    <p><strong>Kernvraag:</strong> ${esc(S.current.kernvraag)}</p>`;
}

async function askAI(role,text){
  try{
    const r = await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({role,message:text,caseContext:S.current.casus,history:S.history.slice(-8)})});
    if(!r.ok) throw new Error('api');
    const j = await r.json();
    $('aiMode').textContent = 'AI: mock';
    return j.reply || caseAwareReply(role,text);
  }catch(e){
    $('aiMode').textContent = 'AI: mock';
    return caseAwareReply(role,text);
  }
}

function caseAwareReply(role,text){
  const roleMap = S.current.roleResponses || {};
  const base = roleMap[role] || genericReplies[role] || 'Ik kan daar binnen mijn rol alleen op basis van het dossier op reageren.';
  const lower = text.toLowerCase();
  if(lower.includes('bewijs')||lower.includes('pv')||lower.includes('proces-verbaal')||lower.includes('bewijsstuk')){
    const st = (S.current.bewijsstukken||[]).map(s=>`${s.id} ${s.type} (${s.bron}, ${s.sterkte})`).join('; ');
    return `${base} Bewijsstukken in dit dossier: ${st}. Bewijsniveau: ${S.current.bewijsniveau}.`;
  }
  if(lower.includes('verweer')||lower.includes('verweren')||lower.includes('noodweer')){
    const v = (S.current.verweren||[]).map(w=>`${w.naam} (${w.sterkte})`).join('; ');
    return `${base} Verweren in deze zaak: ${v || 'geen specifieke verweren uitgewerkt'}.`;
  }
  if(lower.includes('reclassering')||lower.includes('rapport')){
    return `${base} Reclassering: ${S.current.reclasseringsrapport || 'geen rapport beschikbaar.'}`;
  }
  if(lower.includes('slachtoffer')||lower.includes('impact')||lower.includes('schade')){
    return `${base} Slachtofferimpact: ${S.current.slachtofferimpact || 'niet uitgewerkt.'}`;
  }
  if(lower.includes('waarom')||lower.includes('hanska')||lower.includes('hoezo')){
    return `${base} De relevante context is: ${S.current.kernvraag}`;
  }
  if(lower.includes('straf')||lower.includes('eis')){
    return role==='Officier van justitie'
      ? `${S.current.om_standpunt} De eis luidt: ${S.current.om_eis}`
      : `${base} Mogelijke sancties in deze zaak zijn: ${S.current.mogelijke_sancties}.`;
  }
  return base;
}

function resetChat(){
  if(!$('messages')) return;
  $('messages').innerHTML = `
    <div class="msg system">Zittingschat geladen voor ${esc(S.current.name)}. Vraag gericht naar bewijsstukken, verweren, opzet, schade of persoonlijke omstandigheden.</div>
    <div class="msg ai">Verdachte: ${esc(caseAwareReply('Verdachte','start'))}</div>`;
}
function addMsg(kind,text){
  $('messages').insertAdjacentHTML('beforeend', `<div class="msg ${kind}">${esc(text)}</div>`);
  $('messages').scrollTop = $('messages').scrollHeight;
}
async function sendChat(){
  const input = $('chatInput'); const text = input.value.trim();
  if(!text) return;
  const role = $('roleSelect').value;
  input.value = '';
  addMsg('user', text);
  S.history.push({sender:'Rechter', text});
  const wait = 'w'+Date.now();
  $('messages').insertAdjacentHTML('beforeend', `<div id="${wait}" class="msg ai">${esc(role)}: denkt na...</div>`);
  $('messages').scrollTop = $('messages').scrollHeight;
  const reply = await askAI(role,text);
  $(wait).textContent = `${role}: ${reply}`;
  S.history.push({sender:role, text:reply});
  $('messages').scrollTop = $('messages').scrollHeight;
}

// ---------- Bewijs en verweren ----------
function renderEvidence(){
  const c = S.current;
  const stukken = (c.bewijsstukken||[]).map(s=>`
    <div class="card flat evidence">
      <div class="row"><span class="pill blue">${esc(s.id)}</span><span class="pill">${esc(s.type)}</span>
        <span class="pill ${s.sterkte.startsWith('sterk')?'green':s.sterkte.startsWith('middel')?'gold':'red'}">${esc(s.sterkte)}</span></div>
      <h3>${esc(s.type)} — ${esc(s.bron)}</h3>
      <p>${esc(s.samenvatting)}</p>
    </div>`).join('');

  const verweren = (c.verweren||[]).map((w,i)=>`
    <div class="check">
      <h3>${esc(w.naam)}</h3>
      <p>${esc(w.toelichting)}</p>
      <div class="checkLine"><span>Sterkte: ${esc(w.sterkte)}</span><div class="toggle"></div></div>
      <label class="verweerCheck"><input type="checkbox" data-verweer="${i}" ${c.verwerenBehandeld.has(String(i))?'checked':''}/> Verweer besproken in het vonnis</label>
    </div>`).join('');

  $('evidenceList').innerHTML = `
    <h2 class="section">Bewijsstukken (${(c.bewijsstukken||[]).length})</h2>
    ${stukken}
    <h2 class="section">Verweren (${(c.verweren||[]).length})</h2>
    ${verweren || '<div class="card flat"><p>Geen specifieke verweren uitgewerkt.</p></div>'}
    <h2 class="section">Waardering</h2>
    <div class="warning"><strong>Bewijsniveau:</strong> ${esc(c.bewijsniveau)} — ${esc(c.bewijsanalyse)}</div>
    <div class="warning">Maak onderscheid tussen wettig bewijs en overtuiging; motivering onder art. 339 Sv.</div>
    <button class="btn primary full" data-goto="straf">Naar strafmaat</button>`;

  $('evidenceList').querySelectorAll('input[data-verweer]').forEach(inp=>{
    inp.addEventListener('change', ()=>{
      if(inp.checked) c.verwerenBehandeld.add(inp.dataset.verweer);
      else c.verwerenBehandeld.delete(inp.dataset.verweer);
    });
  });
}

// ---------- Strafmaat ----------
function renderMeasures(){
  const c = S.current;
  const eisBox = $('omEisBox');
  if(eisBox){
    const kader = (typeof OM_KADER !== 'undefined' && OM_KADER && OM_KADER.recidive)
      ? `<h3>Recidivekader</h3><p>${OM_KADER.recidive.map(r=>`${esc(r.label)}: ${esc(r.effect)}`).join(' · ')}</p>` : '';
    eisBox.innerHTML = `
      <h3>OM-eis</h3><p>${esc(c.om_eis)}</p>
      <h3>Richtlijn</h3><p>${esc(c.richtlijn||'Geen richtlijn beschikbaar.')}</p>
      <h3>Reclassering</h3><p>${esc(c.reclasseringsrapport||'Geen rapport.')}</p>
      <h3>Slachtofferimpact</h3><p>${esc(c.slachtofferimpact||'Niet uitgewerkt.')}</p>
      ${kader}`;
  }
  if(!$('measureList').children.length){
    $('measureList').innerHTML = SIM_DATA.measures.map(m=>`
      <div class="measure">
        <input type="checkbox" data-measure="${esc(m[0])}">
        <div><h3>${esc(m[0])}</h3><p>${esc(m[1])}</p></div>
        <span class="info">i</span>
        <div class="infoText">${esc(m[2])}</div>
      </div>`).join('');
    $('measureList').addEventListener('change', e=>{
      if(e.target.matches('input[type=checkbox]')){
        e.target.checked ? S.selected.add(e.target.dataset.measure) : S.selected.delete(e.target.dataset.measure);
        updateSentence();
      }
    });
  }
  updateSentence();
}

function updateSentence(){
  const count = S.selected.size;
  const heavy = S.selected.has('Onvoorwaardelijke gevangenisstraf') || S.selected.has('TBS-maatregel');
  $('selectedCount').textContent = count;
  $('prop').textContent = count ? `${$('severity').value}, ${S.current.difficulty.toLowerCase()}` : 'Geen sanctie';
  $('risk').textContent = S.current.bewijsniveau==='onvoldoende' ? 'Zeer hoog: bewijsprobleem'
    : heavy ? 'Hoog: uitgebreid motiveren' : count>2 ? 'Middel' : 'Laag';
  $('concept').textContent = count ? [...S.selected].slice(0,3).join(', ') + (count>3?'…':'') : 'Nog niets gekozen';
}

// ---------- Vonnis ----------
function renderVerdict(){
  const c = S.current;
  const keuzeBox = $('verdictKeuze');
  if(keuzeBox){
    keuzeBox.innerHTML = ['bewezen','vrijspraak','ontslag'].map(k=>{
      const label = k==='bewezen' ? 'Bewezenverklaring' : k==='vrijspraak' ? 'Vrijspraak' : 'Ontslag van alle rechtsvervolging';
      return `<label class="radioLine"><input type="radio" name="bewezenkeuze" value="${k}" ${S.bewezenkeuze===k?'checked':''}/> ${label}</label>`;
    }).join('');
    keuzeBox.querySelectorAll('input').forEach(r=>r.addEventListener('change', ()=>{S.bewezenkeuze=r.value; renderVerdict()}));
  }
  const beh = c.verwerenBehandeld ? c.verwerenBehandeld.size : 0;
  const tot = (c.verweren||[]).length || 1;
  const verweerRatio = beh/tot;
  const base = S.bewezenkeuze==='bewezen'
    ? (c.bewijsniveau==='onvoldoende' ? 45 : c.bewijsniveau==='twijfelachtig' ? 62 : 80)
    : S.bewezenkeuze==='vrijspraak' ? (c.bewijsniveau==='onvoldoende' ? 88 : c.bewijsniveau==='twijfelachtig' ? 70 : 40)
    : (c.bewijsniveau==='onvoldoende' ? 72 : 65);
  const score = Math.max(30, Math.min(97, Math.round(base + verweerRatio*14 - (c.difficulty==='Zwaar'?7:0))));
  $('scoreNum').textContent = score+'%';
  $('scoreRing').style.background = `conic-gradient(var(--green) 0 ${score}%,#ddd2c1 ${score}% 100%)`;
  $('verweerStatus').textContent = `${beh} van ${tot} verweren besproken`;

  const keuzeLabel = S.bewezenkeuze==='bewezen' ? 'bewezenverklaring'
    : S.bewezenkeuze==='vrijspraak' ? 'vrijspraak' : 'ontslag van alle rechtsvervolging';
  const straftekst = S.selected.size ? [...S.selected].join(', ') : 'geen sanctie gekozen';
  $('verdictText').value =
`CONCEPTVONNIS — Rechtbank ${c.court}, locatie ${c.city}
Parketnummer: ${c.parket}
Zaak: ${c.name}

1. Tenlastelegging
${c.documents.tenlastelegging.paragrafen.join('\n')}

2. Bewijswaardering
${c.bewijsanalyse} Bewijsniveau: ${c.bewijsniveau}.
Bewijsstukken: ${(c.bewijsstukken||[]).map(s=>s.id+' ('+s.type+', '+s.bron+')').join(', ')}.

3. Verweren
${(c.verweren||[]).map((w,i)=>`${i+1}. ${w.naam} — ${w.toelichting} [${c.verwerenBehandeld&&c.verwerenBehandeld.has(String(i))?'BESPROKEN':'NIET BESPROKEN'}]`).join('\n') || 'Geen verweren uitgewerkt.'}

4. Beslissing
De rechtbank overweegt ${keuzeLabel}.

5. Strafmaat
Gekozen sancties: ${straftekst}.
OM-eis: ${c.om_eis}.
${c.richtlijn ? 'Richtlijnkader: '+c.richtlijn : ''}`;
}

function finishCase(){
  const c = S.current;
  const hist = JSON.parse(localStorage.getItem('resultaten')||'[]');
  hist.push({id:c.id, cat:c.category, keuze:S.bewezenkeuze, datum:new Date().toISOString().slice(0,10)});
  localStorage.setItem('resultaten', JSON.stringify(hist));
  localStorage.setItem('done', String(hist.length));
  renderDashboard(); show('home');
}

// ---------- Profiel ----------
function renderProfile(){
  const hist = JSON.parse(localStorage.getItem('resultaten')||'[]');
  const perCat = {};
  hist.forEach(h=>{ perCat[h.cat] = (perCat[h.cat]||0)+1 });
  const catRows = Object.entries(perCat).map(([k,v])=>`<div class="stat"><span>${esc(k)}</span><strong>${v}</strong></div>`).join('')
    || '<div class="stat"><span>Nog geen zaken afgerond</span><strong>0</strong></div>';
  $('profileBox').innerHTML = `
    <div class="stat"><span>Behandelde zaken</span><strong>${hist.length}</strong></div>
    <div class="stat"><span>Beschikbare zaken</span><strong>${SIM_DATA.cases.length}</strong></div>
    <div class="stat"><span>Basiszaken</span><strong>${SIM_DATA.templates.length}</strong></div>
    <div class="stat"><span>Bewijsstukken totaal</span><strong>${SIM_DATA.cases.reduce((a,c)=>a+c.bewijsstukken.length,0)}</strong></div>`;
  $('profileCatBox').innerHTML = catRows;
}

window.sendChat = sendChat;
window.updateSentence = updateSentence;
window.finishCase = finishCase;
window.renderCases = renderCases;

function boot(){
  renderFilters(); renderDashboard(); renderCases(); renderHeaderCase(); resetChat();
  renderDocTabs();
  document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click', ()=>renderDoc(t.dataset.doc)));
  if($('chatInput')) $('chatInput').addEventListener('keydown', e=>{ if(e.key==='Enter') sendChat() });
}
boot();
