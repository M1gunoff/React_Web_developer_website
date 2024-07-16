import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="Начальная страница">
      <Navbar />
      <Hero />
    </section>
    <section>
      <Parallax type="services"/>
    </section>
    <section id="Услуги">
      <Services />
    </section>
    <section>
      <Parallax type="portfolio"/>
    </section >
    <div id="Портфолио"><Portfolio /></div>
    <section id="Контакты">
      <Contact/>
    </section>
  </div>;

};

export default App;
