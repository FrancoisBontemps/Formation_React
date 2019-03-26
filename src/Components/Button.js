import React from "react";
import { Button as MButton } from "@material-ui/core";

export const Button = ({ label, ...props }) => (
  <MButton variant="contained" color="secondary" {...props}>
    {label}
  </MButton>
);
