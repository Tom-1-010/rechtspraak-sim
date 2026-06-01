const safariFix = document.createElement('style');
safariFix.textContent = `
  @media (max-width:430px){
    html,body{height:100dvh!important;min-height:100dvh!important;overflow:hidden!important;background:#fbf8f1!important;}
    .app{width:100vw!important;height:100dvh!important;min-height:100dvh!important;max-height:none!important;}
    .content{padding-bottom:96px!important;}
  }
`;
document.head.appendChild(safariFix);

const S = { page:'home', current: SIM_DATA.cases[2], verdict:{}, selected:new Set(), history:[] };
const $ = id => document.getElementById(id);
const titleMap = {home:'Strafkamer',zaken:'Zaakbank',dossier:'Dossier',zitting:'Zitting',bewijs:'Bewijs',straf:'Strafmaat',uitspraak:'Vonnis',profiel:'Profiel'};
const genericReplies = {
  Verdachte:'Ik kan daar alleen op antwoorden vanuit mijn eigen verklaring. Ik betwist vooral de zwaarste uitleg van het dossier.',
  Advocaat:'Voor de verdediging staat de bewijswaardering centraal. De rechtbank moet de zwakke punten expliciet benoemen.',
  'Officier van justitie':'Het OM kijkt naar de samenhang van de bewijsmiddelen en de strafwaardigheid van het feit.',
  Getuige:'Ik kan alleen verklaren wat ik zelf heb gezien of gehoord. Details waar ik niet zeker van ben, moet ik niet invullen.',
  Slachtoffer:'Voor mij gaat het vooral om de impact en de schade die door het incident is ontstaan.',
  Verbalisant:'Ik kan toelichten wat wij hebben waargenomen en wat in het proces-verbaal is vastgelegd.',
  Reclassering:'Ik kan iets zeggen over risico, beschermende factoren en passende voorwaarden.'
};
function html(s){return String(s ?? '').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]))}
function show(page){S.page=page;document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));$(page).classList.add('active');$('title').textContent=titleMap[page]||'Strafkamer';$('crumb').textContent='Rechtbank Simulator NL / '+(titleMap[page]||page);document.querySelectorAll('.nav').forEach(n=>n.classList.toggle('active',n.dataset.goto===page));document.querySelector('.content').scrollTo({top:0,behavior:'smooth'});if(page==='dossier') renderDoc('overzicht');if(page==='zaken') renderCases();if(page==='bewijs') renderEvidence();if(page==='straf') renderMeasures();if(page==='uitspraak') renderVerdict();if(page==='profiel') renderProfile();}
document.addEventListener('click',e=>{const g=e.target.closest('[data-goto]');if(g)show(g.dataset.goto);const open=e.target.closest('[data-open-case]');if(open){S.current=SIM_DATA.cases.find(c=>c.id===open.dataset.openCase)||S.current;S.selected.clear();S.history=[];renderHeaderCase();resetChat();show('dossier')}const t=e.target.closest('.toggle');if(t)t.classList.toggle('on');const info=e.target.closest('.info');if(info)info.closest('.measure').classList.toggle('open')});
function renderHeaderCase(){ $('caseMini').textContent = `${S.current.name} · ${S.current.parket}`; }
function pill(diff){return diff==='Zwaar'?'red':diff==='Complex'?'gold':diff==='Normaal'?'blue':'green'}
function renderDashboard(){const done=Number(localStorage.getItem('done')||0);$('homeStats').innerHTML=`<div class="stat"><span>Zakenbank</span><strong>${SIM_DATA.cases.length}</strong></div><div class="stat"><span>Afgerond</span><strong>${done}</strong></div><div class="stat"><span>Score</span><strong>${Math.max(72,Math.min(98,82+done%10))}%</strong></div><div class="stat"><span>HB-risico</span><strong>${Math.max(8,28-done%12)}%</strong></div>`;$('activeCase').innerHTML=caseCard(S.current,true)}
function caseCard(c,active=false){return `<div class="card caseCard" ${active?'':'data-open-case="'+c.id+'"'}><div class="row"><span class="pill ${pill(c.difficulty)}">${c.difficulty}</span><span class="pill blue">${c.court}</span></div><h3>${html(c.name)}</h3><p>${html(c.summary)}</p><div class="meta"><span class="pill">${html(c.city)}</span><span class="pill">${html(c.parket)}</span><span class="pill ${c.bewijsniveau==='onvoldoende'?'red':c.bewijsniveau==='twijfelachtig'?'gold':'green'}">Bewijs: ${html(c.bewijsniveau||'n.v.t.')}</span></div>${active?'<button class="btn primary full" data-goto="dossier">Open dossier</button>':'<button class="btn primary full" data-open-case="'+c.id+'">Start zaak</button>'}</div>`}
function renderCases(){const q=($('search').value||'').toLowerCase();const cat=$('catFilter').value;const dif=$('difFilter').value;let list=SIM_DATA.cases.filter(c=>(!q||`${c.name} ${c.city} ${c.parket} ${c.bewijsniveau}`.toLowerCase().includes(q))&&(cat==='Alle'||c.category===cat)&&(dif==='Alle'||c.difficulty===dif));$('caseCount').textContent=list.length+' zaken';$('caseList').innerHTML=list.slice(0,200).map(c=>caseCard(c)).join('')}
function renderFilters(){ $('catFilter').innerHTML='<option>Alle</option>'+SIM_DATA.categories.map(c=>`<option>${c}</option>`).join(''); ['search','catFilter','difFilter'].forEach(id=>$(id).addEventListener('input',renderCases));}
function renderDoc(key='overzicht'){document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.doc===key));const d=S.current.documents[key]||S.current.documents.overzicht;$('docPanel').innerHTML=`<h2>${html(d[0])}</h2><div class="docMeta">${html(d[1])}</div><p>${html(d[2])}</p><div class="meta"><span class="pill ${S.current.bewijsniveau==='onvoldoende'?'red':S.current.bewijsniveau==='twijfelachtig'?'gold':'green'}">Bewijs: ${html(S.current.bewijsniveau)}</span><span class="pill blue">${html(S.current.court)}</span><span class="pill">${html(S.current.city)}</span></div><button class="btn primary full" style="margin-top:10px" data-goto="zitting">Naar zitting</button>`}
function renderEvidence(){
  const c=S.current;
  const items=[
    ['Kernvraag', c.kernvraag || 'Is het feit wettig en overtuigend bewezen?', c.bewijs_score>=60],
    ['Bewijsniveau', `${c.bewijsniveau || 'onbekend'} — ${c.bewijsanalyse || 'Geen analyse beschikbaar.'}`, c.bewijs_score>=55],
    ['Belangrijkste bewijsmiddelen', (c.bewijsmiddelen||[]).join(', '), (c.bewijsmiddelen||[]).length>=3],
    ['OM-standpunt', c.om_standpunt || 'Niet uitgewerkt.', true],
    ['Verdedigingsverweer', c.verdediging || 'Niet uitgewerkt.', false],
    ['Waarschijnlijke rechterlijke route', c.bewijsniveau==='onvoldoende'?'Vrijspraak serieus overwegen. Motiveer waarom bewijs tekortschiet.':c.bewijsniveau==='twijfelachtig'?'Alleen bewezenverklaring bij sterke motivering van betrouwbaarheid.':'Bewezenverklaring mogelijk; strafmaat en verweren zorgvuldig motiveren.', c.bewijsniveau!=='onvoldoende']
  ];
  $('evidenceList').innerHTML=items.map(([title,text,on])=>`<div class="check"><h3>${html(title)}</h3><p>${html(text)}</p><div class="checkLine"><span>${on?'Ondersteunt bewezenverklaring':'Vraagt extra motivering'}</span><div class="toggle ${on?'on':''}"></div></div></div>`).join('')
}
function renderMeasures(){if($('measureList').children.length)return;$('measureList').innerHTML=SIM_DATA.measures.map(m=>`<div class="measure"><input type="checkbox" data-measure="${html(m[0])}"><div><h3>${html(m[0])}</h3><p>${html(m[1])}</p></div><span class="info">i</span><div class="infoText">${html(m[2])}</div></div>`).join('');$('measureList').addEventListener('change',e=>{if(e.target.matches('input[type=checkbox]')){e.target.checked?S.selected.add(e.target.dataset.measure):S.selected.delete(e.target.dataset.measure);updateSentence()}});updateSentence()}
function updateSentence(){const count=S.selected.size;const heavy=S.selected.has('Onvoorwaardelijke gevangenisstraf')||S.selected.has('TBS-maatregel');$('selectedCount').textContent=count;$('prop').textContent=count?`${$('severity').value}, ${S.current.difficulty.toLowerCase()}`:'Geen sanctie';$('risk').textContent=S.current.bewijsniveau==='onvoldoende'?'Zeer hoog: bewijsprobleem':heavy?'Hoog: uitgebreid motiveren':count>2?'Middel':'Laag';$('concept').textContent=count?[...S.selected].slice(0,3).join(', ')+(count>3?'…':''):'Nog niets gekozen';}
function renderVerdict(){const count=S.selected.size;const base=S.current.bewijsniveau==='onvoldoende'?45:S.current.bewijsniveau==='twijfelachtig'?62:80;const score=Math.max(35,Math.min(96,base+count*2-(S.current.difficulty==='Zwaar'?7:0)));$('scoreNum').textContent=score+'%';$('scoreRing').style.background=`conic-gradient(var(--green) 0 ${score}%,#ddd2c1 ${score}% 100%)`;$('verdictText').value=`De rechtbank behandelt de zaak ${S.current.parket} (${S.current.name}). Kernvraag: ${S.current.kernvraag}\n\nBewijswaardering: ${S.current.bewijsanalyse}\n\nStandpunt OM: ${S.current.om_standpunt}\n\nVerdediging: ${S.current.verdediging}\n\nVoorlopige route: ${S.current.bewijsniveau==='onvoldoende'?'vrijspraak serieus motiveren':'bewezenverklaring en strafmaat zorgvuldig motiveren'}.`}
function renderProfile(){const done=Number(localStorage.getItem('done')||0);$('profileBox').innerHTML=`<div class="stat"><span>Behandelde zaken</span><strong>${done}</strong></div><div class="stat"><span>Beschikbare zaken</span><strong>${SIM_DATA.cases.length}</strong></div><div class="stat"><span>Gem. score</span><strong>${82+done%10}%</strong></div><div class="stat"><span>Niveau</span><strong>${done>20?'Senior':'Rechter'}</strong></div>`}
async function askAI(role,text){try{const r=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({role,message:text,caseContext:S.current.casus,history:S.history.slice(-8)})});if(!r.ok)throw new Error('api');const j=await r.json();$('aiMode').textContent=j.source==='gemini'?'AI: Gemini':'AI: mock';return j.reply||caseAwareReply(role,text)}catch(e){$('aiMode').textContent='AI: mock';return caseAwareReply(role,text)}}
function caseAwareReply(role,text){
  const roleMap=S.current.roleResponses||{};
  const base=roleMap[role]||genericReplies[role]||'Ik kan daar binnen mijn rol alleen op basis van het dossier op reageren.';
  const lower=text.toLowerCase();
  if(lower.includes('bewijs')||lower.includes('pv')||lower.includes('proces-verbaal')) return `${base} In dit dossier draait het vooral om: ${(S.current.bewijsmiddelen||[]).join(', ')}. Bewijsniveau: ${S.current.bewijsniveau}.`;
  if(lower.includes('waarom')||lower.includes('hoezo')) return `${base} De relevante context is: ${S.current.kernvraag}`;
  if(lower.includes('straf')||lower.includes('eis')) return role==='Officier van justitie'?S.current.om_standpunt:`${base} Mogelijke sancties in deze zaak zijn: ${S.current.mogelijke_sancties}.`;
  return base;
}
function resetChat(){if($('messages')){$('messages').innerHTML=`<div class="msg system">Zittingschat geladen voor ${html(S.current.name)}. Vraag gericht naar bewijs, verweer, opzet, schade of persoonlijke omstandigheden.</div><div class="msg ai">Verdachte: ${html(caseAwareReply('Verdachte','start'))}</div>`}}
function addMsg(kind,text){$('messages').insertAdjacentHTML('beforeend',`<div class="msg ${kind}">${html(text)}</div>`);$('messages').scrollTop=$('messages').scrollHeight}
async function sendChat(){const input=$('chatInput');const text=input.value.trim();if(!text)return;const role=$('roleSelect').value;input.value='';addMsg('user',text);S.history.push({sender:'Rechter',text});const wait='w'+Date.now();$('messages').insertAdjacentHTML('beforeend',`<div id="${wait}" class="msg ai">${role}: denkt na...</div>`);const reply=await askAI(role,text);$(wait).textContent=`${role}: ${reply}`;S.history.push({sender:role,text:reply});$('messages').scrollTop=$('messages').scrollHeight}
function finishCase(){localStorage.setItem('done',String(Number(localStorage.getItem('done')||0)+1));renderDashboard();show('home')}
window.sendChat=sendChat;window.updateSentence=updateSentence;window.finishCase=finishCase;window.renderCases=renderCases;
function boot(){renderFilters();renderDashboard();renderCases();renderHeaderCase();resetChat();document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>renderDoc(t.dataset.doc)));$('chatInput').addEventListener('keydown',e=>{if(e.key==='Enter')sendChat()});}
boot();