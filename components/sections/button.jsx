'use client'
import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-md",
};
const variants = {
    fill: {
        amber_400: "bg-amber-400 text-white-A700",
    },
};
const sizes = {
    xs: "h-[64px] px-[35px] text-base",
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "xs",
    color = "amber_400",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer text-white-A700 text-base font-medium bg-amber-400 ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["amber_400"]),
};

export { Button };
