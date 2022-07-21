import React from "react";
import PropTypes from "prop-types";

import IconButton from "@mui/material/IconButton";

const IconButtonComponent = (props: any) => (
  <IconButton color="primary" disabled={props.disabled} onClick={props.onClick}>
    {props.icon}
  </IconButton>
);

IconButtonComponent.propTypes = {
  icon: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

IconButtonComponent.defaultProps = {
  disable: false,
};

export default IconButtonComponent;