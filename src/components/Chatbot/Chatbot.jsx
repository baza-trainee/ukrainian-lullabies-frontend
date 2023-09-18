import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";
import rules from "./text";
import "./Chatbot.css";

const Chatbot = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  const chatRules = rules.map((rule, index) => (
    <li key={ index + 1 } className='chat_text'>
      { rule }
    </li>
  ));

  return (
    <section className="chat_wrapper container">
      <div className='chat_info'>
        <p className="chat_title">Чат-бот</p>
        <ul className='chat_rule_list'>
          { chatRules }
        </ul>
        <div>
          <NavLink to="#" className={ classNames('button', 'chat_button') }> Грати </NavLink>  
        </div>
      </div>
      <div className='chat_picture'>
        <a href='#' className={!isLightTheme ? "chat_image_dark" : "chat_image_white"}></a>
      </div>
    </section>
  )
};

export default Chatbot;