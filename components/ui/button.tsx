import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 border-border border-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-neobrutalism active:bg-primary-active hover:bg-primary-hover hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none ring-offset-white focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-none",
        secondary:
          "bg-secondary text-secondary-foreground shadow-neobrutalism active:bg-secondary-active hover:bg-secondary-hover hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none ring-offset-white focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-none",
        tertiary:
          "bg-tertiary text-tertiary-foreground shadow-neobrutalism active:bg-tertiary-active hover:bg-tertiary-hover hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none ring-offset-white focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
