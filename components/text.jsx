'use client'
import React from "react";

const sizes = {
  "5xl": "text-5xl font-medium md:text-[44px] sm:text-[38px]",
  "6xl": "text-[56px] font-medium md:text-5xl sm:text-[42px]",
  xs: "text-xs font-medium",
  lg: "text-2xl font-medium md:text-[22px]",
  "7xl": "text-7xl font-normal md:text-5xl",
  s: "text-[13px] font-medium",
  "2xl": "text-2xl font-medium md:text-[22px]",
  "3xl": "text-[32px] font-medium md:text-3xl sm:text-[28px]",
  "4xl": "text-[42px] font-medium md:text-[38px] sm:text-[32px]",
  xl: "text-lg font-medium",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-800_01 font-airbnbcerealapp ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };