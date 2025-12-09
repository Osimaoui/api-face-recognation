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
      <section className="hero-small hero-service">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> / <span>Services</span>
          </div>
          <h1>Services TELEDYNE</h1>
          <p className="lead">Support, maintenance, intégration et conseil.</p>
        </div>
      </section>

      <section className="services-rich">
        <div className="container">
          <div className="blue-container">
            <h1 className="title-custom text-warning">Nos services</h1>
            <p className="text-custom">
              Nous vous proposons un ensemble de services de proximité, un support et une expertise locale, mis en place et perfectionnés au fil des projets réalisés depuis 1995.
              <br />
              Si vous souhaitez en savoir plus sur nos services ou discuter de vos projets avec nous, vous pouvez visiter notre page de{' '}
              <Link className="text-warning link-highlight" to="/contact">
                <strong>
                  contact
                  <span className="icon-inline" aria-hidden="true">
                    ↗
                  </span>
                </strong>
              </Link>
              .
              <br />
              Nous sommes impatients de vous aider à réaliser vos projets.
            </p>
          </div>
        </div>

        <div className="container service-panels">
          <div className="services-grid">
            {serviceHighlights.map((item) => (
              <div key={item.title} className="service-card">
                <div className="service-icon bounce" aria-hidden="true">
                  <img src={item.image} alt="" loading="lazy" />
                </div>
                <h3 className="h2-custom">{item.title}</h3>
                <p className="text-justify">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
