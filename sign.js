/* © مدرسة شمس الوطن — توقيع Khadija Abdlhadi */
(function () {
  if (window.__kaSign) return; window.__kaSign = 1;
  var me = document.currentScript, pos = (me && me.getAttribute('data-pos')) || 'left';
  var lift = Math.max(0, parseInt((me && me.getAttribute('data-bottom')) || '0', 10) || 0);
  var NAME = 'Khadija Abdlhadi', AR = 'خديجة عبد الهادي';
  var f = document.createElement('link'); f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Tajawal:wght@500;700&display=swap';
  document.head.appendChild(f);
  function mount() {
    var host = document.createElement('div'); host.id = 'ka-signature';
    var root = host.attachShadow ? host.attachShadow({ mode: 'closed' }) : host;
    var side = pos === 'right' ? 'right' : 'left';
    root.innerHTML = '<style>' +
      ':host{all:initial;position:fixed;bottom:calc(' + (10 + lift) + 'px + env(safe-area-inset-bottom,0px));' + side + ':calc(10px + env(safe-area-inset-' + side + ',0px));z-index:2147483000;font-family:Tajawal,system-ui,sans-serif}' +
      '@media print{:host{display:none}}' +
      '.pill{display:flex;align-items:center;gap:8px;height:38px;padding:0 14px 0 4px;border-radius:999px;background:linear-gradient(135deg,rgba(12,36,58,.94),rgba(16,96,120,.94));box-shadow:0 4px 16px rgba(0,0,0,.28);border:1px solid rgba(255,214,140,.6);cursor:pointer;direction:ltr;-webkit-tap-highlight-color:transparent;transition:padding .45s}' +
      '.pill:focus-visible{outline:2px solid #ffe7a8;outline-offset:2px}' +
      '.mono{width:30px;height:30px;border-radius:50%;background:conic-gradient(from 200deg,#f5c063,#fff1c9,#f5a623,#13a3ad,#f5c063);display:grid;place-items:center;font:700 12px/1 Georgia,"Times New Roman",serif;color:#10243a;letter-spacing:.6px;flex:none;box-shadow:inset 0 0 0 2px rgba(255,255,255,.55)}' +
      '.name{font-family:"Great Vibes","Brush Script MT",cursive;font-size:22px;line-height:1;white-space:nowrap;padding-top:2px;color:#ffe7a8;background:linear-gradient(90deg,#ffe7a8,#ffffff 45%,#f5c063);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;max-width:190px;overflow:hidden;opacity:1;transition:max-width .5s,opacity .35s}' +
      '.small .name{max-width:0;opacity:0}.small{padding:0 4px;opacity:.85}' +
      '.card{position:absolute;bottom:48px;' + side + ':0;width:236px;padding:16px 14px 14px;border-radius:18px;background:linear-gradient(160deg,#0c243a,#0f5f76);color:#fff;text-align:center;direction:rtl;box-shadow:0 10px 30px rgba(0,0,0,.35);border:1px solid rgba(255,214,140,.6);display:none}' +
      '.open .card{display:block}' +
      '.big{font-family:"Great Vibes","Brush Script MT",cursive;font-size:34px;line-height:1.1;direction:ltr;background:linear-gradient(90deg,#ffe7a8,#fff 45%,#f5c063);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}' +
      '.ar{font-weight:700;font-size:15px;margin-top:4px}.role{font-size:12.5px;opacity:.85;margin-top:2px}' +
      '.line{height:1px;margin:10px 18px;background:linear-gradient(90deg,transparent,rgba(255,214,140,.8),transparent)}' +
      '.copy{font-size:11.5px;opacity:.8}' +
      '@media (prefers-reduced-motion:reduce){.pill,.name{transition:none}}' +
      '</style>' +
      '<div class="wrap"><div class="card" role="dialog" aria-label="عن التطبيق"><div class="big">' + NAME + '</div><div class="ar">' + AR + '</div><div class="role">تصميم وتطوير</div><div class="line"></div><div class="copy">© مدرسة شمس الوطن. جميع الحقوق محفوظة.</div></div>' +
      '<div class="pill" role="button" tabindex="0" aria-label="توقيع ' + NAME + '"><span class="mono">KA</span><span class="name">' + NAME + '</span></div></div>';
    var wrap = root.querySelector('.wrap'), pill = root.querySelector('.pill');
    var t = setTimeout(function () { pill.classList.add('small'); }, 5000);
    function toggle(e) { e.stopPropagation(); clearTimeout(t); wrap.classList.toggle('open'); pill.classList.toggle('small', !wrap.classList.contains('open')); }
    pill.addEventListener('click', toggle);
    pill.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(e); } });
    document.addEventListener('click', function () { if (wrap.classList.contains('open')) { wrap.classList.remove('open'); pill.classList.add('small'); } });
    (document.body || document.documentElement).appendChild(host);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
