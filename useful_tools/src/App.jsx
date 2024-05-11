import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import ProductFeatures from "./components/ProductFeatures";
import HeroSection from "./components/HeroSection";
import NewsletterSections from "./components/NewsletterSections";
import HeaderSection from "./components/HeaderSection";

import ProductFeaturesImg from "./assets/componentsImg/ProductFeatures.png";
import HeroSectionImg from "./assets/componentsImg/HeroSection.png";
import NewsletterSectionsImg from "./assets/componentsImg/NewsletterSections.png";
import HeaderSectionImg from "./assets/componentsImg/HeaderSection.png";

const component = [
  {
    path: "/product-features",
    name: "Product Features",
    img: ProductFeaturesImg,
    element: <ProductFeatures />,
  },
  {
    path: "/hero-section",
    name: "Hero Section",
    img: HeroSectionImg,
    element: <HeroSection />,
  },
  {
    path: "/newsletter-sections",
    name: "Newsletter Sections",
    img: NewsletterSectionsImg,
    element: <NewsletterSections />,
  },
  {
    path: "/header-section",
    name: "Header Section",
    img: HeaderSectionImg,
    element: <HeaderSection />,
  },
];

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {component.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Card components={component} />
    </>
  );
}
