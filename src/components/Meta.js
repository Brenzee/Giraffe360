import React from "react";
import { Helmet } from "react-helmet";
const Meta = ({ title }) => {
  return (
    <Helmet>
      <title>{title ? title : `Giraffe360`} | Giraffe360</title>
    </Helmet>
  );
};

export default Meta;
