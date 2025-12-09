import { Link } from 'react-router-dom';

const productHighlights = [
  {
    title: "Imprimantes d'étiquettes",
    description:
      "Large sélection d'imprimantes performantes certifiées. Fiables, durables et rapides, elles s'adaptent aux environnements et volumes d'impression.",
    cta: '/produits/imprimantes',
    image:
      'https://images.unsplash.com/photo-1582719478248-54e9f2af9607?auto=format&fit=crop&w=1600&q=80',
    align: 'left',
  },
  {
    title: 'Scanners de code à barres',
    description:
      "Lecture 1D/2D pour optimiser la traçabilité de vos opérations. Douchettes et scanners intelligents adaptés à chaque application.",
    cta: '/produits/scanners',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    align: 'right',
  },
  {
    title: 'Terminaux embarqués',
    description:
      "Terminaux robustes pour véhicules et environnements industriels, optimisés pour la productivité des opérateurs.",
    cta: '/produits/terminaux-embarques',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
    align: 'left',
  },
  {
    title: 'Terminaux mobiles',
    description:
      'PDA et smartphones durcis avec collecte et partage de données en temps réel, prêts pour les missions exigeantes.',
    cta: '/produits/terminaux-mobiles',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80',
    align: 'right',
  },
  {
    title: 'Logiciels',
    description:
      "Offres logicielles cloud simples et sécurisées pour intégrer vos équipements et atteindre l'excellence opérationnelle.",
    cta: '/produits/logiciels',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    align: 'left',
  },
  {
    title: 'Tablettes industrielles',
    description:
      'Tablettes robustes et étanches, résistantes aux impacts, à la poussière et aux températures extrêmes.',
    cta: '/produits/tablettes-industrielles',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
    align: 'right',
  },
  {
    title: 'Infrastructure Wi-Fi',
    description:
      'Points d’accès et gestion nouvelle génération pour une infrastructure flexible et sécurisée.',
    cta: '/produits',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80',
    align: 'left',
  },
  {
    title: 'Consommables pour impression',
    description:
      'Étiquettes, rubans et consommables code-barres & RFID pour minimiser le TCO et garantir la pérennité.',
    cta: '/produits/consommables',
    image:
      'https://images.unsplash.com/photo-1527443224154-d2e0c485900f?auto=format&fit=crop&w=1600&q=80',
    align: 'right',
  },
];

export function ProductsPage() {
  return (
    <div className="products-page">
      <section className="hero-small hero-products">
        <div className="container hero-products__grid">
          <div className="hero-products__intro">
            <div className="breadcrumb">
              <Link to="/">Accueil</Link> / <span>Produits</span>
            </div>
            <div className="pill pill-light">Nos produits</div>
            <h1>Technologies sélectionnées et supportées</h1>
            <p className="lead text-white">
              Nous promouvons les meilleures technologies du marché avec un haut niveau de support, de disponibilité des
              pièces et de conformité. Chaque équipement est retenu pour réduire le TCO et garantir la pérennité des
              solutions.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" to="/contact">
                Discuter d'un besoin
              </Link>
              <Link className="btn btn-outline" to="/services">
                Découvrir nos services
              </Link>
            </div>
          </div>
          <div className="hero-products__panel">
            <div className="hero-products__badge">Depuis 1995</div>
            <p className="text-white">
              Relation directe avec les constructeurs, maîtrise du circuit d'approvisionnement et support local pour
              sécuriser vos déploiements.
            </p>
            <ul className="product-hero-list">
              <li>Audit technologique & sélection</li>
              <li>Disponibilité pièces & maintenance</li>
              <li>Accompagnement intégration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="products-highlight">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Portefeuille</p>
              <h2>La gamme adaptée à vos opérations</h2>
              <p className="section-lead">
                Une sélection couvrant impression, capture de données, mobilité et connectivité industrielle pour
                sécuriser vos opérations quotidiennes.
              </p>
            </div>
            <Link className="btn btn-outline" to="/recherche?q=produits">
              Chercher un modèle
            </Link>
          </div>

          <div className="product-highlight-grid">
            {productHighlights.map((item) => (
              <div key={item.title} className={`product-highlight-card align-${item.align}`}>
                <div className="product-highlight-media" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="product-highlight-overlay" />
                </div>
                <div className="product-highlight-body">
                  <p className="eyebrow">{item.title}</p>
                  <h3>{item.title}</h3>
                  <p className="text-justify">{item.description}</p>
                  <div className="card-bottom">
                    <Link className="btn btn-primary" to={item.cta}>
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
