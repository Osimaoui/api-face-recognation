import { Header } from './Header';

export function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about footer-card">
              <p>
                TELEDYNE est une ESN spécialisée dans la mise en place des systèmes d'informations mobiles dans les secteurs de
                l'industrie, la logistique, le transport et la supply-chain. Nous construisons l'avenir de la digitalisation des
                systèmes d’information en Afrique et offrons à la fois, une expertise locale et un service de proximité de qualité
                internationale.​​
              </p>
            </div>

            <div className="footer-links footer-card">
              <h6 className="footer-title">À propos</h6>
              <ul>
                <li>
                  <a href="/a-propos/qui-sommes-nous">Qui sommes-nous</a>
                </li>
                <li>
                  <a href="/a-propos/carrieres">Carrières</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>

              <div className="footer-social">
                <a href="https://www.facebook.com/webteledyne" aria-label="Facebook" target="_blank" rel="noreferrer">
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 448 512">
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.3V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                  </svg>
                </a>
                <a href="https://twitter.com/Teledyne9" aria-label="Twitter" target="_blank" rel="noreferrer">
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 448 512">
                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.45 65.45 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/teledyne" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 448 512">
                    <path d="M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/teledyne_maroc/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 448 512">
                    <path d="M224 202.7A53.34 53.34 0 1 0 277.4 256 53.38 53.38 0 0 0 224 202.7zm124.7-41a54 54 0 0 0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 0 0-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33S91 329.3 99.32 350.3a54 54 0 0 0 30.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0 0 30.41-30.41c8.35-21 6.43-71.05 6.43-94.33S357.1 182.7 348.8 161.7zM224 338a82 82 0 1 1 82-82A81.9 81.9 0 0 1 224 338zm85.38-148.3a19.14 19.14 0 1 1 19.13-19.14A19.1 19.1 0 0 1 309.4 189.7zM400 32H48A48 48 0 0 0 0 80V432a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V80A48 48 0 0 0 400 32zM382.9 322c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.6 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.6 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.6-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05C384.4 216.4 384.4 295.6 382.9 322z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-newsletter footer-card">
              <h6 className="footer-title">Rejoignez la communauté teledyne</h6>
              <div className="newsletter-input">
                <input type="email" placeholder="Email ....." aria-label="Email" />
              </div>
              <button className="btn">S'inscrire à la Newsletter</button>
            </div>
          </div>

          <div className="footer-bottom">
            <span>©2023 Teledyne. Tous droits réservés.</span>
            <span>Conditions générales de vente.</span>
            <span>Mentions légales</span>
            <span>Confidentialités</span>
            <span>FAQ</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
