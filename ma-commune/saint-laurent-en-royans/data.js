var D = 'decision', I = 'info', PV = 'https://www.saintlaurentenroyans.fr/wp-content/uploads/';
window.COMMUNE = {
  nom: 'Saint-Laurent-en-Royans', departement: 'Drôme',
  lienPV: 'https://www.saintlaurentenroyans.fr/ma-mairie/conseils-municipaux/',
  periode: "séances résumées, d'avril à juin 2026",
  noteSource: "Ces résumés s'appuient sur les procès-verbaux publiés sur le site de la mairie. Ils sont publics, mais longs, et deux d'entre eux ne sont publiés qu'en image scannée : impossible d'y chercher un mot.",
  themes: ['École et enfants', 'Argent', 'Cadre de vie', 'Santé et social', 'Vie locale', 'Mairie'],
  dossiers: [
    { etat: 'Livraison prévue le 2 novembre', titre: 'La nouvelle école', etapes: [['29 avril', 'objectif octobre 2026'], ['27 mai', 'retard dû aux intempéries, livraison le 2 novembre, maternelles en janvier 2027'], ['24 juin', 'pas de rafraîchissement prévu dans le chantier']] },
    { etat: "Piste à l'étude", titre: 'Un espace médical', etapes: [['29 avril', 'rencontre prévue avec les médecins'], ['27 mai', 'refus du projet sous la médiathèque, piste avec DAH le long des HLM']] },
    { etat: "Pas d'engagement", titre: 'Police pluri-communale', etapes: [['29 avril', '42 000 € pour un agent : jugé trop cher, autres solutions cherchées']] },
    { etat: 'Réunion publique annoncée', titre: 'Tri des déchets', etapes: [['27 mai', '16 poubelles de village remplacées, réunion sur les emplacements le 9 juillet']] }
  ],
  seances: [
    { titre: 'Conseil du 29 juillet 2026', pv: PV + '2026/09/PROCES-VERBAL-DU-29.07.2026-signe.pdf', alerte: "Ce procès-verbal a été publié en image scannée : il n'est pas encore résumé ici.", points: [] },
    { titre: 'Conseil du 24 juin 2026', pv: PV + '2026/07/PROCES-VERBAL-DU-24.06.2026.pdf', points: [
      { k: D, theme: 'École et enfants', titre: 'Cantine : les parents désinscrivent eux-mêmes leurs enfants', texte: 'Nouveau règlement périscolaire 2026-2027. Le repas augmente de 5 centimes, sauf pour les familles aux tarifs à 0,50 € et 1 €.', vote: '12 pour, 3 abstentions', unanime: false },
      { k: D, theme: 'Argent', titre: '2 777 € de factures impayées abandonnées', texte: 'Sommes que la commune ne pourra pas récupérer : 666,68 € (budget principal), 754,19 € (assainissement) et 1 356,14 € (eau).', vote: 'Unanimité, 15 voix (deux votes)', unanime: true },
      { k: D, theme: 'Mairie', titre: "L'ONF facturera les ventes de bois", texte: "Gratuitement, l'ONF émettra les factures électroniques des ventes de bois simples, pour la durée du mandat.", vote: 'Unanimité, 15 voix', unanime: true },
      { k: I, theme: 'École et enfants', titre: 'Nouvelle école : pas de rafraîchissement prévu', texte: "Le cahier des charges du chantier ne prévoit pas de système de rafraîchissement. Une rencontre avec le maître d'œuvre était prévue." },
      { k: I, theme: 'Santé et social', titre: 'Canicule : recensement des plus de 75 ans', texte: 'La mairie recense les habitants de plus de 75 ans fragiles ou isolés. En vigilance rouge, la fermeture des écoles serait envisagée.' },
      { k: I, theme: 'Vie locale', titre: "Fête de l'été : 150 vététistes, 58 doublettes", texte: "La mairie a financé le feu d'artifice, le DJ (850 €), les barnums, la sécurité et la Sacem." },
      { k: I, theme: 'Mairie', titre: 'Sénatoriales : le vote de la commune annulé', texte: 'Le préfet a annulé la désignation des délégués : la liste ne respectait pas la parité. Une nouvelle séance devait avoir lieu avant le 10 juillet.' }
    ]},
    { titre: 'Conseil du 5 juin 2026', pv: PV + '2026/07/PROCES-VERBAL-CM-du-05.06.26.pdf', points: [
      { k: D, theme: 'Santé et social', titre: 'Une commission « Affaires sociales » est créée', texte: 'Quatre élues et quatre habitantes. Le CCAS sera aussi réuni sur les aides aux loisirs et aux vacances.', vote: 'Unanimité, 14 voix', unanime: true },
      { k: D, theme: 'Mairie', titre: 'Les sujets de formation des élus sont fixés', texte: 'Urbanisme, marchés publics, transition écologique, gestion du personnel, risques… Crédits inscrits au budget chaque année, sans montant indiqué.', vote: 'Unanimité, 14 voix', unanime: true }
    ]},
    { titre: 'Conseil du 27 mai 2026', pv: PV + '2026/06/PROCES-VERBAL-DU-27.05.2026-2.pdf', points: [
      { k: D, theme: 'Cadre de vie', titre: '16 poubelles de village vont être remplacées', texte: 'La commune rejoint un projet commun avec la communauté de communes et CITEO pour le tri des emballages hors de la maison. Réunion sur les points de collecte le 9 juillet, puis réunion publique.', vote: 'Unanimité, 15 voix', unanime: true },
      { k: D, theme: 'Mairie', titre: 'Commission de contrôle de la liste électorale : nouveaux membres', texte: "Les adjoints, qui ne peuvent pas en faire partie, sont remplacés par d'autres conseillers.", vote: 'Unanimité, 15 voix', unanime: true },
      { k: I, theme: 'École et enfants', titre: 'Nouvelle école : livraison prévue le 2 novembre', texte: 'Retard dû aux intempéries. Le transfert des maternelles est demandé pour janvier 2027. Aucun emprunt contracté à ce stade.' },
      { k: I, theme: 'Santé et social', titre: 'Espace médical : nouvelle piste près des HLM', texte: 'Les médecins ne veulent pas du projet sous la médiathèque. Une piste est étudiée avec le promoteur DAH, le long des HLM.' },
      { k: I, theme: 'Mairie', titre: 'La mairie arrive sur Panneau Pocket', texte: "540 € pour trois ans et demi. L'application s'ajoute à Facebook, au site et au panneau d'affichage." },
      { k: I, theme: 'Vie locale', titre: 'Un conseil des jeunes et un conseil des aînés', texte: "Mise en place à partir de septembre. Repas ou colis au choix pour les aînés, avec des produits d'agriculteurs locaux." },
      { k: I, theme: 'Argent', titre: 'Bois de la parcelle n°6 : prix plancher atteint', texte: 'La vente a atteint le prix plancher de 11 000 €.' }
    ]},
    { titre: 'Conseil du 29 avril 2026', pv: PV + '2026/06/PROCES-VERBAL-DU-29.04.2026.pdf', points: [
      { k: D, theme: 'Cadre de vie', titre: 'Blattes dans le centre-bourg : la commune avance les frais', texte: "Une entreprise traite commerces, logements et réseau d'assainissement. La commune paie la facture puis se fait rembourser par les propriétaires concernés.", vote: 'Unanimité, 15 voix', unanime: true },
      { k: D, theme: 'Argent', titre: 'Électricité : achat groupé avec les communes de la Drôme', texte: "Adhésion au groupement de Territoire d'énergie Drôme pour 2028-2031, sans obligation d'y passer si un meilleur tarif est trouvé.", vote: 'Unanimité, 15 voix', unanime: true },
      { k: D, theme: 'Argent', titre: 'Forêt communale : deux parcelles de bois', texte: "Parcelle n°6 vendue aux enchères par l'ONF, parcelle n°7 exploitée en 2027.", vote: 'Unanimité, 15 voix', unanime: true },
      { k: D, theme: 'Mairie', titre: 'Secrétariat partagé avec Échevis', texte: 'La commune continue de prêter 5 heures de secrétariat par semaine à Échevis, pour la durée du mandat.', vote: 'Unanimité, 15 voix', unanime: true },
      { k: D, theme: 'Mairie', titre: 'Commission des impôts locaux : 21 noms proposés', texte: "Pour la CCID, l'administration fiscale choisira 6 titulaires et 6 suppléants parmi ces 21 contribuables.", vote: 'Unanimité, 15 voix', unanime: true },
      { k: I, theme: 'Cadre de vie', titre: 'Police pluri-communale : jugée trop chère', texte: "Coût proposé : 42 000 € pour un agent supplémentaire, avec un engagement jusqu'en 2032. La commune ne s'engage pas et cherche d'autres solutions." },
      { k: I, theme: 'Cadre de vie', titre: 'Chantier route de Buyet', texte: "Fin des travaux sur l'eau. Réseaux électriques et télécoms à partir du 18 mai, chaussée refaite à l'automne." },
      { k: I, theme: 'Santé et social', titre: 'Une mutuelle pour tous les habitants ?', texte: "La Région porte une mutuelle collective sans condition de ressources ni d'âge. La commune va se renseigner." }
    ]},
    { titre: 'Conseil du 1er avril 2026', pv: PV + '2026/04/Proces-Verbal-CM-du-1er-avril-2026.pdf', alerte: "Ce procès-verbal (probablement la séance du budget) a été publié en image scannée : il n'est pas encore résumé ici.", points: [] }
  ]
};
