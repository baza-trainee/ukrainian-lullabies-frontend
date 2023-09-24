import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from "react-redux";
import classNames from "classnames";
import "./Chatbot.css";

const Chatbot = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const { t } = useTranslation();

  const rules = [t('playEducationalGameWithChatbot'), t('youCanGuessWhichRegion'), t('youCanLearnAboutThePlots'), t('letsPlay')];

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

      className="container chat_wrapper">
      <div className='chat_info'>
        <motion.p
          custom={ 1 }
          variants={ animationElement }
          className="chat_title">
          { t('chatBot') }

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
          <Link href='#' className='text-base-semibold'>{ t('play') }</Link>

        </motion.div>
      </div>
      <motion.div
        custom={ 3 }
        variants={ animationElement }
        className='chat_picture'>
        <Link href='#' className={ classNames("chat_image_dark", { "chat_image_white": isLightTheme }) }></Link>
      </motion.div>
    </motion.div>
  )
};

export default Chatbot;