import { Header } from './Header';

export function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer className="footer">
        <div className="container two-col">
          <div>
            <h3>TELEDYNE</h3>
            <p>Distribution de matériels informatiques et solutions de traçabilité.</p>
          </div>
          <div className="listed-links">
            <a href="mailto:contact@teledyne.fr">contact@teledyne.fr</a>
            <a href="tel:+33123456789">+33 1 23 45 67 89</a>
            <a href="/contact">Formulaire de contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
