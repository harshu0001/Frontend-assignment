import {
  Atom,
  Calculator,
  Book,
  Flask,
  Compass,
  Ruler,
  ArrowsClockwise,
  ArrowRight,
  Infinity,
  Magnet,
  MathOperations,
} from "phosphor-react";

export const phosphorIcons = [
  Atom,
  Calculator,
  Book,
  Flask,
  Compass,
  Ruler,
  ArrowsClockwise,
  ArrowRight,
  Infinity,
  Magnet,
  MathOperations,
];

export function getRandomIcon(index: number) {
  return phosphorIcons[index % phosphorIcons.length];
}
