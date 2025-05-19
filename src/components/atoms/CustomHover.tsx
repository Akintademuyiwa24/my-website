import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", move);

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-100 h-100 rounded-full bg-[#3f4248] opacity-5 z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-30 ease-in-out hidden md:block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}