"use client";

import { motion } from "framer-motion";

/**
 * Oversized outlined "birstock" watermark sitting behind the footer content.
 * The outline draws itself once when the footer scrolls into view.
 */
export function FooterWordmark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 translate-y-[18%] select-none px-2 opacity-[0.22]"
    >
      <svg viewBox="0 0 1000 190" className="block w-full" role="presentation">
        <defs>
          <linearGradient id="fwStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#f7883a" />
            <stop offset="0.55" stopColor="#ed6211" />
            <stop offset="1" stopColor="#b34104" />
          </linearGradient>
        </defs>
        <motion.text
          x="500"
          y="168"
          textAnchor="middle"
          textLength="980"
          lengthAdjust="spacingAndGlyphs"
          className="fill-transparent font-display"
          style={{ fontSize: 210, letterSpacing: "-0.04em" }}
          stroke="url(#fwStroke)"
          strokeWidth={1.6}
          strokeDasharray={1400}
          initial={{ strokeDashoffset: 1400 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <tspan fontWeight={500}>bir</tspan>
          <tspan fontWeight={800}>stock</tspan>
        </motion.text>
      </svg>
    </div>
  );
}
