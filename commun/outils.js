/* Boîte à outils Coup de pouce : éléments communs (rien n'est envoyé) */
(function(){
  const OUTILS=[
    ["courrier","Mon courrier expliqué","../coupdepouce/"],
    ["dossier","Dossier prêt","../dossier/"],
    ["budget","Mon budget","../budget/"],
    ["guichet","Au guichet","../guichet/"],
    ["urgence","Fiche d'urgence","../urgence/"]
  ];
  const ici=document.body.dataset.outil;
  const bar=document.getElementById("suite");
  if(bar){
    bar.setAttribute("aria-label","Les autres outils");
    OUTILS.forEach(([k,n,u])=>{const a=document.createElement("a");a.href=u;a.dataset.t=k;a.textContent=n;if(k===ici)a.setAttribute("aria-current","page");bar.append(a)});
  }
  /* bandeau des outils en test */
  const NOUVEAUX=["dossier","budget","guichet","urgence"];
  if(bar)bar.querySelectorAll("a").forEach(a=>{if(NOUVEAUX.includes(a.dataset.t)){const i=document.createElement("i");i.className="nv";i.textContent="nouveau";a.append(i)}});
  if(NOUVEAUX.includes(ici)){const hero=document.querySelector(".hero");if(hero){const b=document.createElement("p");b.className="beta";
    b.innerHTML='<b>Nouveau · en test</b> Outil tout neuf. Si quelque chose ne marche pas ou n\'est pas clair, <a href="mailto:hadrienbasch@gmail.com?subject='+encodeURIComponent("Retour sur "+document.title)+'">écris-moi</a> : je corrige vite.';hero.prepend(b)}}
  const pied=document.getElementById("pied");
  if(pied){
    pied.innerHTML='<p class="sig hand">Fait avec soin, bénévolement.</p>'+
      '<p>Gratuit, sans publicité, sans compte et sans cookies. Ce que tu écris reste sur ton téléphone ou ton ordinateur : rien n\'est envoyé sur internet.</p>'+
      '<nav><a href="../">Tous les outils</a><a href="../coupdepouce/confidentialite.html">Confidentialité</a><a href="../coupdepouce/mentions-legales.html">Mentions légales</a><a href="mailto:hadrienbasch@gmail.com">Une erreur ? Écris-moi</a>'+
      (document.body.dataset.stocke?'<button type="button" id="toutEffacer">Tout effacer de cet appareil</button>':'')+'</nav>';
    const w=document.getElementById("toutEffacer");
    if(w)w.onclick=()=>{if(w.dataset.sure!=="1"){w.dataset.sure="1";w.textContent="Appuie encore pour confirmer";return}
      try{Object.keys(localStorage).filter(k=>k.startsWith("cdp-")).forEach(k=>localStorage.removeItem(k))}catch(e){}
      location.reload()};
  }
  /* taille du texte, mémorisée pour toute la collection */
  const sizes=document.querySelectorAll(".sizes button");
  const setFs=v=>{document.documentElement.style.setProperty("--fs",v+"px");sizes.forEach(b=>b.setAttribute("aria-pressed",b.dataset.fs===String(v)))};
  let fs="18";try{fs=localStorage.getItem("cdp-fs")||"18"}catch(e){}
  if(sizes.length){setFs(fs);sizes.forEach(b=>b.onclick=()=>{setFs(b.dataset.fs);try{localStorage.setItem("cdp-fs",b.dataset.fs)}catch(e){}})}
  /* petite mémoire locale */
  window.Memo={
    get(k,d){try{const v=localStorage.getItem("cdp-"+k);return v?JSON.parse(v):d}catch(e){return d}},
    set(k,v){try{localStorage.setItem("cdp-"+k,JSON.stringify(v))}catch(e){}}
  };
  window.$=id=>document.getElementById(id);
  window.h=(tag,props={},kids=[])=>{const e=document.createElement(tag);for(const[k,v]of Object.entries(props)){if(v==null||v===false)continue;if(k==="text")e.textContent=v;else if(k==="cls")e.className=v;else if(k.startsWith("on"))e[k]=v;else e.setAttribute(k,v===true?"":v)}(Array.isArray(kids)?kids:[kids]).forEach(c=>c!=null&&c!==false&&e.append(typeof c==="string"||typeof c==="number"?document.createTextNode(String(c)):c));return e};
  window.parler=(txt,lang)=>{if(!("speechSynthesis" in window))return false;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(txt);u.lang=lang||"fr-FR";u.rate=.92;const v=speechSynthesis.getVoices().find(v=>v.lang&&v.lang.toLowerCase().startsWith((lang||"fr").slice(0,2).toLowerCase()));if(v)u.voice=v;speechSynthesis.speak(u);return true};
})();
