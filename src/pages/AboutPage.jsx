import { Link } from 'react-router-dom';
import { aboutCards } from '../data/content';

export function AboutPage() {
  return (
    <div>
      <section className="hero-small">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> / <span>A-propos</span>
          </div>
          <h1>A-propos de TELEDYNE</h1>
          <p className="lead">Expert en traçabilité, mobilité et infrastructures d'impression.</p>
        </div>
      </section>
      <section className="page-content">
        <div className="container cards">
          {aboutCards.map((card) => (
            <div key={card.slug} className="card">
              <h3>{card.title}</h3>
              <p>{card.content}</p>
              <Link className="btn btn-secondary" to={`/a-propos/${card.slug}`}>
                Découvrir
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
