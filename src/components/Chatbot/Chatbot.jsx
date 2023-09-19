import React from 'react';
import rules from "./text";
import "./Chatbot.css";

const Chatbot = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

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
    <div className="chat_wrapper container">
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
        </ul>
        <div className='chat_button'>
          <a href='#'>Грати</a>
        </div>
      </div>
      <div className='chat_picture'>
        <a href='#' className='chat_image'></a>
      </div>
    </div>
  )
};

export default Chatbot;