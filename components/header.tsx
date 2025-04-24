"use client";

import { NavBar } from "./nav-bar";
import { Socials } from "./socials";
import { Me } from "@/config/me";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious() || 0;
    const diff = current - prev;

    if (diff > 0 && !hidden) {
      setHidden(true);
    } else if (diff < 0 && hidden) {
      setHidden(false);
    }
  });

  const variants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -110, opacity: 0 },
  };

  return (
    <motion.header
      className="fixed mt-4 h-20 w-full px-4"
      variants={variants}
      initial="visible"
      animate={hidden ? "hidden" : "visible"} // pass in our React state!
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <div className="shadow-neobrutalism bg-header-background container mx-auto flex h-full items-center justify-between border-4 border-black px-6">
        {/** LOGO */}
        <h1 className="group text-2xl font-bold">
          <Link
            href="/"
            className={cn(
              "group-hover:underline group-hover:decoration-current group-hover:decoration-2 group-hover:underline-offset-4",
              "focus-visible:ring-offset-header-background focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-8 focus-visible:outline-none"
            )}
          >
            {`<${Me.firstName} />`}
          </Link>
        </h1>

        {/** NAVBAR */}
        <NavBar />

        {/** SOCIAL ICONS */}
        <Socials />
      </div>
    </motion.header>
  );
}
