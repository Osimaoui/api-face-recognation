import { Link } from 'react-router-dom';

const serviceHighlights = [
  {
    title: "Installation et configuration",
    description:
      "Teledyne s’engage à assurer la bonne mise en service de vos équipements sur site à travers la configuration et réglage des équipements vendus. Spécialistes dans l'intégration de solutions, nous accompagnons pour le déploiement et tests des applications et logiciels.",
    image: '/images/services/installation.svg',
  },
  {
    title: 'Maintenance et SAV',
    description:
      'Prolongez la durée de vie de vos terminaux, scanners et imprimantes au-delà de la garantie offerte grâce à nos services de support sur-mesure. Nos équipes formées et certifiées vous offrent interventions sur site ou dans nos ateliers pour les réparations, gestions préventives, entretiens, remplacements… et ce dans les meilleurs délais.',
    image: '/images/services/sav.svg',
  },
  {
    title: "Développement d'applications",
    description:
      "Grâce à notre équipe de développeurs expérimentés nous fournissons des réponses techniques aux besoins d’optimisation des opérations et de chaîne logistique. En utilisant les technologies émergentes, nous nous occupons de votre projet de l'analyse des besoins jusqu'au déploiement.",
    image: '/images/services/developpement.svg',
  },
  {
    title: "Monitoring d'infrastructure",
    description:
      "Profitez d’une tranquillité d'esprit pendant que votre réseau est surveillé et optimisé. Que ce soit par souci de fiabilité, de sécurité et/ou de performance, notre service de monitoring vous permet une visibilité en temps réel de l’ensemble de vos réseaux en vous fournissant des informations et analyses pertinentes.",
    image: '/images/services/monitoring.svg',
  },
];

export function ServicesPage() {
  return (
    <div className="services-page">
      <section className="hero-small hero-service service-hero">
        <div className="container service-hero__grid">
          <div className="service-hero__copy">
            <div className="breadcrumb">
              <Link to="/">Accueil</Link> / <span>Services</span>
            </div>
            <div className="pill pill-light">Services TELEDYNE</div>
            <h1>Accompagnement clé en main pour vos opérations</h1>
            <p className="lead">
              Support, maintenance, intégration, développement sur-mesure et monitoring de vos infrastructures pour sécuriser vos investissements et accélérer vos projets.
            </p>
            <div className="hero-tags">
              <span>Depuis 1995</span>
              <span>Experts certifiés</span>
              <span>Support de proximité</span>
            </div>
            <div className="cta-row">
              <Link className="btn btn-primary" to="/contact">
                Planifier un échange
              </Link>
              <Link className="btn btn-outline" to="/a-propos/qui-sommes-nous">
                Découvrir TELEDYNE
              </Link>
            </div>
          </div>

          <div className="service-hero__panel">
            <div className="panel-meta">
              <span className="pill">Proximité & expertise</span>
              <p>
                Nous vous proposons un ensemble de services de proximité, un support et une expertise locale, mis en place et perfectionnés au fil des projets réalisés depuis 1995.
              </p>
              <p>
                Si vous souhaitez en savoir plus ou discuter de vos projets, rendez-vous sur notre page de{' '}
                <Link className="link-highlight" to="/contact">
                  <strong>
                    contact
                    <span className="icon-inline" aria-hidden="true">
                      ↗
                    </span>
                  </strong>
                </Link>
                . Nous sommes impatients de vous aider à réaliser vos projets.
              </p>
            </div>
            <div className="panel-stats">
              <div className="stat-card">
                <strong>48h</strong>
                <span>Délais moyens d'intervention</span>
              </div>
              <div className="stat-card">
                <strong>1000+</strong>
                <span>Équipements maintenus en production</span>
              </div>
              <div className="stat-card">
                <strong>24/7</strong>
                <span>Surveillance & monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-rich">
        <div className="container service-panels">
          <div className="section-header">
            <div>
              <p className="eyebrow">Notre accompagnement</p>
              <h2>Des services structurés pour chaque étape</h2>
              <p className="section-lead">
                De l'audit à la maintenance, nos équipes dédiées sécurisent vos déploiements et assurent la continuité de vos opérations critiques.
              </p>
            </div>
            <Link className="btn btn-outline" to="/contact">
              Discuter d'un projet
            </Link>
          </div>
          <div className="services-grid">
            {serviceHighlights.map((item) => (
              <div key={item.title} className="service-card">
                <div className="service-icon bounce" aria-hidden="true">
                  <img src={item.image} alt="" loading="lazy" />
                </div>
                <div className="service-card__body">
                  <h3 className="h2-custom">{item.title}</h3>
                  <p className="text-justify">{item.description}</p>
                </div>
                <div className="service-card__footer">
                  <Link className="btn btn-text" to="/contact">
                    Parler avec un expert
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container service-process">
          <div className="process-card">
            <div className="process-header">
              <p className="eyebrow">Méthodologie</p>
              <h3>Une approche claire et pilotée</h3>
              <p className="section-lead">
                Nous orchestrons chaque projet selon des jalons précis pour garantir la qualité, la traçabilité et la performance de bout en bout.
              </p>
            </div>
            <div className="process-steps">
              <div className="step">
                <span className="step-index">01</span>
                <div>
                  <h4>Audit & cadrage</h4>
                  <p>Analyse de vos besoins, cartographie des flux et définition des KPI opérationnels.</p>
                </div>
              </div>
              <div className="step">
                <span className="step-index">02</span>
                <div>
                  <h4>Déploiement & intégration</h4>
                  <p>Configuration des équipements, tests applicatifs et mise en service encadrée.</p>
                </div>
              </div>
              <div className="step">
                <span className="step-index">03</span>
                <div>
                  <h4>Support & amélioration continue</h4>
                  <p>Maintenance proactive, monitoring 24/7 et itérations pour optimiser vos performances.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
