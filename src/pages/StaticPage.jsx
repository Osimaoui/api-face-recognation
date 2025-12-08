import { Link } from 'react-router-dom';

export function StaticPage({ title, lead, breadcrumb }) {
  return (
    <div>
      <section className="hero-small">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link>
            {breadcrumb?.map((item) => (
              <span key={item.to}>
                {' '}/{' '}
                <Link to={item.to}>{item.label}</Link>
              </span>
            ))}
            {' '}/{' '}
            <span>{title}</span>
          </div>
          <h1>{title}</h1>
          <p className="lead">{lead}</p>
        </div>
      </section>
      <section className="page-content">
        <div className="container two-col">
          <div className="card">
            <h3>Nos engagements</h3>
            <ul>
              <li>Accompagnement de bout en bout</li>
              <li>Support local et pièces détachées certifiées</li>
              <li>Partenariats éditeurs et constructeurs de premier plan</li>
            </ul>
          </div>
          <div className="card">
            <h3>Parlons-en</h3>
            <p>Contactez-nous pour adapter cette offre à vos contraintes opérationnelles.</p>
            <Link className="btn btn-primary" to="/contact">
              Nous écrire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
