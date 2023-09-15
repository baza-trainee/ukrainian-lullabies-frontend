import React from "react";
import { Link } from 'react-router-dom';

export const Header = () => {
  return <>
    <h1>Header   </h1>
    <Link to="/about" > About
    </Link>
  </>;
};
