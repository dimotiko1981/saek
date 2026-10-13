/* SAEK · Standalone printable educational diagnostic report · no data sent to a server. */
(function (global) {
  'use strict';
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt = (v) => esc(v || 'Δεν καταχωρίστηκε');
  const line = (label, value) => `<div class="fact"><small>${esc(label)}</small><div>${fmt(value)}</div></div>`;
  const safeNotes = (o) => Array.isArray(o) ? o.filter((v) => v && String(v.value || '').trim()).map((v) => line(v.label, v.value)).join('') : '';
  function createHTML(data) {
    if (!data || !Array.isArray(data.items) || !data.items.length) throw new Error('Δεν υπάρχουν ολοκληρωμένες διαγνωστικές αποφάσεις.');
    const total = Number(data.total) || data.items.length;
    const correct = Number(data.correct) || 0;
    const percent = Math.round(correct * 100 / total);
    const simulation = data.items.length >= 20;
    const now = new Date().toLocaleString('el-GR', {dateStyle:'medium',timeStyle:'short'});
    const rows = data.items.map((item, index) => {
      const detail = [
        item.description ? line('Δεδομένα περιστατικού / εκφώνηση', item.description) : '',
        item.reading ? line('Ενδείξεις και μετρήσεις της προσομοίωσης', item.reading) : '',
        line('Επιλογή καταρτιζομένου', item.choice),
        line('Ορθότερη διαγνωστική απόφαση', item.right),
        line('Τεχνική αιτιολόγηση', item.why),
        safeNotes(item.notes)
      ].join('');
      return `<article class="case ${item.correct ? 'good':'review'}"><div class="case-heading"><span class="case-num">${index+1 < 10 ? '0':''}${index+1}</span><h3>${esc(item.title || 'Διαγνωστικό στάδιο')}</h3><span class="case-status">${item.correct ? 'ΣΩΣΤΟ':'ΠΡΟΣ ΕΠΑΝΕΞΕΤΑΣΗ'}</span></div><div class="case-facts">${detail}</div></article>`;
    }).join('');
    const notes = safeNotes(data.notes || []);
    return `<!doctype html><html lang="el"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ΣΑΕΚ · Διαγνωστική αναφορά · ${esc(data.title || '')}</title>
<style>
:root{font-family:Arial,Helvetica,system-ui,sans-serif;color:#183044;background:#e9f1f5}*{box-sizing:border-box}body{margin:0}.toolbar{max-width:980px;margin:0 auto;display:flex;align-items:center;gap:16px;justify-content:space-between;padding:18px 20px}.toolbar p{margin:0;font-size:13px;color:#35546c}.toolbar button{background:#126e8f;border:0;border-radius:10px;color:white;padding:12px 20px;font:inherit;font-weight:700;cursor:pointer}.toolbar button:hover{background:#0a5673}.page{max-width:980px;background:white;margin:0 auto 45px;padding:38px 45px;box-shadow:0 15px 60px #19374925}header{border-bottom:3px solid #147e9d;padding-bottom:22px;display:flex;justify-content:space-between;gap:18px}.eyebrow{text-transform:uppercase;color:#0782a1;font-size:11px;font-weight:800;letter-spacing:.1em}h1{font-size:29px;letter-spacing:-.03em;margin:8px 0}h2{font-size:17px;color:#17445d;margin:0 0 13px}h3{font-size:13px;line-height:1.4;margin:0}p{line-height:1.58;white-space:pre-wrap;overflow-wrap:anywhere}.tag{display:inline-flex;padding:8px 12px;background:#edf7fa;border-radius:8px;font-size:12px;color:#17617a;font-weight:700;align-self:start}.metadata{display:grid;grid-template-columns:repeat(3,1fr);gap:13px;margin:25px 0}.field{padding:13px;border:1px solid #d6e4eb;border-radius:9px;background:#f8fbfd;min-width:0}.field span,.fact small{display:block;color:#4f6b80;font-size:11px;font-weight:700;margin-bottom:6px}.field strong,.fact div{font-size:13px;font-weight:500;white-space:pre-wrap;overflow-wrap:anywhere}.field strong{font-weight:700}.headline{padding:17px 20px;border:1px solid #b9d9e3;background:#f2fafb;border-radius:12px;display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:24px}.headline strong{font-size:30px;color:#0b718a}.headline small{display:block;font-size:11px;color:#456277}.section{margin-top:29px}.facts{display:grid;grid-template-columns:1fr 1fr;gap:12px}.fact{border-left:3px solid #99c9d7;background:#f7fafb;padding:10px 12px;min-width:0}.fact div{line-height:1.5}.wide{grid-column:1/-1}.note{color:#496579;font-size:12px;margin:8px 0}.case{page-break-inside:avoid;break-inside:avoid;border:1px solid #d9e5eb;border-radius:10px;margin:12px 0;padding:15px}.case-heading{display:flex;align-items:center;gap:10px;padding-bottom:9px;border-bottom:1px solid #dfe8ee}.case-num{font-size:13px;color:#137e9d;font-weight:800;min-width:25px}.case-heading h3{flex:1}.case-status{white-space:nowrap;font-size:10px;padding:5px 7px;background:#e2f5ed;color:#12604b;border-radius:6px;font-weight:800}.case.review .case-status{background:#fff2e9;color:#944d21}.case-facts{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}.case-facts .fact{padding:8px 10px}.case-facts .fact:nth-child(1),.case-facts .fact:nth-child(2){grid-column:1/-1}.case-facts .fact:nth-child(5){grid-column:1/-1}.case-facts .fact:only-child{grid-column:1/-1}.rubric{border:1px solid #cadfe8;border-radius:10px;padding:17px}.rubric-row{display:grid;grid-template-columns:1fr auto;gap:15px;align-items:center;padding:11px 0;border-bottom:1px solid #dfebf1;font-size:13px}.rubric-row select{border:1px solid #a8c9d7;background:white;padding:7px;border-radius:5px;font:inherit;min-width:118px}.rubric label{font-size:12px;font-weight:700;color:#3b6072}.rubric input,.rubric textarea{display:block;width:100%;margin-top:7px;font:inherit;border:1px solid #a8c9d7;border-radius:6px;padding:10px;background:white}.rubric textarea{min-height:64px;resize:vertical}.rubric-score{display:flex;align-items:center;justify-content:space-between;gap:10px;background:#edf7fa;padding:14px;margin:13px 0;font-size:13px;font-weight:700}.rubric-score b{color:#166c85;font-size:21px}.footer{border-top:1px solid #d3e1e7;margin-top:34px;padding-top:14px;color:#637e8b;font-size:11px;line-height:1.6}section{page-break-inside:auto}.small{font-size:12px}.no-data{color:#68808f;font-style:italic}.case-facts .fact:nth-child(n+6){grid-column:1/-1}input:focus-visible,select:focus-visible,textarea:focus-visible,button:focus-visible{outline:3px solid #56b7d1;outline-offset:2px}
@media(max-width:680px){.page{padding:24px 17px;margin-bottom:0}.toolbar{flex-wrap:wrap}.metadata,.facts,.case-facts{grid-template-columns:1fr}.metadata{gap:8px}.case-facts .fact{grid-column:auto!important}.case-heading{flex-wrap:wrap}.headline{align-items:flex-start;flex-direction:column}.tag{font-size:10px}}
@page{size:A4;margin:15mm 12mm}@media print{:root{background:white}body{background:white;color:black;-webkit-print-color-adjust:exact;print-color-adjust:exact}.toolbar{display:none}.page{max-width:none;padding:0;margin:0;box-shadow:none}header{padding-top:0}h1{font-size:24px}.metadata{margin:17px 0}.section{margin-top:21px}.case{break-inside:avoid;page-break-inside:avoid}.rubric{break-inside:avoid}.rubric input,.rubric textarea,.rubric select{border-color:#7d9aa7}}
</style></head><body>
<div class="toolbar"><p><strong>ΣΑΕΚ · Εκτυπώσιμη αναφορά Α4</strong><br>Για PDF: Εκτύπωση → Προορισμός «Αποθήκευση ως PDF».</p><button onclick="window.print()" type="button">Εκτύπωση / Αποθήκευση PDF</button></div>
<main class="page"><header><div><div class="eyebrow">ΣΑΕΚ · Δίκτυα και Επικοινωνία Οχημάτων</div><h1>Τελική διαγνωστική αναφορά</h1><div class="small">${esc(data.title || 'Εκπαιδευτική διαγνωστική αποστολή')}</div></div><div class="tag">ΕΚΠΑΙΔΕΥΤΙΚΟ ΣΕΝΑΡΙΟ</div></header>
<div class="metadata"><div class="field"><span>Καταρτιζόμενος / ομάδα</span><strong>${fmt(data.name)}</strong></div><div class="field"><span>Λειτουργία</span><strong>${data.mode === 'assessment' ? 'Αξιολόγηση' : 'Εκπαίδευση'}</strong></div><div class="field"><span>Ημερομηνία έκδοσης</span><strong>${esc(now)}</strong></div></div>
<div class="headline"><div><small>ΑΥΤΟΜΑΤΗ ΕΠΙΔΟΣΗ ΕΠΙΛΟΓΩΝ</small><strong>${percent}%</strong></div><div><small>ΣΩΣΤΕΣ ΔΙΑΓΝΩΣΤΙΚΕΣ ΑΠΟΦΑΣΕΙΣ</small><strong>${correct} / ${total}</strong></div></div>
<section class="section"><h2>${simulation ? 'Συνοπτική τεκμηρίωση βάρδιας' : 'Τελική διαγνωστική εκτίμηση'}</h2><div class="facts">${line(simulation ? 'Τεχνική εκτίμηση του καταρτιζομένου' : 'Διάγνωση που υπέβαλε ο καταρτιζόμενος', data.finalDiagnosis || (data.mode === 'assessment' ? 'Δεν καταχωρίστηκε' : 'Δεν απαιτείται στη λειτουργία Εκπαίδευσης'))}${line('Δηλωμένη βεβαιότητα', data.confidence || (data.mode === 'assessment' ? 'Δεν καταχωρίστηκε' : 'Δεν απαιτείται στη λειτουργία Εκπαίδευσης'))}${notes}</div><p class="note">Το κείμενο τεκμηρίωσης και η βεβαιότητα δεν προσμετρώνται στην αυτόματη επίδοση.</p></section>
<section class="section"><h2>${simulation ? '25 περιστατικά — επιλογές και ενδείξεις' : 'Στάδια διάγνωσης — αποφάσεις, ενδείξεις και αιτιολόγηση'}</h2>${rows}</section>
<section class="section rubric"><h2>Αξιολόγηση τεχνικής τεκμηρίωσης · Συμπληρώνεται από τον εκπαιδευτή</h2><p class="note">Ανεξάρτητη παιδαγωγική αξιολόγηση, δεν τροποποιεί το αυτόματο ποσοστό. Σε κάθε κριτήριο: 0 = ανεπαρκές, 1 = μερικώς τεκμηριωμένο, 2 = επαρκώς τεκμηριωμένο.</p>
${['Καταγραφή συμπτωμάτων και δεδομένων','Επιλογή κατάλληλων διαγνωστικών ελέγχων','Αιτιολόγηση πιθανής αιτίας / αποκλεισμός εναλλακτικών','Πρόταση επαλήθευσης και ασφαλούς διαδικασίας'].map((t, i) => `<div class="rubric-row"><label for="rubric-${i}">${i+1}. ${esc(t)}</label><select id="rubric-${i}" data-rubric aria-label="Βαθμός κριτηρίου ${i+1}"><option value="">— / 2</option><option value="0">0 / 2</option><option value="1">1 / 2</option><option value="2">2 / 2</option></select></div>`).join('')}
<div class="rubric-score"><span>Ξεχωριστή αξιολόγηση εκπαιδευτή</span><b id="rubric-total">— / 8</b></div><label>Ονοματεπώνυμο εκπαιδευτή<input type="text" placeholder="Συμπληρώνεται από τον εκπαιδευτή"></label><label style="display:block;margin-top:12px">Παρατηρήσεις εκπαιδευτή<textarea placeholder="Τι τεκμηριώθηκε επαρκώς και τι χρειάζεται επανεξέταση;"></textarea></label></section>
<div class="footer">Τα περιστατικά, οι κωδικοί και οι ενδείξεις αποτελούν εκπαιδευτικές προσομοιώσεις και δεν πιστοποιούν βλάβη σε πραγματικό όχημα. Οι πραγματικές μετρήσεις και επισκευές γίνονται βάσει τεχνικής τεκμηρίωσης κατασκευαστή και κανόνων ασφαλείας.</div>
</main><script>(function(){var selects=Array.prototype.slice.call(document.querySelectorAll('[data-rubric]'));var output=document.getElementById('rubric-total');function update(){var filled=selects.filter(function(s){return s.value!==''});output.textContent=filled.length===selects.length?(filled.reduce(function(n,s){return n+Number(s.value)},0)+' / 8'):('— / 8 ('+filled.length+'/4 κριτήρια)')}selects.forEach(function(s){s.addEventListener('change',update)});update()})();<\/script></body></html>`;
  }
  function open(data) {
    const w = global.open('', '_blank');
    if (!w) {global.alert('Επίτρεψε τα αναδυόμενα παράθυρα για να ανοίξει η εκτυπώσιμη αναφορά.'); return false;}
    try {
      w.document.open();
      w.document.write(createHTML(data));
      w.document.close();
      w.focus();
      return true;
    } catch (e) {try {w.close();} catch (_) {} global.alert('Δεν ήταν δυνατή η δημιουργία της αναφοράς.'); return false;}
  }
  global.SAEKServiceReport = Object.freeze({open, createHTML});
})(window);
