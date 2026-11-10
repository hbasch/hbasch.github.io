var D = 'decision', I = 'info';
var MIM = ['Made in Marseille', 'https://madeinmarseille.net/actualite/212858-marseille-double-la-taxe-sur-les-logements-vacants/'];
var GOMET = ["Gomet'", 'https://gomet.net/conseil-municipal-de-marseille-derniers-echanges-tendus-avant-la-pause-estivale/'];
var DESTIMED = ['Destimed', 'https://www.destimed.fr/marseille-vote-un-budget-de-216-milliards-deuros-sans-hausse-dimpots-a-rebours-de-la-metropole/'];
window.COMMUNE = {
  nom: 'Marseille', departement: 'Bouches-du-Rhône',
  lienPV: 'https://www.marseille.fr/mairie/actualites/conseil-municipal',
  periode: "séances, d'avril à octobre 2026",
  masquerUnanimite: true,
  labelDecision: 'Délibération',
  noteSource: "Démonstration. Marseille examine plus de 150 rapports par séance (167 le 16 octobre 2026), et son site bloque la lecture automatique des procès-verbaux. Cette page s'appuie donc, pour l'instant, sur la presse locale : chaque point cite son article. Elle ne couvre que quelques décisions marquantes.",
  themes: ['Logement', 'École et enfants', 'Argent', 'Solidarité', 'Mairie'],
  budget: {
    titre: 'Le budget 2026 en clair',
    texte: '2,16 milliards d’euros votés le 29 avril 2026, sans hausse d’impôts.',
    parts: [
      { label: 'Fonctionnement', valeur: 1570, couleur: '#0F5C6E', texte: '1,57 milliard €' },
      { label: 'Investissement', valeur: 552, couleur: '#B5651D', texte: '552 millions €' }
    ],
    source: DESTIMED[1]
  },
  dossiers: [
    { etat: 'En vigueur au 1er janvier 2027', titre: 'Logements vides', etapes: [['16 octobre', 'taxe doublée sur les logements vacants depuis plus de deux ans : 14 000 à 16 000 logements visés']] },
    { etat: 'Depuis la rentrée 2026', titre: 'La cantine gratuite', etapes: [['26 juin', '15 000 enfants concernés au lieu de 10 000, petits-déjeuners gratuits dans six écoles de plus']] },
    { etat: 'Voté', titre: 'Le budget de la Ville', etapes: [['29 avril', 'budget 2026 de 2,16 milliards €'], ['26 juin', 'comptes 2025 présentés : 1,5 milliard € de recettes de fonctionnement']] }
  ],
  seances: [
    { titre: 'Conseil du 16 octobre 2026', pv: 'https://www.marseille.fr/mairie/actualites/conseil-municipal', lienTexte: 'Page officielle des conseils municipaux', points: [
      { k: D, theme: 'Logement', titre: 'La taxe sur les logements vides double', texte: "Pour les logements privés vacants depuis plus de deux ans : 30 % de la valeur locative la première année, 60 % la deuxième, dès le 1er janvier 2027. Recette attendue : environ 20 millions € par an, dont 6 à 9 millions grâce au doublement.", source: MIM },
      { k: I, theme: 'Mairie', titre: '167 rapports à l’ordre du jour', texte: 'Un seul conseil peut compter plus de 150 délibérations. C’est justement ce qui rend leur suivi difficile pour les habitants.', source: ['Marsactu', 'https://marsactu.fr/escale-borely-logements-vacants-et-rapport-crc-les-dossiers-chauds-du-conseil-municipal/'] }
    ]},
    { titre: 'Conseil du 26 juin 2026', pv: 'https://www.marseille.fr/sites/default/files/contenu/mairie/CM/reglement-interieur-du-conseil-municipal-adopte-26_06_2026.pdf', lienTexte: 'Règlement intérieur adopté ce jour-là', points: [
      { k: D, theme: 'École et enfants', titre: 'Cantine gratuite pour 5 000 enfants de plus', texte: '15 000 enfants au total à partir de septembre 2026, contre 10 000. Une quatrième tranche de tarif pour les familles les plus aisées, et des petits-déjeuners gratuits dans six écoles de plus (1 500 enfants).', source: GOMET },
      { k: D, theme: 'Solidarité', titre: 'Hébergement d’urgence : 1,1 million € de subventions', texte: 'Plusieurs subventions à des structures d’hébergement d’urgence, pour un total d’un peu plus de 1,1 million €.', source: GOMET },
      { k: I, theme: 'Argent', titre: 'Les comptes 2025 présentés', texte: 'Recettes de fonctionnement : 1,5 milliard €. Dépenses de fonctionnement : 1,4 milliard €.', source: GOMET },
      { k: I, theme: 'Argent', titre: 'Taxe de séjour : une hausse débattue', texte: 'Le taux retenu n’est pas précisé dans la source.', source: GOMET }
    ]},
    { titre: 'Conseil du 29 avril 2026', pv: 'https://www.marseille.fr/sites/default/files/contenu/mairie/CM/cm-extrait-pv-29_04_2026.pdf', lienTexte: 'Extrait du procès-verbal officiel', points: [
      { k: D, theme: 'Argent', titre: 'Budget 2026 : 2,16 milliards €, sans hausse d’impôts', texte: '1,57 milliard € de fonctionnement et 552 millions € d’investissement.', vote: 'Adopté. Le RN a voté contre, la droite et le centre se sont abstenus', source: DESTIMED }
    ]}
  ]
};
