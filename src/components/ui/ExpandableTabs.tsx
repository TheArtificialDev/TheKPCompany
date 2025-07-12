"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tab {
  title: string;
  icon: LucideIcon;
  href: string;
  type?: never;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
  href?: never;
}

type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
  activeIndex?: number | null;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  animate: (isExpanded: boolean) => ({
    gap: isExpanded ? ".75rem" : 0,
    paddingLeft: isExpanded ? "1.25rem" : "1rem",
    paddingRight: isExpanded ? "1.25rem" : "1rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.05, type: "spring" as const, bounce: 0, duration: 0.8 };

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-electric-lime",
  onChange,
  activeIndex = null,
}: ExpandableTabsProps) {
  const [selected, setSelected] = React.useState<number | null>(activeIndex);
  const [hovered, setHovered] = React.useState<number | null>(null);
  const outsideClickRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setSelected(activeIndex);
  }, [activeIndex]);

  // useOnClickOutside(outsideClickRef, () => {
  //   setSelected(null);
  //   onChange?.(null);
  // });

  const handleSelect = (index: number, href: string) => {
    setSelected(index);
    onChange?.(index);
    // Navigate to the href
    if (href.startsWith('http')) {
      window.open(href, '_blank');
    } else {
      window.location.href = href;
    }
  };

  const Separator = () => (
    <div className="mx-1 h-[24px] w-[1.2px] bg-white/30" aria-hidden="true" />
  );

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        "flex flex-wrap items-center gap-3 rounded-2xl bg-white/5 backdrop-blur-2xl border-2 border-white/30 p-2 shadow-2xl",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        const isSelected = selected === index;
        const isHovered = hovered === index;
        const isExpanded = isSelected || isHovered;
        
        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial={false}
            animate="animate"
            custom={isExpanded}
            onClick={() => handleSelect(index, tab.href)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            transition={transition}
            className={cn(
              "relative flex items-center rounded-xl px-5 py-3 text-base font-semibold transition-colors duration-300",
              isSelected
                ? "bg-white/20 text-deep-space backdrop-blur-lg shadow-lg"
                : "text-white/90 hover:bg-white/10 hover:text-electric-lime"
            )}
          >
            <Icon size={22} />
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
