import React, { FC } from "react";
type ButtonVariants = "contained" | "outlined" | "text";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    /**
     * Used to decide the variant of the appearance
     **/
    variant?: ButtonVariants;
    /**
     * Used to decide the color of the appearance
     **/
    color?: "primary" | "secondary" | "default";
    /**
     * Used to decide the size of the button
     **/
    size?: "small" | "medium" | "large";
    /**
     * Used to indicate the button is loading
     **/
    isLoading?: boolean;
}
declare const Button: FC<ButtonProps>;
export default Button;
