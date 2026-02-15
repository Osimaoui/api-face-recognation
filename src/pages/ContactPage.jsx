import { Link } from 'react-router-dom';

export function ContactPage() {
  return (
    <div>
      <section className="hero-small">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> / <span>Contact</span>
          </div>
          <h1>Contactez-nous</h1>
          <p className="lead">Support, projets et demandes commerciales.</p>
        </div>
      </section>
      <section className="page-content">
        <div className="container two-col">
          <div className="card">
            <h3>Formulaire</h3>
            <div className="form-grid">
              <input placeholder="Nom complet" />
              <input placeholder="Email professionnel" />
              <input placeholder="Entreprise" />
              <input placeholder="Téléphone" />
              <textarea placeholder="Votre message"></textarea>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '14px' }}>
              Envoyer
            </button>
          </div>
          <div className="card">
            <h3>Coordonnées</h3>
            <p>Email : contact@teledyne.fr</p>
            <p>Téléphone : +33 1 23 45 67 89</p>
            <p>Disponibilité : 8h30 - 18h (CET)</p>
            <Link className="btn btn-secondary" to="tel:+33123456789">
              Appeler
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
