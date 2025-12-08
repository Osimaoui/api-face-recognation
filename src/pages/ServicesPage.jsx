import { Link } from 'react-router-dom';
import { services } from '../data/content';

export function ServicesPage() {
  return (
    <div>
      <section className="hero-small">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> / <span>Services</span>
          </div>
          <h1>Services TELEDYNE</h1>
          <p className="lead">Support, maintenance, intégration et conseil.</p>
        </div>
      </section>
      <section className="page-content">
        <div className="container cards">
          {services.map((service) => (
            <div key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link className="btn btn-primary" to="/contact">
                {service.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
