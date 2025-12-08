import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { partners, products, references, services, solutions } from '../data/content';

export function Home() {
  const heroImages = [
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80'
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((current) => (current + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div>
      <section className="hero" aria-label="TELEDYNE hero">
        <div
          key={bgIndex}
          className="hero-bg"
          style={{
            backgroundImage: `url(${heroImages[bgIndex]})`
          }}
        />
        <div className="hero-overlay" />
        <div className="container hero-grid">
          <div>
            <div className="badge">Traçabilité & infrastructures IT</div>
            <h1>Matériels et solutions pour vos opérations critiques</h1>
            <p>
              TELEDYNE distribue et intègre imprimantes, scanners, terminaux mobiles et logiciels pour
              l'industrie, la logistique, la santé et la distribution.
            </p>
            <div className="search-box">
              <input type="search" placeholder="Rechercher un produit ou un secteur" />
              <Link className="btn btn-primary" to="/recherche?q=imprimante">
                Rechercher
              </Link>
            </div>
            <div className="tags">
              <span className="tag">Imprimantes</span>
              <span className="tag">Scanners</span>
              <span className="tag">Terminaux mobiles</span>
              <span className="tag">Logiciels</span>
            </div>
          </div>
          <div className="card">
            <h3>Pourquoi TELEDYNE ?</h3>
            <ul>
              <li>Portefeuille complet de matériels et logiciels</li>
              <li>Services intégrés : audit, déploiement, maintenance</li>
              <li>Support France avec SLA et centres agréés</li>
            </ul>
            <Link className="btn btn-secondary" to="/a-propos/qui-sommes-nous">
              Découvrir l'entreprise
            </Link>
          </div>
        </div>
      </section>

      <section className="section color-block">
        <div className="container">
          <h2>Produits phares</h2>
          <p className="lead">Imprimantes, scanners, terminaux mobiles, tablettes, logiciels et consommables.</p>
          <div className="cards">
            {products.map((product) => (
              <div key={product.slug} className="card accent-card">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <ul>
                  {product.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Link className="btn btn-primary" to={`/produits/${product.slug}`}>
                  Voir la gamme
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section grey tint-orange">
        <div className="container">
          <h2>Solutions sectorielles</h2>
          <p className="lead">Des cas d'usage prêts à déployer pour vos métiers.</p>
          <div className="cards">
            {solutions.slice(0, 4).map((solution) => (
              <div key={solution.slug} className="card accent-card">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <div className="pills">
                  {solution.bullets.map((b) => (
                    <span className="pill" key={b}>
                      {b}
                    </span>
                  ))}
                </div>
                <Link className="btn btn-secondary" to={`/solutions/${solution.slug}`}>
                  Voir les cas d'usage
                </Link>
              </div>
            ))}
          </div>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/solutions">
              Explorer toutes les solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="section highlight-blue">
        <div className="container">
          <h2>Services</h2>
          <p className="lead">Support, maintenance, conseil et accompagnement terrain.</p>
          <div className="cards">
            {services.map((service) => (
              <div key={service.title} className="card accent-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link className="btn btn-primary" to="/services">
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section grey">
        <div className="container">
          <h2>Partenaires technologiques</h2>
          <div className="partners">
            {partners.map((partner) => (
              <div key={partner} className="partner-card">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Références</h2>
          <div className="references">
            {references.map((ref) => (
              <div key={ref.name} className="reference">
                <div>
                  <strong>{ref.name}</strong>
                  <p>{ref.result}</p>
                </div>
                <Link className="btn btn-secondary" to="/contact">
                  En savoir plus
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
