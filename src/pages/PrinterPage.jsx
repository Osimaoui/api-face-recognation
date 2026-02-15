import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const printerOffers = [
  {
    title: "Imprimantes mobiles",
    description:
      "Impression en point de vente ou en entrepôt avec batteries longue durée, connectivité sécurisée et design compact.",
    image:
      'https://images.unsplash.com/photo-1519336555923-59661f41bb68?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: "Imprimantes industrielles",
    description:
      "Cadence élevée, durabilité et précision pour les environnements exigeants (entrepôt, production, traçabilité).",
    image:
      'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: "Imprimantes de bureau",
    description:
      "Compactes et fiables pour les bureaux et comptoirs, avec gestion d'étiquettes et de tickets multi-formats.",
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: "Imprimantes RFID",
    description:
      "Encodez et imprimez des étiquettes RFID haute précision pour suivre vos flux logistiques et industriels.",
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: "Imprimantes cartes d'identification",
    description:
      "Cartes PVC sécurisées pour badges salariés, visiteurs ou contrôle d'accès avec lamination et encodage.",
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  },
];

const useCaseSlides = [
  {
    src: 'https://images.unsplash.com/photo-1576765607924-3f7b84b1c211?auto=format&fit=crop&w=1600&q=80',
    alt: 'Impression en entrepôt',
    caption: 'Optimisation des expéditions et de la traçabilité en entrepôt',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719478248-54e9f2af9607?auto=format&fit=crop&w=1600&q=80',
    alt: 'Impression en santé',
    caption: 'Etiquetage patient sécurisé en milieu hospitalier',
  },
  {
    src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
    alt: 'Impression retail',
    caption: 'Etiquetage rayon et préparation click & collect en distribution',
  },
];

const partnerSlides = [
  'Zebra',
  'Honeywell',
  'Teklynx',
  'Dascom',
  'Printronix',
  'Bartender',
];

export function PrinterPage() {
  const [useCaseIndex, setUseCaseIndex] = useState(0);
  const [partnerIndex, setPartnerIndex] = useState(0);

  useEffect(() => {
    const useCaseTimer = setInterval(() => {
      setUseCaseIndex((current) => (current + 1) % useCaseSlides.length);
    }, 4500);

    const partnerTimer = setInterval(() => {
      setPartnerIndex((current) => (current + 1) % partnerSlides.length);
    }, 1800);

    return () => {
      clearInterval(useCaseTimer);
      clearInterval(partnerTimer);
    };
  }, []);

  return (
    <div className="printer-page">
      <section className="hero-printer">
        <div className="hero-printer__overlay" />
        <div className="container hero-printer__grid">
          <div>
            <div className="breadcrumb">
              <Link to="/">Accueil</Link> / <Link to="/produits">Produits</Link> / <span>Imprimantes</span>
            </div>
            <p className="pill pill-light">Nos produits</p>
            <h1>Imprimantes d'étiquettes</h1>
            <p className="lead">
              Flexibilité, performance et fiabilité pour vos opérations critiques : industriels, RFID, bureau ou mobile.
              Chaque modèle est sélectionné pour la précision, la durabilité et la maîtrise du coût total de possession.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" to="/contact">
                Discuter d'un projet
              </Link>
              <Link className="btn btn-outline" to="/services">
                Découvrir nos services
              </Link>
            </div>
          </div>
          <div className="hero-printer__panel">
            <p className="eyebrow text-white">Support premium</p>
            <h3>Configuration, intégration et SAV</h3>
            <p>
              Mise en service sur site, paramétrage, tests applicatifs et contrats de maintenance pour prolonger la durée de
              vie de vos équipements.
            </p>
            <div className="stats">
              <div>
                <span className="stat">1995</span>
                <small>expérience terrain</small>
              </div>
              <div>
                <span className="stat">24/7</span>
                <small>surveillance & support</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="printer-overview">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Pourquoi TELEDYNE</p>
            <h2>Mobilité, précision et fiabilité</h2>
            <p className="text-justify">
              Offrez-vous un niveau supérieur de flexibilité et de performance. Que vous recherchiez une imprimante
              industrielle, RFID, de bureau ou mobile, notre gamme complète répond à tous vos besoins d'impression. Conçues
              pour améliorer la précision, l'efficacité et la productivité, elles offrent une mobilité ininterrompue sans
              sacrifier la qualité.
            </p>
          </div>
          <div className="card soft-card">
            <h3>Nos engagements</h3>
            <ul className="checklist">
              <li>Relation directe constructeurs et pièces disponibles</li>
              <li>Paramétrage, intégration logicielle et tests</li>
              <li>Contrats de maintenance préventive et curative</li>
            </ul>
            <Link className="btn btn-primary" to="/contact">
              Parler à un expert
            </Link>
          </div>
        </div>
      </section>

      <section className="printer-offers">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Découvrir nos offres</p>
              <h2>Une gamme complète adaptée à vos usages</h2>
              <p className="section-lead">Imprimantes mobiles, industrielles, de bureau, RFID ou cartes PVC.</p>
            </div>
            <Link className="btn btn-outline" to="/recherche?q=imprimantes">
              Trouver un modèle
            </Link>
          </div>
          <div className="offer-grid">
            {printerOffers.map((offer) => (
              <div key={offer.title} className="card offer-card">
                <div className="offer-media" style={{ backgroundImage: `url(${offer.image})` }} />
                <div className="offer-body">
                  <h3>{offer.title}</h3>
                  <p className="text-justify">{offer.description}</p>
                  <div className="card-bottom">
                    <Link className="btn btn-primary" to="/contact">
                      Être conseillé
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="printer-usecases">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Exemples d'utilisation</p>
              <h2>Des secteurs variés, une qualité constante</h2>
              <p className="section-lead">Santé, distribution, fabrication et gestion d'entrepôts.</p>
            </div>
            <div className="slider-dots">
              {useCaseSlides.map((_, idx) => (
                <button
                  key={idx}
                  className={idx === useCaseIndex ? 'dot active' : 'dot'}
                  onClick={() => setUseCaseIndex(idx)}
                  aria-label={`Aller à la diapositive ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="usecase-frame">
            {useCaseSlides.map((slide, idx) => (
              <div
                key={slide.alt}
                className={idx === useCaseIndex ? 'usecase-slide active' : 'usecase-slide'}
                style={{ backgroundImage: `url(${slide.src})` }}
              >
                <div className="usecase-overlay" />
                <div className="usecase-caption">
                  <p className="eyebrow">Cas d'usage</p>
                  <h3>{slide.caption}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="printer-partners">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Écosystème</p>
              <h2>Nos partenaires constructeurs</h2>
              <p className="section-lead">Sélectionnés pour la robustesse, le support et la disponibilité des pièces.</p>
            </div>
          </div>
          <div className="partner-slider">
            <div className="partner-track" style={{ transform: `translateX(-${partnerIndex * 190}px)` }}>
              {[...partnerSlides, ...partnerSlides].map((partner, idx) => (
                <div key={`${partner}-${idx}`} className="partner-chip">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
