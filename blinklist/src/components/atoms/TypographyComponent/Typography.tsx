import React from 'react';
import PropTypes, { string } from 'prop-types';

import Typography from '@mui/material/Typography';

const getMappedVariant = (variant: string) => {
  switch (variant) {
    case "header":
      return "h2";
    case "title":
      return "h3";
    case "subtitle":
      return "h4";
    default:
      return "body1";
  }
};

const TypographyComponent = (props: any) => (
  <Typography variant={getMappedVariant(props.variant)}>
    {props.children}
  </Typography>
);

TypographyComponent.propTypes = {
  children : PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["header", "title", "subtitle", "body"]),
};

TypographyComponent.defaultProps = {
  variant: "header",
  children: "Please mention your text here",
};


export default TypographyComponent;
