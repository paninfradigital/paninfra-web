"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth < 768 ? 230 : 384;
      const gap = window.innerWidth < 768 ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        {/* Scroll track */}
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
          style={{ paddingBottom: "8px" }}
        >
          <div
            className="flex flex-row justify-start"
            style={{ gap: "1.5rem", paddingLeft: "5rem", paddingRight: "5rem" }}
          >
            {items.map((item, index) => (
              <motion.div
                key={"card" + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * index, ease: "easeOut" } }}
                style={index % 2 === 0 ? {
                  margin: "0 1.5rem",
                  padding: "0.5rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "1.5rem",
                  background: "rgba(255, 255, 255, 0.02)",
                } : {}}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nav arrows — aligned with section left padding */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "0.75rem",
            paddingLeft: "2.5rem",
            marginTop: "2rem",
          }}
        >
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            style={{
              width: "44px", height: "44px", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: canScrollLeft ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.15)",
              cursor: canScrollLeft ? "pointer" : "default",
              transition: "background 0.2s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: canScrollLeft ? "#ffffff" : "rgba(255,255,255,0.3)" }}>
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            style={{
              width: "44px", height: "44px", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: canScrollRight ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.15)",
              cursor: canScrollRight ? "pointer" : "default",
              transition: "background 0.2s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: canScrollRight ? "#ffffff" : "rgba(255,255,255,0.3)" }}>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") handleClose();
    }
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#ffffff" }}>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
                style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#ee2e22", marginBottom: "0.5rem" }}
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
                style={{ fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)", color: "#005c97", marginBottom: "1.5rem" }}
              >
                {card.title}
              </motion.p>
              {card.content}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-2xl overflow-hidden flex flex-col items-start justify-end relative z-10 cursor-pointer"
        style={{ width: "300px", height: "420px", flexShrink: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({ "data-layout": layout } as any)}
      >
        {/* Bottom gradient for text legibility */}
        <div
          style={{
            position: "absolute", inset: 0, zIndex: 20, pointerEvents: "none",
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
          }}
        />
        {/* Text — pinned to bottom */}
        <div style={{ position: "relative", zIndex: 30, padding: "1.75rem", width: "100%", textAlign: "center" }}>
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            style={{ fontSize: "0.55rem", letterSpacing: "0.25em", color: "#ee2e22", marginBottom: "0.6rem", fontWeight: 700 }}
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            style={{ fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)", color: "#ffffff", lineHeight: 1.2, fontSize: "1.2rem", fontWeight: 700, textAlign: "center" }}
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={`transition duration-300 ${isLoading ? "blur-sm" : "blur-0"} ${className}`}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      alt={alt}
      {...rest}
    />
  );
};
