// App.jsx
import { Routes, Route } from "react-router-dom";
import PricingPage from "./pages/PricingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PricingPage />} />
      <Route path="/pricing" element={<PricingPage />} />
    </Routes>
  );
}
