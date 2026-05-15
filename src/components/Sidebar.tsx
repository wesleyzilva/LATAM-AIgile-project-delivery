"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, string>
    ) => void;
  }
}

const menuItems = [
  { label: "Home", href: "#home", isPage: false },
  { label: "About", href: "#about", isPage: false },
  { label: "Services", href: "#services", isPage: false },
  { label: "Portfolio", href: "#portfolio", isPage: false },
  { label: "Blog", href: "#blog", isPage: false },
  { label: "Contact", href: "/contact", isPage: true },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const closeSidebar = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSidebar();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeSidebar]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleMenuItemClick = (label: string, href: string, isPage: boolean) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "click", {
        event_category: "menu",
        event_label: label,
      });
    }

    closeSidebar();

    if (isPage) {
      router.push(href);
      return;
    }

    const targetId = href.replace("#", "");
    const tryScroll = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Small delay to let sidebar close animation finish
    setTimeout(tryScroll, 300);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="sidebar-nav"
        className="fixed top-4 left-4 z-50 flex flex-col justify-center items-center w-11 h-11 gap-1.5 rounded-md bg-[#0A2540] text-white shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A2540]"
      >
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-6 h-0.5 bg-white" />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black"
            onClick={closeSidebar}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="sidebar-nav"
            key="sidebar"
            role="navigation"
            aria-label="Main navigation"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 z-50 h-full w-[70vw] max-w-xs bg-[#0A2540] shadow-2xl flex flex-col pt-6 pb-10"
          >
            {/* Close Button */}
            <div className="flex justify-end px-5 mb-8">
              <button
                onClick={closeSidebar}
                aria-label="Close navigation menu"
                className="text-white w-10 h-10 flex items-center justify-center rounded-md text-2xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                ✕
              </button>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col gap-1 px-6">
              {menuItems.map(({ label, href, isPage }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick(label, href, isPage);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleMenuItemClick(label, href, isPage);
                      }
                    }}
                    className="block w-full py-4 px-3 text-white text-xl font-bold rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
