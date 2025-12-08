import { Link } from 'react-router-dom';

export function ListingPage({ title, lead, items, basePath }) {
  return (
    <div>
      <section className="hero-small">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> / <span>{title}</span>
          </div>
          <h1>{title}</h1>
          <p className="lead">{lead}</p>
        </div>
      </section>
      <section className="page-content">
        <div className="container cards">
          {items.map((item) => (
            <div key={item.slug || item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.bullets && (
                <div className="pills">
                  {item.bullets.map((b) => (
                    <span className="pill" key={b}>
                      {b}
                    </span>
                  ))}
                </div>
              )}
              <Link className="btn btn-primary" to={`${basePath}/${item.slug || ''}`}>
                Découvrir
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
