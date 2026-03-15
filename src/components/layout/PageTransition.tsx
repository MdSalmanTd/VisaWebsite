"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 10,
            filter: shouldReduceMotion ? "blur(0px)" : "blur(4px)",
          }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : -10,
            filter: shouldReduceMotion ? "blur(0px)" : "blur(3px)",
          }}
          transition={{ duration: shouldReduceMotion ? 0.18 : 0.34, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`overlay-${pathname}`}
          className="fixed inset-0 z-100 pointer-events-none flex items-center justify-center bg-background/95 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 0.55,
            delay: shouldReduceMotion ? 0 : 0.08,
            ease: "easeOut",
          }}
        >
          <motion.div
            initial={{
              scale: shouldReduceMotion ? 1 : 0.8,
              opacity: 0,
              y: shouldReduceMotion ? 0 : 8,
              rotate: shouldReduceMotion ? 0 : -4,
            }}
            animate={{
              scale: shouldReduceMotion ? 1 : [0.8, 1.06, 1],
              opacity: [0, 1, 1],
              y: shouldReduceMotion ? 0 : [8, 0, 0],
              rotate: shouldReduceMotion ? 0 : [-4, 0, 0],
            }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.65,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Eduvance"
              width={160}
              height={48}
              priority
              className="h-auto w-36 md:w-40"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
