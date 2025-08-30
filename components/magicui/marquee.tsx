import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({ children, pauseOnHover = false, className }: MarqueeProps) {
  return (
    <div
      className={cn(
        "flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex animate-marquee items-center justify-center whitespace-nowrap",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex animate-marquee items-center justify-center whitespace-nowrap",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}