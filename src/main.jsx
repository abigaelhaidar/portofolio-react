import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/Preloader.jsx";

import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Preloader />
    <div className="container mx-auto px-6">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>
);
