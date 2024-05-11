import { Routes, Route } from "react-router-dom";
import ProductFeatures from "./components/ProductFeatures";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

import ProductFeaturesImg from "./assets/componentsImg/ProductFeatures.png";

const component = [
  {
    path: "/product-features",
    name: "Product Features",
    img: ProductFeaturesImg,
    element: <ProductFeatures />,
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
