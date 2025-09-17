import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] sm:auto-rows-[20rem] md:auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]",
      // Dark sleek design matching the image
      "bg-black/90 backdrop-blur-sm",
      "border border-white/10 hover:border-white/20",
      "shadow-2xl hover:shadow-blue-500/20",
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-4 sm:p-6">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 sm:gap-3 transition-all duration-300 lg:group-hover:-translate-y-10">
        <Icon className="h-6 w-6 sm:h-8 sm:w-8 origin-left transform-gpu text-white transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:text-blue-400" />
        <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-400 transition-all duration-300 leading-tight">
          {name}
        </h3>
        <p className="max-w-lg text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      </div>

      <div
        className={cn(
          "lg:hidden pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0 text-gray-400 hover:text-white"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </a>
        </Button>
      </div>
    </div>

    <div
      className={cn(
        "hidden lg:flex pointer-events-none absolute bottom-0 w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button
        variant="link"
        asChild
        size="sm"
        className="pointer-events-auto p-0 text-gray-400 hover:text-white"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </a>
      </Button>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-blue-500/5" />
  </div>
);

export { BentoCard, BentoGrid };
