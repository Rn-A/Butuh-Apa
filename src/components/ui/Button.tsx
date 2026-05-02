import { cn } from "../../lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "motion/react";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary-red text-white hover:opacity-90 shadow-lg shadow-red-500/20",
      outline: "border-2 border-primary-black text-primary-black hover:bg-gray-50",
      ghost: "text-primary-black hover:text-primary-red",
    };

    const sizes = {
      sm: "px-6 py-2 text-xs uppercase tracking-wider font-bold rounded-full",
      md: "px-8 py-3 text-sm font-bold rounded-xl",
      lg: "px-8 py-4 text-lg font-bold rounded-xl",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none gap-3",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
