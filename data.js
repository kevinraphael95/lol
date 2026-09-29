/* =========================================================
   BASE DE DONNÉES DES CHAMPIONS
   Ordre alphabétique. Chaque combo a ses touches écrites
   en AZERTY ET QWERTY. Les explications utilisent les
   marqueurs {Q}, {W}, {E}, {R} qui seront remplacés
   automatiquement selon la disposition du joueur.
========================================================= */

var CHAMPIONS = [
  /* ===================== A ===================== */
  {
    id: "akali",
    name: "Akali",
    title: "la Lame furtive",
    role: "Assassin / Mid",
    difficulty: 4,
    desc: "Ninja furtive. Excellente mobilité et burst magique. Sa fumée ({W}) la rend insaisissable.",
    gameplan: "Akali excelle dans les combats courts. Utilise {Q} pour marquer, {E} pour te repositionner et {R} pour exécuter les cibles affaiblies. Sa fumée ({W}) la rend immortelle en 1v1 pendant sa durée.",
    spells: [
      { key: "P", name: "Marque de l'assassin", desc: "Les sorts d'Akali créent un anneau autour de la cible. Traverser l'anneau octroie un bonus de portée et de dégâts à la prochaine attaque." },
      { key: "Q", name: "Frappe des cinq points", desc: "Akali lance des kunais en cône, infligeant des dégâts magiques et ralentissant brièvement.", cd: "1.5s" },
      { key: "W", name: "Voile crépusculaire", desc: "Akali crée un nuage de fumée qui la rend invisible et augmente sa vitesse de déplacement.", cd: "20s" },
      { key: "E", name: "Cascade shuriken", desc: "Akali fait un salto arrière et lance un shuriken. Réactivé, elle dash vers la cible marquée.", cd: "16s" },
      { key: "R", name: "Exécution parfaite", desc: "Akali dash à travers les ennemis. Un second cast lui permet de se ruer sur une cible pour l'exécuter.", cd: "100s" }
    ],
    combos: [
      { name: "Combo d'exécution", tag: "Burst", keys_azerty: "AER", keys_qwerty: "QER", explain: "{Q} pour poke et marquer, {E} pour dash-in, {R} pour exécuter. Idéal sous 40% HP de la cible." },
      { name: "Combo de chase", tag: "Chase", keys_azerty: "EARA", keys_qwerty: "EQRE", explain: "{E} en premier pour te positionner, {Q} pour marquer, {R} pour exécuter puis {E} à nouveau pour te repositionner." }
    ]
  },

  /* ===================== L ===================== */
  {
    id: "leesin",
    name: "Lee Sin",
    title: "le Moine aveugle",
    role: "Combattant / Jungle",
    difficulty: 5,
    desc: "Le champion au plus haut plafond de compétence. Le fameux Insec est son combo signature.",
    gameplan: "Lee Sin est un jungler d'élite. Sa puissance vient des combos de repositionnement. Le {R} Insec consiste à dash sur un sbire ou une ward derrière l'ennemi, puis ultime pour le projeter vers ton équipe.",
    spells: [
      { key: "P", name: "Flurry", desc: "Après chaque sort, les deux prochaines auto-attaques de Lee Sin gagnent de la vitesse d'attaque et restaurent de l'énergie." },
      { key: "Q", name: "Onde sonique / Résonance", desc: "Lance une onde qui inflige des dégâts. Réactivé, Lee Sin dash sur la cible marquée.", cd: "11s" },
      { key: "W", name: "Volonté de fer / Protection", desc: "Lee Sin dash vers un allié ou une ward, gagnant un bouclier.", cd: "14s" },
      { key: "E", name: "Tempête / Volonté", desc: "Frappe le sol, infligeant des dégâts magiques et ralentissant les ennemis autour.", cd: "10s" },
      { key: "R", name: "Rage du dragon", desc: "Coup de pied puissant qui projette un ennemi en arrière, infligeant des dégâts aux cibles percutées.", cd: "110s" }
    ],
    combos: [
      { name: "Insec Combo", tag: "Signature", keys_azerty: "ZEAR", keys_qwerty: "WRQE", explain: "{W} sur un sbire/ward pour te placer derrière l'ennemi, {R} pour le projeter, {Q} pour finir. Le combo le plus impressionnant de Lee Sin." },
      { name: "Combo de burst", tag: "Burst", keys_azerty: "AAZE", keys_qwerty: "QQWE", explain: "{Q} pour toucher, {Q} à nouveau pour dash, {W} pour repositionner, {E} pour ralentir. Enchaîne vite pour le burst maximum." },
      { name: "Duel combo", tag: "Duel", keys_azerty: "AER", keys_qwerty: "QER", explain: "Combo simple : {Q} en engage, {E} pour ralentir, {R} pour projeter. Utilise {W} pour te shield en combat prolongé." }
    ]
  },

  /* ===================== N ===================== */
  {
    id: "neeko",
    name: "Neeko",
    title: "la Caméléonne curieuse",
    role: "Mage / Mid-Support",
    difficulty: 3,
    desc: "Mage à fort potentiel de pick grâce à son camouflage et son ultime de zone.",
    gameplan: "Neeko se joue comme un mage contrôle. {E} pour engager (root si elle traverse un sbire), {Q} pour poke, {W} pour te camoufler ou placer un clone, {R} pour ultime AoE dévastateur.",
    spells: [
      { key: "P", name: "Inné camouflage", desc: "Neeko peut prendre l'apparence d'un allié et gagner sa vitesse de déplacement de base." },
      { key: "Q", name: "Explosion florale", desc: "Neeko fait fleurir le sol, infligeant des dégâts magiques. Si la zone touche un ennemi ou meurt, elle explose à nouveau.", cd: "9s" },
      { key: "W", name: "Clone miroir", desc: "Neeko devient invisible, gagne en vitesse et envoie un clone qui marche dans une direction.", cd: "20s" },
      { key: "E", name: "Griffes enchevêtrées", desc: "Neeko lance une vrille qui inflige des dégâts et root. Traverser un ennemi la renforce et allonge le root.", cd: "12s" },
      { key: "R", name: "Floraison pop", desc: "Après un court délai, Neeko saute et inflige d'énormes dégâts AoE et un stun autour d'elle.", cd: "90s" }
    ],
    combos: [
      { name: "Combo de pick", tag: "Pick", keys_azerty: "EAZ", keys_qwerty: "EQW", explain: "{E} à travers un sbire pour root, {Q} pour le burst AoE, {W} pour te camoufler et disparaître." },
      { name: "Combo ultime", tag: "Teamfight", keys_azerty: "REA", keys_qwerty: "REQ", explain: "Active {R} en te cachant avec {W} pour surprendre, puis {E} pour enchaîner le root et {Q} pour les dégâts." }
    ]
  },

  /* ===================== R ===================== */
  {
    id: "riven",
    name: "Riven",
    title: "la Exilée",
    role: "Combattante / Top",
    difficulty: 4,
    desc: "Reine des combos et de l'animation cancel. Nécessite une exécution précise pour enchaîner les sorts rapidement.",
    gameplan: "Riven brille dans les duels grâce à ses animations cancel. Le {Q} fast combo consiste à auto-attaquer entre chaque {Q} pour maximiser les dégâts. Utilise {E} pour t'approcher ou te protéger, puis {W} pour stun et {R} pour finir.",
    spells: [
      { key: "P", name: "Lame runique", desc: "Les compétences de Riven chargent sa lame. Ses attaques infligent des dégâts physiques bonus proportionnels à sa puissance d'attaque." },
      { key: "Q", name: "Ailes brisées", desc: "Riven effectue trois attaques rapides. Chaque utilisation peut être combinée avec une auto-attaque pour cancel l'animation.", cd: "13s" },
      { key: "W", name: "Éclat de Ki", desc: "Riven étourdit les ennemis proches avec une onde de choc.", cd: "11s" },
      { key: "E", name: "Vagabonde", desc: "Riven dash dans la direction visée et gagne un bouclier temporaire.", cd: "10s" },
      { key: "R", name: "Lame de l'exil", desc: "Riven restaure sa lame et gagne attaque + portée. Un second cast lance une vague d'énergie qui inflige des dégâts en cône.", cd: "120s" }
    ],
    combos: [
      { name: "Fast Q Combo", tag: "Burst", keys_azerty: "AAAQ", keys_qwerty: "QQQA", explain: "Alterne auto-attaque et {Q} pour cancel les animations. Chaque {Q} doit être suivi d'un clic droit sur la cible puis d'un nouveau {Q}." },
      { name: "Combo d'engage", tag: "Engage", keys_azerty: "ZEAR", keys_qwerty: "EWQR", explain: "{E} pour dash + bouclier, {W} pour stun en zone, {Q} pour burst, {R} pour exécuter. Idéal pour ouvrir un combat." },
      { name: "Combo de fuite", tag: "Disengage", keys_azerty: "AZE", keys_qwerty: "QWE", explain: "Enchaîne les {Q} pour sauter par-dessus les murs puis {E} pour te repositionner rapidement." }
    ]
  },

  /* ===================== S ===================== */
  {
    id: "sona",
    name: "Sona",
    title: "la Virtuose de la harpe",
    role: "Support / Mid",
    difficulty: 2,
    desc: "Support musicale polyvalente. Alterne entre auras de dégâts, de soin et de vitesse pour soutenir son équipe.",
    gameplan: "Sona est un support de poke et de sustain. Utilise {Q} pour poke avec ton carry, {W} pour soigner, {E} pour accélérer ton équipe. Chaque 3e sort renforce son effet (accord). Ton ultime {R} est un stun en cône dévastateur en teamfight.",
    spells: [
      { key: "P", name: "Aria d'encouragement", desc: "Après 3 sorts, la prochaine auto-attaque de Sona inflige des dégâts magiques bonus et applique un effet selon le dernier sort utilisé." },
      { key: "Q", name: "Hymne à la bravoure", desc: "Sona inflige des dégâts magiques à deux ennemis proches et gagne une aura de dégâts pour elle et ses alliés.", cd: "8s" },
      { key: "W", name: "Aubade de la persévérance", desc: "Sona soigne un allié et gagne un bouclier, plus une aura de résistance pour son équipe.", cd: "10s" },
      { key: "E", name: "Chant de la célérité", desc: "Sona gagne un bonus de vitesse de déplacement et le partage en aura à ses alliés.", cd: "12s" },
      { key: "R", name: "Crescendo", desc: "Sona joue un accord puissant qui étourdit les ennemis dans un cône devant elle pendant 1.5s.", cd: "140s" }
    ],
    combos: [
      { name: "Poke + Sustain", tag: "Harass", keys_azerty: "AAZ", keys_qwerty: "QQW", explain: "Enchaîne {Q} pour poke puis {W} pour soigner ton carry. Idéal en phase de lane." },
      { name: "Engage ultime", tag: "Teamfight", keys_azerty: "ERZ", keys_qwerty: "ERW", explain: "{E} pour accélérer ton équipe, {R} pour stun le groupe ennemi, puis {W} pour soigner pendant le combat." },
      { name: "Full poke", tag: "Burst", keys_azerty: "AAAZ", keys_qwerty: "QQQW", explain: "Trois {Q} consécutifs pour charger l'accord (Aria), puis une auto-attaque renforcée. Idéal pour harceler en lane." }
    ]
  },
  {
    id: "soraka",
    name: "Soraka",
    title: "l'Enfant des étoiles",
    role: "Support / Mid",
    difficulty: 2,
    desc: "Support de soin emblématique. Capable de sauver un allié à travers toute la carte avec son ultime.",
    gameplan: "Soraka se joue en arrière-ligne. Place ton {E} sous les ennemis pour les silence, poke avec {Q} pour te soigner toi-même, et spam {W} pour maintenir ton carry en vie. Ton {R} soigne toute ton équipe, où qu'elle soit sur la carte.",
    spells: [
      { key: "P", name: "Salut", desc: "Soraka gagne 70% de vitesse de déplacement en se dirigeant vers un allié à faible PV." },
      { key: "Q", name: "Appel stellaire", desc: "Soraka invoque une étoile qui inflige des dégâts magiques et la soigne si elle touche un ennemi.", cd: "8s" },
      { key: "W", name: "Infusion astrale", desc: "Soraka soigne un allié au prix d'un coût en PV. Ne peut pas être lancé si elle n'a pas assez de vie.", cd: "6s" },
      { key: "E", name: "Équinoxe", desc: "Soraka crée une zone qui silence tous les ennemis à l'intérieur et les root à la fin de la zone.", cd: "20s" },
      { key: "R", name: "Vœu", desc: "Soraka soigne tous les alliés sur la carte, avec un bonus si l'allié est sous 40% PV.", cd: "160s" }
    ],
    combos: [
      { name: "Combo de sustain", tag: "Sustain", keys_azerty: "AW", keys_qwerty: "QW", explain: "{Q} pour poke et te soigner, puis {W} pour transférer cette vie à ton carry. Le combo de base de la lane." },
      { name: "Silence défensif", tag: "Utility", keys_azerty: "EW", keys_qwerty: "EW", explain: "{E} pour silence le carry ennemi ou bloquer une zone, puis {W} pour soigner ton allié blessé." },
      { name: "Sauvetage global", tag: "Ultimate", keys_azerty: "AE R", keys_qwerty: "QE R", explain: "{Q} pour te heal en urgence, {E} pour ralentir/silence l'ennemi, puis {R} pour soigner toute ton équipe à travers la carte." }
    ]
  },

  /* ===================== Y ===================== */
  {
    id: "yasuo",
    name: "Yasuo",
    title: "l'Insoumis",
    role: "Assassin / Mid",
    difficulty: 5,
    desc: "Samouraï du vent, basé sur les dashs et les knock-ups. Très mobile mais fragile s'il est mal joué.",
    gameplan: "Yasuo est un carry à haut risque. Son combo repose sur la tempête : accumule deux {Q} pour lancer une tornade (knock-up), puis dash avec {E} pour te placer, et {R} pour ultime sur la cible projetée en l'air.",
    spells: [
      { key: "P", name: "Voie du vagabond", desc: "Yasuo gagne un bouclier de flux en se déplaçant. Sa vitesse de critique est doublée mais ses dégâts critiques réduits." },
      { key: "Q", name: "Acier tempêtueux", desc: "Yasuo frappe en cône. Deux stacks transforment la prochaine attaque en tornade qui projette les ennemis en l'air.", cd: "4s" },
      { key: "W", name: "Mur de vent", desc: "Yasuo invoque un mur qui bloque tous les projectiles ennemis pendant quelques secondes.", cd: "26s" },
      { key: "E", name: "Lame du vent", desc: "Yasuo dash à travers une cible en infligeant des dégâts magiques. Peut être réutilisé rapidement.", cd: "0.5s" },
      { key: "R", name: "Tempête d'acier", desc: "Yasuo se téléporte sur une cible projetée en l'air et inflige des dégâts critiques AoE.", cd: "80s" }
    ],
    combos: [
      { name: "Combo standard", tag: "All-in", keys_azerty: "EARA", keys_qwerty: "EQRE", explain: "{E} sur un sbire pour approcher, {Q} pour la tornade, {R} pour ultime, {E} à nouveau pour poursuivre. Nécessite 2 stacks de {Q} avant le {E}." },
      { name: "Poke rapide", tag: "Harass", keys_azerty: "AAZA", keys_qwerty: "QQEQ", explain: "Empile les {Q} sur les sbires, {E} pour te rapprocher et poke avec {Q}. Repositionne-toi avec {E} en sortant." },
      { name: "Air combo", tag: "Combo", keys_azerty: "EA", keys_qwerty: "EQ", explain: "Le combo de base : {E} pour dash puis {Q} immédiatement pour toucher en mouvement." }
    ]
  },

  /* ===================== Z ===================== */
  {
    id: "zed",
    name: "Zed",
    title: "le Maître des ombres",
    role: "Assassin / Mid",
    difficulty: 4,
    desc: "Maître des ombres. Assassin AD mobile avec des burst monocibles dévastateurs.",
    gameplan: "Zed domine les assassinats. Son combo classique utilise l'ombre ({W}) pour se positionner, puis {R} sur la cible, et enchaîne les {Q} et {E} pour burst. Ultime = mobilité + marque de mort sur la cible.",
    spells: [
      { key: "P", name: "Marque de la mort", desc: "Les attaques de Zed contre les cibles à faible PV infligent des dégâts magiques bonus." },
      { key: "Q", name: "Shuriken tranchant", desc: "Zed lance un shuriken qui inflige des dégâts physiques. Toucher avec plusieurs shurikens inflige moins de dégâts par shuriken supplémentaire.", cd: "6s" },
      { key: "W", name: "Ombre vivante", desc: "Zed projette une ombre qui copie ses sorts. Réactivé, il swap vers l'ombre.", cd: "22s" },
      { key: "E", name: "Coup des ombres", desc: "Zed et ses ombres tranchent, infligeant des dégâts AoE et ralentissant les cibles.", cd: "5s" },
      { key: "R", name: "Marque de la mort", desc: "Zed devient inarrêtable, dash vers la cible et la marque. La marque explose après 3s pour un % des dégâts infligés.", cd: "120s" }
    ],
    combos: [
      { name: "Combo d'assassinat", tag: "Assassination", keys_azerty: "ZEAR", keys_qwerty: "WQRE", explain: "{W} pour envoyer l'ombre, {Q} pour toucher, {R} pour dash sur la cible, {E} pour le burst. Repositionne-toi avec {W} (recall)." },
      { name: "Combo Shadow", tag: "Mobility", keys_azerty: "ZERZ", keys_qwerty: "WEWR", explain: "Place {W} devant, {E} pour ralentir, puis {W} à nouveau pour swap vers l'ombre. Utilisé pour kite ou repositionner en combat." },
      { name: "All-in complet", tag: "All-in", keys_azerty: "RZEA", keys_qwerty: "RWEQ", explain: "{R} en engage direct, {W} pour placer une ombre, {E} puis {Q} pour maximiser les dégâts. Récupère de l'énergie avec les sorts qui touchent la même cible." }
    ]
  },
  {
    id: "ziggs",
    name: "Ziggs",
    title: "l'Expert en explosifs",
    role: "Mage / Mid-Bot",
    difficulty: 3,
    desc: "Artilleur à distance. Poke et push énormes, capable de détruire des tourelles avec son {W}.",
    gameplan: "Ziggs est un mage de siège. Utilise {Q} pour poke à distance, {E} pour zoner les entrées, {W} pour te repositionner ou détruire les tourelles. Ton {R} est une bombe globale dévastatrice en teamfight.",
    spells: [
      { key: "P", name: "Mèche courte", desc: "La prochaine auto-attaque de Ziggs inflige des dégâts magiques bonus. Le cooldown est réduit à chaque sort lancé." },
      { key: "Q", name: "Bombe rebondissante", desc: "Ziggs lance une bombe qui rebondit. Elle explose au contact d'un ennemi ou après 3 rebonds.", cd: "6s" },
      { key: "W", name: "Charge explosive", desc: "Ziggs lance une charge qui projette les ennemis et peut endommager les tourelles.", cd: "20s" },
      { key: "E", name: "Champ de mines", desc: "Ziggs disperse des mines qui explosent au contact, ralentissant les ennemis.", cd: "16s" },
      { key: "R", name: "Méga bombe infernale", desc: "Ziggs lance une bombe géante à longue portée qui inflige d'énormes dégâts AoE au centre.", cd: "120s" }
    ],
    combos: [
      { name: "Combo de poke", tag: "Poke", keys_azerty: "AEA", keys_qwerty: "QEQ", explain: "{Q} pour poke, {E} pour poser une zone de mines, {Q} à nouveau pour punir l'ennemi qui avance." },
      { name: "Zone + burst", tag: "Zone", keys_azerty: "EAZ", keys_qwerty: "EQW", explain: "{E} pour couper la retraite, {Q} pour poke pendant qu'il est ralenti, {W} pour le repousser vers toi." },
      { name: "Combo ultime", tag: "Teamfight", keys_azerty: "ZEAR", keys_qwerty: "WEQR", explain: "{W} pour knock-up, {E} pour poser des mines dessous, {Q} pour poke, {R} pour finir les blessés." }
    ]
  }
];
