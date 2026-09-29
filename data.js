/* =========================================================
   BASE DE DONNÉES DES CHAMPIONS
   Chaque combo a ses touches écrites en AZERTY ET QWERTY.
   Les explications utilisent les marqueurs {Q}, {W}, {E}, {R}
   qui seront remplacés automatiquement selon la disposition.
========================================================= */

var CHAMPIONS = [
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
      {
        name: "Fast Q Combo",
        tag: "Burst",
        keys_azerty: "AAAQ",
        keys_qwerty: "QQQA",
        explain: "Alterne auto-attaque et {Q} pour cancel les animations. Chaque {Q} doit être suivi d'un clic droit sur la cible puis d'un nouveau {Q}."
      },
      {
        name: "Combo d'engage",
        tag: "Engage",
        keys_azerty: "ZEAR",
        keys_qwerty: "EWQR",
        explain: "{E} pour dash + bouclier, {W} pour stun en zone, {Q} pour burst, {R} pour exécuter. Idéal pour ouvrir un combat."
      },
      {
        name: "Combo de fuite",
        tag: "Disengage",
        keys_azerty: "AZE",
        keys_qwerty: "QWE",
        explain: "Enchaîne les {Q} pour sauter par-dessus les murs puis {E} pour te repositionner rapidement."
      }
    ]
  },
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
      {
        name: "Combo standard",
        tag: "All-in",
        keys_azerty: "EARA",
        keys_qwerty: "EQRE",
        explain: "{E} sur un sbire pour approcher, {Q} pour la tornade, {R} pour ultime, {E} à nouveau pour poursuivre. Nécessite 2 stacks de {Q} avant le {E}."
      },
      {
        name: "Poke rapide",
        tag: "Harass",
        keys_azerty: "AAZA",
        keys_qwerty: "QQEQ",
        explain: "Empile les {Q} sur les sbires, {E} pour te rapprocher et poke avec {Q}. Repositionne-toi avec {E} en sortant."
      },
      {
        name: "Air combo",
        tag: "Combo",
        keys_azerty: "EA",
        keys_qwerty: "EQ",
        explain: "Le combo de base : {E} pour dash puis {Q} immédiatement pour toucher en mouvement."
      }
    ]
  },
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
      {
        name: "Insec Combo",
        tag: "Signature",
        keys_azerty: "ZEAR",
        keys_qwerty: "WRQE",
        explain: "{W} sur un sbire/ward pour te placer derrière l'ennemi, {R} pour le projeter, {Q} pour finir. Le combo le plus impressionnant de Lee Sin."
      },
      {
        name: "Combo de burst",
        tag: "Burst",
        keys_azerty: "AAZE",
        keys_qwerty: "QQWE",
        explain: "{Q} pour toucher, {Q} à nouveau pour dash, {W} pour repositionner, {E} pour ralentir. Enchaîne vite pour le burst maximum."
      },
      {
        name: "Duel combo",
        tag: "Duel",
        keys_azerty: "AER",
        keys_qwerty: "QER",
        explain: "Combo simple : {Q} en engage, {E} pour ralentir, {R} pour projeter. Utilise {W} pour te shield en combat prolongé."
      }
    ]
  },
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
      {
        name: "Combo d'assassinat",
        tag: "Assassination",
        keys_azerty: "ZEAR",
        keys_qwerty: "WQRE",
        explain: "{W} pour envoyer l'ombre, {Q} pour toucher, {R} pour dash sur la cible, {E} pour le burst. Repositionne-toi avec {W} (recall)."
      },
      {
        name: "Combo Shadow",
        tag: "Mobility",
        keys_azerty: "ZERZ",
        keys_qwerty: "WEWR",
        explain: "Place {W} devant, {E} pour ralentir, puis {W} à nouveau pour swap vers l'ombre. Utilisé pour kite ou repositionner en combat."
      },
      {
        name: "All-in complet",
        tag: "All-in",
        keys_azerty: "RZEA",
        keys_qwerty: "RWEQ",
        explain: "{R} en engage direct, {W} pour placer une ombre, {E} puis {Q} pour maximiser les dégâts. Récupère de l'énergie avec les sorts qui touchent la même cible."
      }
    ]
  },
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
      {
        name: "Combo d'exécution",
        tag: "Burst",
        keys_azerty: "AER",
        keys_qwerty: "QER",
        explain: "{Q} pour poke et marquer, {E} pour dash-in, {R} pour exécuter. Idéal sous 40% HP de la cible."
      },
      {
        name: "Combo de chase",
        tag: "Chase",
        keys_azerty: "EARA",
        keys_qwerty: "EQRE",
        explain: "{E} en premier pour te positionner, {Q} pour marquer, {R} pour exécuter puis {E} à nouveau pour te repositionner."
      }
    ]
  },
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
      {
        name: "Combo de pick",
        tag: "Pick",
        keys_azerty: "EAZ",
        keys_qwerty: "EQW",
        explain: "{E} à travers un sbire pour root, {Q} pour le burst AoE, {W} pour te camoufler et disparaître."
      },
      {
        name: "Combo ultime",
        tag: "Teamfight",
        keys_azerty: "REA",
        keys_qwerty: "REQ",
        explain: "Active {R} en te cachant avec {W} pour surprendre, puis {E} pour enchaîner le root et {Q} pour les dégâts."
      }
    ]
  }
];
