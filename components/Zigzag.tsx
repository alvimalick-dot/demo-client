/**
 * Jagged zigzag divider — Crusteez's signature edge treatment.
 *
 * - `vertical` renders a vertical strip (teeth pointing right) for the hero
 *   split between text and image.
 * - otherwise renders a horizontal strip (teeth pointing down) that sits at
 *   the bottom edge of a section. `flip` mirrors it so teeth point up / left.
 *
 * `fill` should be the background color of the section that OWNS the strip,
 * so the teeth visually cut into the section next to it.
 */

function horizontalPath(flip: boolean) {
  let d = "M0,0";
  for (let i = 0; i <= 100; i++) d += ` L${i * 10},${i % 2 === 0 ? 0 : 20}`;
  d += " L1000,20 L0,20 Z";
  return d;
}

function verticalPath() {
  let d = "M0,0";
  for (let i = 0; i <= 100; i++) d += ` L${i % 2 === 0 ? 0 : 20},${i * 10}`;
  d += " L20,1000 L0,1000 Z";
  return d;
}

type ZigzagProps = {
  fill: string;
  flip?: boolean;
  vertical?: boolean;
  className?: string;
};

export default function Zigzag({ fill, flip = false, vertical = false, className = "" }: ZigzagProps) {
  if (vertical) {
    return (
      <svg
        viewBox="0 0 20 1000"
        preserveAspectRatio="none"
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 h-full w-5 ${className}`}
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
      >
        <path d={verticalPath()} fill={fill} />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 1000 20"
      preserveAspectRatio="none"
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 h-5 w-full ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <path d={horizontalPath(flip)} fill={fill} />
    </svg>
  );
}
