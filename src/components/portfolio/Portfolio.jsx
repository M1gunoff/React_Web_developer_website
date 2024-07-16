import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Stuff Shop",
    img: "./abc.jpeg",
    desc: "Магазин мебели - от создания уюта в доме до оформления коммерческих пространств, наши проекты охватывают разнообразные сферы. Здесь вы найдете не только красивые композиции, но и функциональные решения, которые сочетают в себе элегантность и удобство.",
  },
  {
    id: 2,
    title: "React mobile Weather App",
    img: "./last.jpg",
    desc: "Наше приложение разработано с учетом ваших потребностей. Интуитивный интерфейс обеспечивает легкий доступ ко всем важным данным о погоде. Простота использования – это наш приоритет.",
  },
  {
    id: 3,
    title: "Скоро здесь будут работы",
    img: "/ffffff.jpeg",
    desc: "Опустите завесу тайны и взгляните на горизонт, где уже мерцает свет будущих проектов и страниц. Мы трудимся, чтобы предложить вам удивительные визуальные исследования. Сейчас мы полностью сфокусированы на этом.",
  },
  {
    id: 4,
    title: "Уже совсем скоро :)",
    img: "/fffff.jpeg",
    desc: "Прокладываем путь в виртуальное путешествие по загадочному миру наших проектов и страниц, где каждый уголок будет полон удивительных открытий. Следите за нами, ведь скоро вашему взору предстанут уникальные страницы и впечатляющие проекты.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref} id="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;