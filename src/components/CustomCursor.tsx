import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if device supports fine hover (desktop/mouse)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("[data-cursor-expand]") ||
        target?.closest("input") ||
        target?.closest("textarea") ||
        target?.closest("select") ||
        target?.tagName === "ARTICLE"
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", handleHoverStart, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [visible]);

  if (isTouch || !visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      aria-hidden="true"
    >
      <div
        className={`rounded-full transition-all duration-200 ease-out border border-[#C59445]/80 ${
          hovered
            ? "w-11 h-11 bg-[#C59445]/15 backdrop-blur-[1px] scale-100"
            : "w-3 h-3 bg-[#C59445] shadow-sm scale-100"
        }`}
      />
    </div>
  );
}
