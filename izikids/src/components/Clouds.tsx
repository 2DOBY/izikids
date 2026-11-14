import type { CSSProperties } from "react";

// y — высота от верха, s — размер, o — прозрачность, t — секунд на пролёт,
// p — на какой точке пути облако стартует (чтобы небо не было пустым при загрузке)
const clouds = [
  { y: 4, s: 1.5, o: 0.9, t: 140, p: 0.1 },
  { y: 16, s: 0.8, o: 0.6, t: 190, p: 0.55 },
  { y: 30, s: 1.2, o: 0.85, t: 120, p: 0.8 },
  { y: 46, s: 0.7, o: 0.55, t: 210, p: 0.3 },
  { y: 58, s: 1.7, o: 0.8, t: 160, p: 0.65 },
  { y: 74, s: 0.9, o: 0.6, t: 180, p: 0.02 },
  { y: 86, s: 1.4, o: 0.75, t: 150, p: 0.4 },
];

export default function Clouds() {
  return (
    <div className="sky" aria-hidden="true">
      {clouds.map((c, i) => (
        <span
          key={i}
          className="cloud"
          style={
            {
              "--y": `${c.y}%`,
              "--s": c.s,
              "--o": c.o,
              "--t": `${c.t}s`,
              "--dl": `${-c.t * c.p}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
