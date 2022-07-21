import React from "react";
import PropTypes from "prop-types";

import IconButton from "@mui/material/IconButton";

export interface IconProps {
  icon: any,
  disabled: boolean,
  onClick: () => void,
}

const IconButtonComponent = ({icon,disabled,onClick} : IconProps) => (
  <IconButton color="primary" disabled={disabled} onClick={onClick}>
    {icon}
  </IconButton>
);

IconButtonComponent.defaultProps = {
  disable: false,
};

export default IconButtonComponent;