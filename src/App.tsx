import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Directions from "./components/Directions";
import Why from "./components/Why";
import About from "./components/About";
import Club from "./components/Club";
import Prices from "./components/Prices";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Clouds from "./components/Clouds";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [toast, setToast] = useState<string | null>(null);

  useReveal();

  // тема
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // toast auto-hide
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <>
      <Clouds />
      <Header
        theme={theme}
        onToggleTheme={() =>
          setTheme((t) => (t === "light" ? "dark" : "light"))
        }
      />
      <main>
        <Hero />
        <Directions />
        <Why />
        <Club />
        <About />
        <Prices onCta={() => (window.location.hash = "#join")} />
        <ContactForm
          onSuccess={() => setToast("Ура! Заявка улетела 🚀 Скоро позвоним")}
        />
      </main>
      <Footer />
      <Toast message={toast} />
    </>
  );
}
}
