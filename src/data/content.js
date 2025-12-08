export const navLinks = {
  produits: [
    { label: "Imprimantes", to: "/produits/imprimantes" },
    { label: "Scanners", to: "/produits/scanners" },
    { label: "Terminaux mobiles", to: "/produits/terminaux-mobiles" },
    { label: "Terminaux embarqués", to: "/produits/terminaux-embarques" },
    { label: "Tablettes industrielles", to: "/produits/tablettes-industrielles" },
    { label: "Logiciels", to: "/produits/logiciels" },
    { label: "Consommables", to: "/produits/consommables" }
  ],
  solutions: [
    { label: "Industrie", to: "/solutions/industrie" },
    { label: "Distribution", to: "/solutions/distribution" },
    { label: "Santé", to: "/solutions/sante" },
    { label: "Logistique", to: "/solutions/logistique" },
    { label: "Banque", to: "/solutions/banque" },
    { label: "Services publics", to: "/solutions/services-publics" },
    { label: "Gestion des inventaires", to: "/solutions/gestion-des-inventaires" }
  ],
  aPropos: [
    { label: "Qui sommes-nous", to: "/a-propos/qui-sommes-nous" },
    { label: "Carrières", to: "/a-propos/carrieres" }
  ]
};

export const products = [
  {
    slug: "imprimantes",
    title: "Imprimantes industrielles",
    description: "Thermiques, laser et étiquettes pour haute cadence.",
    bullets: ["Gestion centralisée", "Résolution jusqu'à 600 dpi", "Connectivité IoT"]
  },
  {
    slug: "scanners",
    title: "Scanners et lecteurs de codes",
    description: "Lecture 1D/2D, mains libres, convoyeurs et postes mobiles.",
    bullets: ["OCR et DPM", "Durcis IP65", "SDK multi-plateforme"]
  },
  {
    slug: "terminaux-mobiles",
    title: "Terminaux mobiles",
    description: "Android/Windows pour terrain, inventaires et force de vente.",
    bullets: ["Longue autonomie", "Connectivité sécurisée", "Gestion MDM"]
  },
  {
    slug: "terminaux-embarques",
    title: "Terminaux embarqués",
    description: "Postes fixes pour véhicules et lignes de production.",
    bullets: ["Écrans tactiles haute luminosité", "Montage robuste", "WI-FI/4G"]
  },
  {
    slug: "tablettes-industrielles",
    title: "Tablettes industrielles",
    description: "Normées chantier et milieux contraints, accessoires étendus.",
    bullets: ["IP65/IP67", "Stylet et gants", "Hot-swap batteries"]
  },
  {
    slug: "logiciels",
    title: "Logiciels métiers",
    description: "Suite de traçabilité, WMS, MES et middleware d'impression.",
    bullets: ["Connecteurs ERP", "Reporting temps réel", "No-code workflows"]
  },
  {
    slug: "consommables",
    title: "Consommables",
    description: "Étiquettes, rubans, cartes et kits de nettoyage certifiés.",
    bullets: ["Haute adhérence", "Résistants chimiques", "Stocks sécurisés"]
  }
];

export const solutions = [
  {
    slug: "industrie",
    title: "Industrie",
    description: "Traçabilité temps réel sur lignes de production et qualité.",
    bullets: ["Serialisation", "Contrôle qualité", "Maintenance connectée"]
  },
  {
    slug: "distribution",
    title: "Distribution",
    description: "Inventaire magasin, click & collect et pricing dynamique.",
    bullets: ["Etiquetage électronique", "RFID", "Self-scanning"]
  },
  {
    slug: "sante",
    title: "Santé",
    description: "Sécurisation des flux patients, pharmacie et blocs opératoires.",
    bullets: ["Bracelets patients", "LIMS", "UDI/IVDR"]
  },
  {
    slug: "logistique",
    title: "Logistique",
    description: "Optimisation des préparations, cross-dock et livraisons.",
    bullets: ["Vocal picking", "Proof of delivery", "Tracking colis"]
  },
  {
    slug: "banque",
    title: "Banque",
    description: "Capture documentaire sécurisée et vérification d'identité.",
    bullets: ["KYC", "Archivage conforme", "Signature électronique"]
  },
  {
    slug: "services-publics",
    title: "Services publics",
    description: "Identification, délivrance sécurisée et mobilité terrain.",
    bullets: ["Cartes sécurisées", "IoT urbain", "Applications mobiles"]
  },
  {
    slug: "gestion-des-inventaires",
    title: "Gestion des inventaires",
    description: "Inventaires multi-sites et audit des stocks en temps réel.",
    bullets: ["Dashboards", "Alertes", "RFID/Barcode"]
  }
];

export const services = [
  {
    title: "Support technique",
    description: "Hotline, diagnostic à distance et guides interactifs.",
    cta: "Obtenir de l'aide"
  },
  {
    title: "Maintenance & réparation",
    description: "Centres agréés, contrats SLA et prêts de matériel.",
    cta: "Planifier"
  },
  {
    title: "Conseil & audit",
    description: "Études de flux, ROI et maquettes pilotes.",
    cta: "Parler à un expert"
  }
];

export const partners = [
  "Zebra Technologies",
  "Honeywell",
  "Datalogic",
  "Sato",
  "NiceLabel",
  "Ivanti Wavelink"
];

export const references = [
  { name: "Heppner", result: "-18% sur les erreurs de préparation" },
  { name: "Thales", result: "Traçabilité critique sécurisée" },
  { name: "Sanofi", result: "Sérialisation pharma déployée" }
];

export const aboutCards = [
  {
    slug: "qui-sommes-nous",
    title: "Qui sommes-nous",
    content: "30 ans d'intégration de solutions de traçabilité et d'impression industrielle."
  },
  {
    slug: "carrieres",
    title: "Carrières",
    content: "Rejoignez nos équipes projets, support et R&D partout en France."
  }
];
