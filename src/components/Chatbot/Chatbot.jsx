import React from 'react';
import rules from "./text";
import "./style.css";

const Chatbot = () => {
  const chatRules = rules.map((rule, index) => (
    <li key={index+1} className='chat_text'>
        {rule}
    </li>
  ));

  return (
    <div className="chat_wrapper container">
        <div className='chat_info'>
            <p className="chat_title">Чат-бот</p>
            <ul className='chat_rule_list'>
                {chatRules}
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