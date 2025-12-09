import { Link } from 'react-router-dom';

const solutionCards = [
  {
    title: 'Distribution et points de vente',
    image: '/images/NosSolutions/1.webp',
    to: '/solutions/distribution',
  },
  {
    title: 'Entrepôt et supply chain',
    image: '/images/NosSolutions/2.webp',
    to: '/solutions/logistique',
  },
  {
    title: 'Industrie',
    image: '/images/NosSolutions/3.webp',
    to: '/solutions/industrie',
  },
  {
    title: 'Santé et pharma',
    image: '/images/NosSolutions/4.webp',
    to: '/solutions/sante',
  },
  {
    title: 'Banques et assurances',
    image: '/images/NosSolutions/banque-services-terciaire-assurance.webp',
    to: '/solutions/banque',
  },
  {
    title: 'Services publics',
    image: '/images/NosSolutions/services-publics.webp',
    to: '/solutions/services-publics',
  },
  {
    title: 'Gestion des inventaires',
    image: '/images/Inventaires/gestion_des_inventaires.webp',
    to: '/solutions/gestion-des-inventaires',
  },
];

export function SolutionsPage() {
  return (
    <div className="solutions-page">
      <section className="hero-small hero-solutions">
        <div className="container solutions-hero__grid">
          <div className="solutions-hero__intro">
            <div className="breadcrumb">
              <Link to="/">Accueil</Link> / <span>Solutions</span>
            </div>
            <div className="pill pill-light">Nos solutions</div>
            <h1>Conçues pour vos métiers</h1>
            <p className="lead text-white">
              TELEDYNE intervient dans les secteurs où le digital est clé. Nos solutions sont conçues pour répondre aux besoins de
              votre domaine d'activité.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" to="/contact">
                Discuter d'un projet
              </Link>
              <Link className="btn btn-outline" to="/a-propos/qui-sommes-nous">
                Découvrir TELEDYNE
              </Link>
            </div>
          </div>
          <div className="solutions-hero__panel">
            <div className="solutions-hero__badge">+25 ans d'expériences sectorielles</div>
            <p className="text-white">
              Distribution, logistique, santé, industrie ou secteur public : nous intégrons matériel, logiciels et services pour
              sécuriser la traçabilité et la performance opérationnelle.
            </p>
            <div className="solutions-hero__chips">
              <span>Audit & cadrage</span>
              <span>Déploiement</span>
              <span>Formation</span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-grid-section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Par secteur</p>
              <h2>Des solutions prêtes à déployer</h2>
              <p className="section-lead">
                Parcourez nos offres pour chaque domaine. Chaque carte renvoie vers une fiche dédiée avec cas d'usage et
                équipements recommandés.
              </p>
            </div>
            <Link className="btn btn-outline" to="/contact">
              Parler à un expert
            </Link>
          </div>

          <div className="solutions-cards">
            {solutionCards.map((card) => (
              <Link key={card.title} to={card.to} className="solution-card">
                <div className="solution-card__image">
                  <img src={card.image} alt={card.title} loading="lazy" />
                  <div className="solution-card__overlay" />
                </div>
                <div className="solution-card__body">
                  <h3>{card.title}</h3>
                  <span className="btn btn-text">
                    Découvrir
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
