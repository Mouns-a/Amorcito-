
import type { CSSProperties } from "react";

const stars = Array.from({ length: 100 }, (_, i) => ({
  left: `${(i * 37.7) % 100}%`,
  top: `${(i * 61.3) % 100}%`,
  delay: `${(i % 8) * 0.45}s`,
  duration: `${2 + (i % 5) * 0.7}s`,
  size: `${1 + (i % 3)}px`,
}));

export default function StarBackground() {
  return (
    <div className="star-background" aria-hidden="true">
      {stars.map((star, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
