import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/content';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const renderDropdown = (title, links, root) => (
    <div className="nav-item">
      <Link to={root}>{title}</Link>
      <div className="submenu">
        {links.map((link) => (
          <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header className="header">
      <div className="container navbar">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src="/assets/teledyne-logo.svg" alt="TELEDYNE" />
          <span>TELEDYNE</span>
        </Link>
        <nav className="nav-links">
          {renderDropdown('Produits', navLinks.produits, '/produits')}
          {renderDropdown('Solutions', navLinks.solutions, '/solutions')}
          <div className="nav-item">
            <Link to="/services">Services</Link>
          </div>
          <div className="nav-item">
            <Link to="/a-propos">A-propos</Link>
            <div className="submenu">
              {navLinks.aPropos.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="nav-item">
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
        <div className="actions">
          <Link className="btn btn-secondary" to="/recherche?q=imprimante">
            Recherche
          </Link>
          <button className="btn btn-primary mobile-toggle" onClick={() => setMenuOpen((v) => !v)}>
            Menu
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="container mobile-menu">
          <h4>Produits</h4>
          {navLinks.produits.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <h4>Solutions</h4>
          {navLinks.solutions.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <h4>Services</h4>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <h4>A-propos</h4>
          <Link to="/a-propos" onClick={() => setMenuOpen(false)}>
            A-propos
          </Link>
          {navLinks.aPropos.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
