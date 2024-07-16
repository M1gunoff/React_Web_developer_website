import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const scrollToPortfolio = () => {
  const portfolioSection = document.getElementById('portfolio');
  if (portfolioSection) {
    portfolioSection.scrollIntoView({ behavior: 'auto', block: 'start' });
  }
}


const scrollToContacts = () => {
  const contactsSection = document.getElementById('contacts');
  if (contactsSection) {
    contactsSection.scrollIntoView({ behavior: 'auto'});
  }
}

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Я готов помочь вашему бизнесу
          <br /> стать еще лучше
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/Moscow2.jpg" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Уникальные</motion.b> Идеи
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Для вашего</motion.b> Бизнеса
          </h1>
          <button onClick = {scrollToPortfolio}>Посмотреть работы</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Landing page</h2>
          <p>
            Креативная посадочная страница для презентации товаров, услуг и проведения рекламных компаний. Небольшая стоимость и быстрый срок исполнения: от 1 до 2 недель.
          </p>
          <button onClick = {scrollToContacts}>Заказать</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Сайт визитка</h2>
          <p>
            Небольшой сайт из нескольких страниц, содержащий информацию о компании, услугах, ценах, новостях. Небольшая стоимость и срок исолнения: от 2 до 3 недель.
          </p>
          <button onClick = {scrollToContacts}>Заказать</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Промо</h2>
          <p>
            Создается с целью познакомить посетителя сайта с новым брендом компании и повысить лояльность покупателей. Визуалный контент и эффекты. Срок: от 4 до 5 недель.
          </p>
          <button onClick = {scrollToContacts}>Заказать</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Корпоративный сайт</h2>
          <p>
            Многостраничный сайт, который активно задействуется в digital-маркетинговых стратегиях компании. Сроки выполнения от 5 до 10 недель.
          </p>
          <button onClick = {scrollToContacts}>Заказать</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;