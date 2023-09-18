import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import rules from "./text";
import "./Chatbot.css";

const Chatbot = () => {
  const chatRules = rules.map((rule, index) => (
    <li key={ index + 1 } className='chat_text'>
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
          className="chat_title">
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
          className='chat_button'>
          <Link href='#'>Грати</Link>
        </motion.div>
      </div>
      <motion.div
        custom={ 3 }
        variants={ animationElement }
        className='chat_picture'>
        <Link href='#' className='chat_image'></Link>
      </motion.div>
    </motion.div>
  )
};

export default Chatbot;