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

const Img = ({ src, alt, width, height, className = "", ...restProps }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...restProps}
    />
  );
};

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`w-full ${props.className} flex justify-center items-center p-[55px] md:p-5 bg-amber-400 mt-10`}
    >
      <div className="flex w-full flex-col items-center">
        <div className="flex flex-col items-center gap-[30px]">
          <Text size="4xl" as="p" className="capitalize">
            Eat, Cook, Repeat
          </Text>
          <Text size="lg" as="p" className="!font-normal capitalize !text-gray-600">
            Share your best recipe by uploading here!
          </Text>
        </div>
        <div className="flex w-full items-center justify-between mt-[50px]">
          <Text size="s" as="p" className="!font-poppins capitalize !text-gray-600 text-center w-full">
            Product Company Learn more Get in touch
          </Text>
          <div className="flex items-center gap-[5px]">
            <img src="/images/img_user.svg" width={15} height={14} alt="user image" className="h-[14px] w-[15px]" />
            <Text size="xs" as="p" className="!font-poppins capitalize !text-black-900">
              Arkademy
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}
