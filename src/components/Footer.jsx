import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return <footer>{`<${year}> - YJA Tech`}</footer>;
};

export default Footer;
