/* Ma commune en clair : moteur commun à toutes les communes.
   Chaque commune fournit window.COMMUNE (voir saint-laurent-en-royans/data.js). */
(function () {
  // Lien de soutien (Ko-fi, Liberapay…). Laisser vide pour masquer le bouton.
  var LIEN_CAFE = '';
  var MAIL = 'hadrienbasch@gmail.com';

  var C = window.COMMUNE, D = 'decision';
  var GLOSSAIRE = {
    'CCAS': "Centre communal d'action sociale : aides sociales de la commune",
    'CCID': 'Commission communale des impôts directs : donne son avis sur les valeurs locatives',
    'ONF': 'Office national des forêts : gère les forêts publiques',
    'CITEO': "Organisme qui finance le tri et le recyclage des emballages",
    'ERP': 'Établissement recevant du public',
    'PV': 'Procès-verbal : le compte rendu officiel de la séance',
    'valeur locative': "Loyer théorique d'un logement, qui sert de base aux impôts locaux",
    'fonctionnement': 'Dépenses courantes : salaires, entretien, énergie…',
    'investissement': 'Dépenses durables : travaux, bâtiments, équipements…'
  };
  var CLES = Object.keys(GLOSSAIRE).sort(function (a, b) { return b.length - a.length; });
  var RE = new RegExp('\\b(' + CLES.map(function (k) { return k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')\\b');

  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function avecGlossaire(tag, cls, txt) {
    var e = el(tag, cls), reste = txt, deja = {};
    while (reste) {
      var m = reste.match(RE);
      if (!m || deja[m[1]]) { e.appendChild(document.createTextNode(reste)); break; }
      deja[m[1]] = true;
      e.appendChild(document.createTextNode(reste.slice(0, m.index)));
      var a = el('abbr', null, m[1]); a.title = GLOSSAIRE[m[1]] || GLOSSAIRE[m[1].toLowerCase()]; e.appendChild(a);
      reste = reste.slice(m.index + m[1].length);
    }
    return e;
  }
  function $(id) { return document.getElementById(id); }

  document.title = 'Ma commune en clair · ' + C.nom;
  $('lieu').textContent = C.nom + ' · ' + C.departement;
  $('lien-pv').href = C.lienPV;
  $('note-source').textContent = C.noteSource;
  $('mail-alerte').href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent('Alerte Ma commune en clair : ' + C.nom) + '&body=' + encodeURIComponent("Bonjour,\n\nJe souhaite recevoir un mail après chaque conseil municipal de " + C.nom + ".\n");
  if (LIEN_CAFE) { $('cafe').href = LIEN_CAFE; $('cafe').hidden = false; }
  $('imprimer').onclick = function () { window.print(); };

  var nDec = 0, nUna = 0, nSea = 0;
  C.seances.forEach(function (s) { if (s.points.length) nSea++; s.points.forEach(function (p) { if (p.k === D) { nDec++; if (p.unanime) nUna++; } }); });
  $('n-dec').textContent = nDec; $('n-sea').textContent = nSea; $('t-sea').textContent = C.periode;
  if (C.masquerUnanimite) { $('c-una').hidden = true; } else { $('n-una').textContent = nUna; }

  // Dossiers à suivre, avec leurs étapes dans le temps
  var zoneD = $('dossiers');
  C.dossiers.forEach(function (d) {
    var b = el('div', 'dossier');
    b.appendChild(el('small', null, d.etat));
    b.appendChild(el('strong', null, d.titre));
    var ul = el('ul', 'etapes');
    d.etapes.forEach(function (x) { var li = el('li'); li.appendChild(el('b', null, x[0] + ' : ')); li.appendChild(document.createTextNode(x[1])); ul.appendChild(li); });
    b.appendChild(ul); zoneD.appendChild(b);
  });

  // Budget en clair (si la commune en a un)
  if (C.budget) {
    $('bloc-budget').hidden = false;
    $('budget-titre').textContent = C.budget.titre;
    $('budget-texte').textContent = C.budget.texte;
    var tot = C.budget.parts.reduce(function (a, p) { return a + p.valeur; }, 0);
    var barre = $('budget-barre'), leg = $('budget-legende');
    C.budget.parts.forEach(function (p) {
      var s = el('span', null, Math.round(p.valeur / tot * 100) + ' %'); s.style.width = (p.valeur / tot * 100) + '%'; s.style.background = p.couleur; barre.appendChild(s);
      var l = el('span'); var i = el('i'); i.style.background = p.couleur; l.appendChild(i); l.appendChild(avecGlossaire('span', null, p.label + ' : ' + p.texte)); leg.appendChild(l);
    });
    $('budget-src').href = C.budget.source;
  }

  // Filtres
  var themes = ['Tout'].concat(C.themes), etat = { q: '', theme: 'Tout', votes: false };
  var zoneT = $('themes');
  themes.forEach(function (t) { var b = el('button', null, t); b.type = 'button'; b.onclick = function () { etat.theme = t; rendre(); }; zoneT.appendChild(b); });
  $('q').addEventListener('input', function (e) { etat.q = e.target.value; rendre(); });
  $('votes').addEventListener('change', function (e) { etat.votes = e.target.checked; rendre(); });

  function rendre() {
    var q = etat.q.trim().toLowerCase(), filtre = q !== '' || etat.theme !== 'Tout' || etat.votes, n = 0;
    zoneT.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b.textContent === etat.theme); });
    var box = $('seances'); box.textContent = '';
    C.seances.forEach(function (s) {
      var pts = s.points.filter(function (p) {
        return (etat.theme === 'Tout' || p.theme === etat.theme) && (!etat.votes || p.k === D) && (!q || (p.titre + ' ' + p.texte + ' ' + p.theme).toLowerCase().indexOf(q) !== -1);
      });
      n += pts.length;
      if (!pts.length && (filtre || !s.alerte)) return;
      var sec = el('section', 'seance'), tete = el('div', 'seance-tete');
      tete.appendChild(el('h3', null, s.titre));
      if (s.pv) { var a = el('a', null, s.lienTexte || 'Lire le procès-verbal officiel'); a.href = s.pv; tete.appendChild(a); }
      sec.appendChild(tete);
      if (s.alerte && !filtre) sec.appendChild(el('p', 'scan', s.alerte));
      var g = el('div', 'points');
      pts.forEach(function (p) {
        var art = el('article', p.k === D ? 'point' : 'point info'), tags = el('div', 'tags');
        tags.appendChild(el('span', p.k === D ? 'tag dec' : 'tag inf', p.k === D ? (C.labelDecision || 'Décision votée') : 'Information'));
        tags.appendChild(el('span', 'tag', p.theme));
        art.appendChild(tags);
        art.appendChild(el('h4', null, p.titre));
        art.appendChild(avecGlossaire('p', null, p.texte));
        if (p.vote) {
          var v = el('p', 'vote');
          v.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F5C6E" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
          v.appendChild(document.createTextNode(p.vote)); art.appendChild(v);
        }
        if (p.source) { var sp = el('p', 'src'); var sa = el('a', null, 'Source : ' + p.source[0]); sa.href = p.source[1]; sp.appendChild(sa); art.appendChild(sp); }
        g.appendChild(art);
      });
      sec.appendChild(g); box.appendChild(sec);
    });
    $('resultat').textContent = !filtre ? 'Toutes les séances, de la plus récente à la plus ancienne.' : (n === 0 ? 'Aucun point ne correspond. Essayez un autre mot ou un autre thème.' : (n === 1 ? '1 point correspond.' : n + ' points correspondent.'));
  }
  rendre();
})();
