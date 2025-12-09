import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CategoryPage } from './CategoryPage';
import { products } from '../data/content';

const defaultHero = '/images/Produits/Head-produit.svg';

const productDetails = {
  scanners: {
    title: 'Scanners de code à barres',
    lead:
      "Les scanners 1D/2D adaptés à chaque usage : commerce, entrepôt, santé ou production, avec optiques imageur ou laser.",
    description: [
      "Les codes à barres se distinguent par leur facilité d’utilisation et leur coût accessible. Les lecteurs code à barres existent désormais pour tous les budgets et pratiquement tous les usages.",
      "Choisissez l’optique (imageur ou laser) et les symbologies décodées (1D/2D) adaptées à votre métier.",
    ],
    list: [
      'Commerce & distribution : scanners fixes ou mobiles, filaires ou radio pour plus de performance en caisse.',
      'Entrepôt : pistolets industriels, lecture courte ou longue distance en lien avec tout type de terminal.',
      'Santé : scanners antibactériens, nettoyage aux solvants autorisés pour le secteur.',
      'Production : pistolets et lecteurs mains libres ou fixes pour convoyeur.',
    ],
    offers: [
      {
        title: 'Scanners ultra-durcis',
        description: 'Performance longue portée pour production et entrepôt, résistants aux environnements exigeants.',
        image: '/images/Produits/Scanner-ultra-durcis.webp',
      },
      {
        title: 'Scanners universels',
        description: 'Lecture 1D/2D pour commerce et distribution avec options mains libres.',
        image: '/images/Produits/Distribution1.webp',
      },
      {
        title: "Pistolets et lecteurs comptoir",
        description: "Confort d'utilisation pour l'accueil et le comptoir, supports mains libres disponibles.",
        image: '/images/Produits/Scanners-pour-l_accueil-et-comptoir.webp',
      },
      {
        title: 'Transport & logistique',
        description: 'Robustesse et portée pour réception, quai, cross-dock et tournées.',
        image: '/images/Produits/Scanners-Transport-et-Logistique.webp',
      },
      {
        title: 'Scanners santé',
        description: 'Corps antibactériens, codes patient et pharmacie, nettoyage facilité.',
        image: '/images/Produits/Scanners-Sante.webp',
      },
      {
        title: 'RFID',
        description: 'Lecture UHF et suivi des actifs avec accessoires poignée ou pistolet.',
        image: '/images/Produits/RFID.webp',
      },
    ],
    useCases: [
      { image: '/images/Produits/scannerUse.webp', caption: 'Réception et préparation en entrepôt' },
      { image: '/images/Produits/scannerUse2.webp', caption: 'Contrôle en logistique et transport' },
      { image: '/images/Produits/scannerUse3.webp', caption: 'Lecture sécurisée en santé' },
    ],
    partners: ['Zebra', 'Honeywell'],
  },
  'terminaux-embarques': {
    title: 'Terminaux embarqués',
    lead:
      'Terminaux durcis pour engins de manutention, résistants aux vibrations, températures extrêmes et environnement industriel.',
    description: [
      "Fixés sur camions, chariots ou portiques, ils offrent un poste embarqué fiable pour vos opérateurs en mobilité.",
      "Connectés en Wi-Fi ou WAN (3G/4G), certains modèles supportent des températures extrêmes et restent lisibles en plein soleil.",
      "Depuis la fin de Windows CE/Mobile, l’offre TELEDYNE s’articule autour d’Android et Windows 10, avec accessoires adaptés.",
    ],
    offers: [
      { title: 'Honeywell VM3A', image: '/images/Produits/terminaux-embarques-vm3a.webp' },
      { title: 'Zebra VC8300', image: '/images/Produits/vc8300.webp' },
      { title: 'Zebra VC80x', image: '/images/Produits/VC80X.webp' },
      { title: 'Honeywell VM1', image: '/images/Produits/hw-vm1.webp' },
    ],
    useCases: [
      { image: '/images/Produits/TE1.webp', caption: 'Pilotage d’engins en entrepôt' },
      { image: '/images/Produits/TE2.webp', caption: 'Gestion dépôt et logistique' },
      { image: '/images/Produits/TE-3.webp', caption: 'Suivi transport et manutention' },
    ],
    partners: ['Zebra', 'Honeywell'],
  },
  'terminaux-mobiles': {
    title: 'Terminaux mobiles',
    lead:
      "PDA et smartphones durcis pour missions terrain avec connectivité sécurisée, autonomie renforcée et gestion MDM.",
    description: [
      "Un équipement professionnel doit résister aux chocs, offrir luminosité, étanchéité et autonomie. Le TCO reste inférieur aux smartphones grand public grâce à la durabilité et au support.",
      "Nous proposons des équipements adaptés à votre environnement et des solutions MDM pour réduire le coût total de possession.",
    ],
    offers: [
      { title: 'Zebra MC33XX', image: '/images/Produits/mc3300-photography-product-front-1280x1280.webp' },
      { title: 'Zebra MC93XX', image: '/images/Produits/mc9300-photography-product-front-facing-standard-1280x1280.webp' },
      { title: 'Zebra TC26', image: '/images/Produits/TC26.webp' },
      { title: 'Honeywell CK65', image: '/images/Produits/Honeywell-CK65.webp' },
      { title: 'Honeywell EDA52', image: '/images/Produits/EDA52.webp' },
      { title: 'Honeywell CN80', image: '/images/Produits/hw-cn80.webp' },
    ],
    useCases: [
      { image: '/images/Produits/terminaux-mobiles-use.webp', caption: 'Distribution et retail' },
      { image: '/images/Produits/terminaux-mobiles-use2.webp', caption: 'Santé et traçabilité patient' },
      { image: '/images/Produits/terminaux-mobiles-use3.webp', caption: 'Opérations entrepôt et picking' },
    ],
    partners: ['Zebra', 'Honeywell'],
  },
  logiciels: {
    title: 'Logiciels',
    lead: "Solutions pour piloter l’inventaire, simplifier la mobilité et gérer l’étiquetage en toute sécurité.",
    description: [
      "Comprenez vos données pour mieux agir, augmentez la visibilité et facilitez la mise en œuvre de votre stratégie.",
      "Configurez, gérez et entretenez vos équipements. Notre équipe de développement vous accompagne de l’analyse au déploiement.",
    ],
    offers: [
      {
        title: 'VISUAL STOCK',
        description: "Pilotage opérationnel de l'inventaire physique.",
        image: '/images/Produits/Logo-VS.webp',
      },
      {
        title: 'SOTI',
        description: 'Simplification de la mobilité et gestion des équipements/IoT.',
        image: '/images/Produits/SOTI_2.webp',
      },
      {
        title: 'BARTENDER',
        description: 'Création et impression d’étiquettes avec ou sans code-barres.',
        image: '/images/Produits/bartender.webp',
      },
      {
        title: 'CODESOFT',
        description: "Logiciel d'étiquetage codes-barres.",
        image: '/images/Produits/codesoft.webp',
      },
      {
        title: 'WMS - Savoye maGistor',
        description: 'Pilotage des processus logistiques.',
        image: '/images/Produits/wms.webp',
      },
    ],
    useCases: [
      { image: '/images/Produits/VisualStockUse.webp', caption: 'Inventaire et audit multi-sites' },
      { image: '/images/Produits/WMSUse.webp', caption: 'Pilotage WMS en entrepôt' },
      { image: '/images/Produits/codesoft-use.webp', caption: 'Impression et étiquetage sécurisé' },
      { image: '/images/Produits/sotiUtil.webp', caption: 'Supervision mobilité avec SOTI ONE' },
    ],
    partners: ['Zebra', 'Honeywell'],
  },
  'tablettes-industrielles': {
    title: 'Tablettes industrielles',
    lead: 'Tablettes robustes Android ou Windows pour exécuter vos applications métiers en toute sécurité.',
    description: [
      "Sur le terrain, les tablettes exigent un haut niveau de robustesse. Notre gamme couvre des besoins variés avec sécurité et autonomie.",
    ],
    offers: [
      { title: 'Zebra ET56 (8/10")', image: '/images/ProduitPage/img/TABLETTE-PROFESSIONNELLE-WINDOWS-ET51ET56.webp' },
      { title: 'Zebra Xpad L10', image: '/images/ProduitPage/img/ZEBRA-Xpad-L10.webp' },
      { title: 'Samsung Tab Active 3', image: '/images/ProduitPage/img/fr-galaxy-tab-active3-enterprise-edition-sm-t575nzkaeeh-frontblack-317389293.webp' },
      { title: 'Samsung Tab Active Pro', image: '/images/ProduitPage/img/SM-T547_001_Front_Black_600x600.webp' },
    ],
    useCases: [
      {
        image: '/images/ProduitPage/img/field-mobility-photography-website-blog-telco-workers-tablet.webp',
        caption: 'Production et maintenance terrain',
      },
      {
        image: '/images/ProduitPage/img/et55-photography-website-blog-delivery-driver-in-truck-edited-for-et56-launch-1280x720.webp',
        caption: 'Transport et livraison',
      },
      {
        image: '/images/ProduitPage/img/t-and-l-photography-website-blog-delivery-man-inside-truck-with-tablet-1280x720.webp',
        caption: 'Distribution et logistique',
      },
      {
        image: '/images/ProduitPage/img/police-photography-website-blog-pointing-at-tablet-1280x720.webp',
        caption: 'Services publics et inspection',
      },
    ],
    partners: ['Zebra', 'Honeywell', 'Samsung'],
  },
  'infrastructure-wi-fi': {
    title: 'Infrastructure Wi-Fi',
    lead: "Points d’accès, routeurs, switches et contrôleurs pour une infrastructure flexible et sécurisée.",
    description: [
      "Un réseau Wireless se construit brique par brique pour sécuriser vos flux. TELEDYNE vous accompagne dans l’étude de votre architecture en fonction de l’environnement et des besoins.",
    ],
    offers: [
      { title: "Points d'accès", image: '/images/Produits/cisco-1830-access-point.webp' },
      { title: 'Routeurs', image: '/images/Produits/routers-ISR-1110.webp' },
      { title: 'Switches', image: '/images/Produits/SG350.webp' },
      { title: 'Contrôleurs', image: '/images/Produits/NX-5500.webp' },
    ],
    useCases: [],
    partners: ['Cisco', 'Extreme Networks', 'Ruckus'],
  },
  consommables: {
    title: 'Consommables pour impression',
    lead:
      "Étiquettes, rubans, cartes et têtes d’impression sélectionnés pour garantir qualité, durabilité et performance.",
    description: [
      "Les consommables choisis assurent une impression élevée, une excellente durabilité et réduisent l’usure des imprimantes.",
      "Réduisez les étiquettes manquantes ou illisibles et les défaillances prématurées des têtes d’impression.",
    ],
    offers: [
      { title: 'Étiquettes', image: '/images/Produits/etiquette.webp' },
      { title: 'Rubans', image: '/images/Produits/rubbon.webp' },
      { title: 'Cartes PVC', image: '/images/Produits/carte-pvc.webp' },
      { title: 'Reçus', image: '/images/Produits/recu.webp' },
      { title: "Jet d'encre", image: '/images/Produits/Jet-d-encre.webp' },
      { title: "Têtes d'impression", image: '/images/Produits/Tete-d-impression.webp' },
    ],
    useCases: [
      { image: '/images/Produits/codesoft-use.webp', caption: 'Étiquetage et suivi logistique' },
      { image: '/images/Produits/WMSUse.webp', caption: 'Gestion d’entrepôt et contrôle' },
      { image: '/images/Produits/VisualStockUse.webp', caption: 'Inventaires réguliers' },
    ],
    partners: ['Zebra', 'Honeywell', 'HP'],
  },
};

