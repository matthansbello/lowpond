"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS, Testimonial } from "@/lib/testimonials";

const AUTOPLAY_INTERVAL = 6000;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction >= 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction >= 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="bg-white p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100 relative h-full">
      <Quote className="absolute top-8 right-8 w-12 h-12 text-accent-blue opacity-10" />
      <p className="text-xl text-text-primary leading-relaxed mb-8 italic relative z-10">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full shrink-0 flex items-center justify-center text-gray-500 text-sm font-medium">
          {item.name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-text-primary">{item.name}</div>
          <div className="text-sm text-text-muted">
            {item.title ? `${item.title}, ` : ""}
            <span className="text-accent-blue">{item.organization}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((nextIndex: number) => {
    if (nextIndex === index) return;
    setDirection(nextIndex > index ? 1 : -1);
    setIndex(nextIndex);
  }, [index]);

  const goNext = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goNext]);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      goNext();
    } else if (info.offset.x > swipeThreshold) {
      goPrev();
    }
  };

  return (
    <>
      <div className="md:hidden overflow-hidden">
        <div className="relative min-h-[360px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 touch-pan-y"
            >
              <TestimonialCard item={TESTIMONIALS[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              onClick={() => goTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === index ? "w-6 bg-accent-blue" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`View testimonial from ${item.name}`}
              aria-current={idx === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
        {TESTIMONIALS.map((item) => (
          <TestimonialCard key={item.name} item={item} />
        ))}
      </div>
    </>
  );
}
