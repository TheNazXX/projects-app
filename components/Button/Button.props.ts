import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  type?: "button" | "submit";
  leftIcon?: string;
  rightIcon?: string;
  isSubmitting?: boolean;
  handleClick?: MouseEventHandler;
  bgColor?: string;
  textColor?: string;
  disabled?: boolean;
};