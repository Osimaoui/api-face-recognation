import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { products, solutions } from './data/content';
import { AboutPage } from './pages/AboutPage';
import { CategoryPage } from './pages/CategoryPage';
import { ContactPage } from './pages/ContactPage';
import { Home } from './pages/Home';
import { ListingPage } from './pages/ListingPage';
import { SearchPage } from './pages/SearchPage';
import { ServicesPage } from './pages/ServicesPage';
import { StaticPage } from './pages/StaticPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProductsPage } from './pages/ProductsPage';
import { PrinterPage } from './pages/PrinterPage';
import { ProductDetailRouter } from './pages/ProductDetailPage';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/produits" element={<ProductsPage />} />
          <Route path="/produits/imprimantes" element={<PrinterPage />} />
          <Route
            path="/produits/:slug"
            element={<ProductDetailRouter />}
          />

          <Route path="/solutions" element={<SolutionsPage />} />
          <Route
            path="/solutions/:slug"
            element={<CategoryPage title="Solutions" collection={solutions} basePath="/solutions" />}
          />

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route
            path="/a-propos/qui-sommes-nous"
            element={
              <StaticPage
                title="Qui sommes-nous"
                lead="Intégrateur et distributeur depuis 30 ans."
                breadcrumb={[{ label: 'A-propos', to: '/a-propos' }]}
              />
            }
          />
          <Route
            path="/a-propos/carrieres"
            element={
              <StaticPage
                title="Carrières"
                lead="Rejoignez nos équipes technique, projet et support."
                breadcrumb={[{ label: 'A-propos', to: '/a-propos' }]}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/recherche" element={<SearchPage />} />

          <Route path="*" element={<StaticPage title="Page introuvable" lead="Cette page n'existe pas." />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
