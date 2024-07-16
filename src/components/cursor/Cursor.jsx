import { motion } from "framer-motion";
import "./cursor.scss"
import {useState, useEffect} from "react";


const Cursor = () => {

const [positon, setPosition] = useState({x:0, y:0})

useEffect(() => {
    const mouseMove = (e) => {
        setPosition({x:e.clientX,y:e.clientY})
    }

    window.addEventListener("mousemove", mouseMove)

    return ()=> {
        window.removeEventListener("mousemove", mouseMove);
    };

}, []);

  return (
    <motion.div className="cursor" animate={{x:positon.x + 5, y:positon.y + 5}}></motion.div>
  )
}

export default Cursor
