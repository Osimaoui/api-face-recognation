import { Link, useParams } from 'react-router-dom';

export function CategoryPage({ title, collection, basePath }) {
  const { slug } = useParams();
  const item = collection.find((entry) => entry.slug === slug);

  return (
    <div>
      <section className="hero-small">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> / <Link to={basePath}>{title}</Link> / <span>{item?.title}</span>
          </div>
          <h1>{item?.title || 'Non trouvé'}</h1>
          <p className="lead">{item?.description}</p>
        </div>
      </section>
      <section className="page-content">
        <div className="container two-col">
          <div className="card">
            <h3>Cas d'usage</h3>
            <ul>
              {(item?.bullets || []).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p>
              Déployez rapidement cette solution avec nos équipes avant-vente, intégration et support pour
              garantir la continuité de service.
            </p>
          </div>
          <div className="card">
            <h3>Prochaines étapes</h3>
            <p>Planifier une démonstration, recevoir une proposition et définir votre calendrier projet.</p>
            <Link className="btn btn-primary" to="/contact">
              Contacter un expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