function ProductDetailTemplate({ config, slug }) {
  const [useCaseIndex, setUseCaseIndex] = useState(0);
  const hasUseCases = config.useCases && config.useCases.length > 0;

  useEffect(() => {
    if (!hasUseCases) return undefined;
    const timer = setInterval(() => {
      setUseCaseIndex((current) => (current + 1) % config.useCases.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [config.useCases, hasUseCases]);

  const heroBackground = config.heroImage || defaultHero;

  return (
    <div className="product-detail-page">
      <section className="hero-product" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="hero-product__overlay" />
        <div className="container hero-product__content">
          <div>
            <div className="breadcrumb">
              <Link to="/">Accueil</Link> / <Link to="/produits">Produits</Link> / <span>{config.title}</span>
            </div>
            <div className="pill pill-light">Nos produits</div>
            <h1>{config.title}</h1>
            <p className="lead text-white">{config.lead}</p>
            <div className="cta-row">
              <Link className="btn btn-primary" to="/contact">
                Contacter un expert
              </Link>
              <Link className="btn btn-outline" to="/services">
                Découvrir nos services
              </Link>
            </div>
          </div>
          <div className="hero-product__panel">
            <p className="eyebrow text-white">Accompagnement TELEDYNE</p>
            <p className="text-white">
              Configurations sur mesure, déploiements sécurisés, maintenance préventive et curative pour prolonger la durée de
              vie de vos équipements.
            </p>
            <div className="hero-product__tags">
              <span className="pill pill-light">Audit & sélection</span>
              <span className="pill pill-light">Intégration</span>
              <span className="pill pill-light">Support & SAV</span>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail__intro">
        <div className="container two-col">
          <div>
            {config.description.map((paragraph) => (
              <p key={paragraph} className="text-justify">
                {paragraph}
              </p>
            ))}
            {config.list && (
              <ul className="accent-list">
                {config.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="card soft-card">
            <h3>Pourquoi TELEDYNE ?</h3>
            <p>
              Expertise locale, maîtrise du TCO et relation directe avec les constructeurs pour une disponibilité maximale de vos
              équipements.
            </p>
            <Link className="btn btn-primary" to={`/recherche?q=${slug}`}>
              Trouver une référence
            </Link>
          </div>
        </div>
      </section>

      <section className="product-detail__offers">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Découvrir nos offres</p>
              <h2>Une gamme adaptée à vos usages</h2>
            </div>
          </div>
          <div className="offer-grid">
            {config.offers.map((offer) => (
              <div key={offer.title} className="card offer-card">
                <div className="offer-media" style={{ backgroundImage: `url(${offer.image})` }} />
                <div className="offer-body">
                  <h3>{offer.title}</h3>
                  {offer.description && <p className="text-justify">{offer.description}</p>}
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

      {hasUseCases && (
        <section className="product-detail__usecases">
          <div className="container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Exemples d'utilisation</p>
                <h2>Applications terrain</h2>
              </div>
              <div className="slider-dots">
                {config.useCases.map((_, idx) => (
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
              {config.useCases.map((slide, idx) => (
                <div
                  key={`${slide.image}-${idx}`}
                  className={idx === useCaseIndex ? 'usecase-slide active' : 'usecase-slide'}
                  style={{ backgroundImage: `url(${slide.image})` }}
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
      )}

      <section className="product-detail__partners">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Nos partenaires</p>
              <h2>Constructeurs & éditeurs de confiance</h2>
            </div>
          </div>
          <div className="partner-grid">
            {config.partners.map((partner) => (
              <div key={partner} className="partner-chip dark">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function ProductDetailRouter() {
  const { slug } = useParams();
  const config = useMemo(() => productDetails[slug], [slug]);

  if (!config) {
    return <CategoryPage title="Produits" collection={products} basePath="/produits" />;
  }

  return <ProductDetailTemplate config={config} slug={slug} />;
}
