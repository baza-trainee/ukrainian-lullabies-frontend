import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from "react-redux";
import classNames from "classnames";
import rules from "./text";
import "./Chatbot.css";

const Chatbot = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  const chatRules = rules.map((rule, index) => (
    <li key={ index + 1 } className='text-base chat_text'>
      { rule }
    </li>
  ));

  const animationElement = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 2, delay: custom * 0.3 },
    }),
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="chat_wrapper container margin-bottom">
      <div className='chat_info'>
        <motion.p
          custom={ 1 }
          variants={ animationElement }
          className="text-4xl">
          Чат-бот
        </motion.p>
        <motion.ul
          custom={ 2 }
          variants={ animationElement }
          className='chat_rule_list'>
          { chatRules }
        </motion.ul>
        <motion.div
          custom={ 3 }
          variants={ animationElement }
          className='button'>
          <Link href='#'>Грати</Link>
        </motion.div>
      </div>
      <motion.div
        custom={ 3 }
        variants={ animationElement }
        className='chat_picture'>
        <Link href='#' className={ classNames("chat_image_dark", {"chat_image_white":isLightTheme}) }></Link>
      </motion.div>
    </motion.div>
  )
};

export default Chatbot;