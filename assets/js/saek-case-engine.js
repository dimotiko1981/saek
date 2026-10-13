/* SAEK · κοινός μηχανισμός πέντε διαγνωστικών αποστολών
   Η εμφάνιση, τα βήματα, οι εικόνες και οι μετρήσεις διατηρούνται ανά όχημα.
   Κεντρική λογική: Εκπαίδευση / Αξιολόγηση, απαντήσεις, βαθμολόγηση, υποβολή, PDF.
   Το εργαλείο των 25 τυχαίων σεναρίων χρησιμοποιεί διαφορετική δομή και δεν αλλάζει.
*/
(()=>{'use strict';
function mount(config){
const steps=config.steps, visual=config.visual, reportTitle=config.reportTitle;
if(!Array.isArray(steps)||steps.length===0||typeof visual!=='function'||!reportTitle){throw Error('SAEK: invalid diagnostic configuration');}
const $=id=>document.getElementById(id);
let index=0,mode='training',name='',correct=0,answered=false,selected=null,records=[],finalDiagnosis='',finalConfidence='';
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a};
const show=id=>{['start','game','submission','finish'].forEach(k=>$(k).classList.toggle('hidden',k!==id));window.scrollTo({top:0,behavior:'instant'});};
const clean=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function draw(){const s=steps[index];answered=false;selected=null;$('step-tag').textContent=s.tag;$('step-title').textContent=s.title;$('step-text').textContent=s.text;$('task-note').textContent=s.note;$('visual').innerHTML=visual(s);$('progress-tag').textContent=`ΣΤΑΔΙΟ ${index+1} / ${steps.length}`;$('mode-tag').textContent=mode==='training'?'ΛΕΙΤΟΥΡΓΙΑ ΕΚΠΑΙΔΕΥΣΗΣ':'ΛΕΙΤΟΥΡΓΙΑ ΑΞΙΟΛΟΓΗΣΗΣ';$('points-tag').textContent=mode==='training'?`${correct}/${index} ΣΩΣΤΕΣ`:'ΑΠΟΤΕΛΕΣΜΑΤΑ ΣΤΟ ΤΕΛΟΣ';$('bar-fill').style.width=(100*index/steps.length)+'%';$('feedback').classList.add('hidden');$('feedback').classList.remove('bad');$('feedback').replaceChildren();$('next').disabled=true;$('next').textContent=index===steps.length-1?(mode==='assessment'?'Σύνταξη τελικής διάγνωσης →':'Ολοκλήρωση περιστατικού →'):'Επόμενο στάδιο →';const options=shuffle(s.options.map((value,i)=>({value,correct:i===s.correct})));$('answers').replaceChildren();for(const [i,opt] of options.entries()){let b=document.createElement('button');b.type='button';b.className='answer';b.innerHTML='<b>'+['Α','Β','Γ'][i]+'</b><span>'+clean(opt.value)+'</span>';b.addEventListener('click',()=>submitAnswer(opt,b,options));$('answers').appendChild(b);}}
function submitAnswer(opt,b,options){if(answered)return;answered=true;selected=opt;const s=steps[index];if(opt.correct)correct++;records.push({stage:index+1,title:s.title,choice:opt.value,correct:opt.correct,right:s.options[s.correct],why:s.why,other:s.other});for(let i=0;i<options.length;i++){const el=$('answers').children[i];el.disabled=true;if(mode==='training'&&options[i].correct)el.classList.add('right');}if(mode==='training'){if(!opt.correct)b.classList.add('wrong');$('points-tag').textContent=correct+'/'+(index+1)+' ΣΩΣΤΕΣ';const f=$('feedback');f.classList.toggle('bad',!opt.correct);f.innerHTML='<strong>'+(opt.correct?'✓ Σωστή διαγνωστική απόφαση':'✕ Χρειάζεται επανεξέταση')+'</strong><p>'+clean(s.why)+'</p><p><b>Γιατί όχι οι άλλες επιλογές:</b> '+clean(s.other)+'</p>';f.classList.remove('hidden');}else{const f=$('feedback');f.innerHTML='<strong>Η απάντηση καταχωρίστηκε.</strong><p>Οι λύσεις και η βαθμολογία θα εμφανιστούν μόνο μετά την οριστική υποβολή της τελικής διάγνωσης.</p>';f.classList.remove('hidden');}$('next').disabled=false;}
function done(){
 show('finish');
 $('score').textContent=Math.round(correct*100/steps.length)+'%';
 $('result-head').textContent=correct===steps.length?'Η διαγνωστική αποστολή ολοκληρώθηκε άριστα.':'Η διαγνωστική αποστολή ολοκληρώθηκε.';
 $('result-meta').textContent=`${name} · ${correct}/${steps.length} σωστές αποφάσεις · ${mode==='training'?'Εκπαίδευση':'Αξιολόγηση'}`;
 const conclusion=$('submission-result');conclusion.replaceChildren();
 if(mode==='assessment'){
   const head=document.createElement('strong');head.textContent='Η τελική διάγνωση που υπέβαλες';
   const p=document.createElement('p');p.textContent=finalDiagnosis;
   const conf=document.createElement('small');conf.textContent='Δηλωμένη βεβαιότητα: '+finalConfidence;
   conclusion.append(head,p,conf);conclusion.classList.remove('hidden');
 }else conclusion.classList.add('hidden');
 $('review').replaceChildren();records.forEach(r=>{
  const d=document.createElement('details');d.className='review-item';
  const summary=document.createElement('summary');summary.textContent=(r.correct?'✓':'✕')+` Στάδιο ${r.stage} — ${r.title}`;d.append(summary);
  for(const text of [`Επιλογή: ${r.choice}`,`Σωστή διαγνωστική απόφαση: ${r.right}`,r.why,`Οι άλλες επιλογές: ${r.other}`]){
   const p=document.createElement('p');p.textContent=text;d.append(p);
  }$('review').append(d);
 });
}
$('begin').addEventListener('click',()=>{index=0;correct=0;records=[];mode=document.querySelector('input[name="mode"]:checked').value;const pair=document.querySelector('input[name="team"]:checked').value==='pair';name=[$('student').value.trim()||'Καταρτιζόμενος',...(pair?[$('student2').value.trim()||'Συνεργάτης']:[])].join(' & ');finalDiagnosis='';finalConfidence='';
 $('final-diagnosis').value='';$('submission-error').textContent='';$('submission-error').classList.add('hidden');
 document.querySelectorAll('input[name="confidence"]').forEach(x=>x.checked=false);
 document.querySelectorAll('[data-report]').forEach(x=>{x.value='';x.readOnly=false;});
 $('case-report').open=false;$('case-report').querySelector('summary').textContent='Προαιρετικό δελτίο διάγνωσης';
 (mode==='assessment'?$('submission-report-slot'):$('finish-report-slot')).appendChild($('case-report'));
 draw();show('game');});
document.querySelectorAll('input[name="team"]').forEach(r=>r.addEventListener('change',()=>{$('pair-wrap').classList.toggle('hidden',document.querySelector('input[name="team"]:checked').value!=='pair')}));
$('next').addEventListener('click',()=>{if(!answered)return;if(index===steps.length-1){if(mode==='assessment')show('submission');else done();}else{index++;draw();window.scrollTo({top:0,behavior:'instant'})}});

$('submit-final').addEventListener('click',()=>{
 if(mode!=='assessment'||!answered||index!==steps.length-1)return;
 const diagnosis=$('final-diagnosis').value.trim();
 const conf=document.querySelector('input[name="confidence"]:checked');
 if(!diagnosis||!conf){
   $('submission-error').textContent='Για να υποβάλεις την αξιολόγηση, συμπλήρωσε την τελική διάγνωση και επίλεξε έναν βαθμό βεβαιότητας.';
   $('submission-error').classList.remove('hidden');
   if(!diagnosis)$('final-diagnosis').focus();
   return;
 }
 finalDiagnosis=diagnosis;finalConfidence=conf.value;
 $('submission-error').classList.add('hidden');
 $('finish-report-slot').appendChild($('case-report'));
 document.querySelectorAll('[data-report]').forEach(x=>x.readOnly=true);
 $('case-report').querySelector('summary').textContent='Υποβληθέν προαιρετικό δελτίο διάγνωσης';
 done();
});
$('cancel-final').addEventListener('click',()=>{if(confirm('Θέλεις να σταματήσεις; Η πρόοδος θα χαθεί.'))show('start')});
$('quit').addEventListener('click',()=>{if(confirm('Θέλεις να σταματήσεις; Η πρόοδος θα χαθεί.'))show('start')});
$('retry').addEventListener('click',()=>show('start'));
function openPrintableReport(){
  if(document.getElementById('finish').classList.contains('hidden') || records.length!==steps.length) return;
  const readings=s=>{
    const temp=document.createElement('div');temp.innerHTML=visual(s);
    return [...temp.querySelectorAll('.meter-val, .display strong, .read-row, .tablet-screen .row, .sim-badge, .osc-note')].map(x=>x.textContent.trim().replace(/\s+/g,' ')).filter(Boolean).slice(0,9).join(' · ');
  };
  SAEKServiceReport.open({
    title:reportTitle,name:name,mode:mode,correct:correct,total:steps.length,
    finalDiagnosis:mode==='assessment'?finalDiagnosis:'',confidence:mode==='assessment'?finalConfidence:'',
    notes:[...document.querySelectorAll('[data-report]')].filter(e=>e.value.trim()).map(e=>({label:e.dataset.report,value:e.value.trim()})),
    items:records.map(r=>{const s=steps[r.stage-1];return {
      title:r.title,description:[s.text,s.note].filter(Boolean).join('\n'),reading:readings(s),
      choice:r.choice,right:r.right,why:r.why,correct:r.correct
    };})
  });
}
$('print-report').addEventListener('click',openPrintableReport);

}
window.SAEKCaseEngine=Object.freeze({mount});
})();
