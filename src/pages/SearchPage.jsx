import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { products, solutions } from '../data/content';

export function SearchPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q') || '';

  const results = useMemo(() => {
    const term = query.toLowerCase();
    return [...products, ...solutions]
      .filter((item) => item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term))
      .map((item) => ({
        ...item,
        type: products.some((p) => p.slug === item.slug) ? 'Produit' : 'Solution',
        path: products.some((p) => p.slug === item.slug) ? `/produits/${item.slug}` : `/solutions/${item.slug}`
      }));
  }, [query]);

  return (
    <div>
      <section className="hero-small">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> / <span>Recherche</span>
          </div>
          <h1>Résultats de recherche</h1>
          <p className="lead">{query ? `Recherche : "${query}"` : 'Saisissez un terme de recherche.'}</p>
        </div>
      </section>
      <section className="page-content">
        <div className="container cards">
          {results.length === 0 && <p>Aucun résultat pour cette requête.</p>}
          {results.map((result) => (
            <div key={result.slug} className="card">
              <h3>{result.title}</h3>
              <p className="highlight">{result.type}</p>
              <p>{result.description}</p>
              <Link className="btn btn-primary" to={result.path}>
                Ouvrir
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
