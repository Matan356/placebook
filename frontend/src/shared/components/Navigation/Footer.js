import React from 'react';

import './Footer.css'

const Footer = (props) => {
  return <div>
   <footer className="main-footer">{props.children}</footer>;

  </div>;
};

export default Footer;
