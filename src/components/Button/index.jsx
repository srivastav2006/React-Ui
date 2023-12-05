import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-[11px]",
};
const variants = {
  outline: {
    black_900: "border-2 border-black-900 border-solid text-black-900",
    white_A700: "border-2 border-solid border-white-A700 text-white-A700",
    blue_600: "outline outline-[0.5px] outline-blue-600",
  },
  fill: {
    white_A700: "bg-white-A700 text-black-900",
    blue_600_2b: "bg-blue-600_2b",
    blue_600_30: "bg-blue-600_30 text-blue-600",
    blue_600_1e: "bg-blue-600_1e",
    blue_600: "bg-blue-600 shadow-bs text-white-A700",
  },
};
const sizes = {
  xs: "p-[7px]",
  sm: "p-2.5",
  md: "p-3.5",
  lg: "p-[18px]",
  xl: "p-[22px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "fill",
  color = "blue_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "black_900",
    "white_A700",
    "blue_600",
    "blue_600_2b",
    "blue_600_30",
    "blue_600_1e",
  ]),
};

export { Button };
