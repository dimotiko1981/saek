/* SAEK · Teacher-led presentation mode (display only, no game-state changes).
   Deliberately not saved in storage: shared workshop computers start in standard mode.
*/
(()=>{'use strict';
  const button=document.querySelector('[data-classroom-toggle]');
  if(!button)return;
  const label=button.querySelector('[data-classroom-label]');
  function render(active){
    document.documentElement.classList.toggle('saek-classroom-mode',active);
    button.setAttribute('aria-pressed',String(active));
    label.textContent=active?'Κανονική προβολή':'Προβολή τάξης';
    button.title=active?'Επαναφορά κανονικών μεγεθών':'Μεγαλύτερα γράμματα και διαγνωστικές ενδείξεις για προβολή στον πίνακα';
  }
  button.addEventListener('click',()=>render(!document.documentElement.classList.contains('saek-classroom-mode')));
  render(false);
})();
