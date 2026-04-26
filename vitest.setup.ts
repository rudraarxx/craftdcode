import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Mock Canvas for GSAP if needed
import "vitest-canvas-mock";

// Mock GSAP
const gsapMock = {
  to: vi.fn().mockReturnThis(),
  from: vi.fn().mockReturnThis(),
  fromTo: vi.fn().mockReturnThis(),
  set: vi.fn().mockReturnThis(),
  timeline: vi.fn(() => ({
    to: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    fromTo: vi.fn().mockReturnThis(),
    add: vi.fn().mockReturnThis(),
  })),
  registerPlugin: vi.fn(),
  context: vi.fn((cb) => {
    if (typeof cb === 'function') return cb();
    return { revert: vi.fn() };
  }),
  ticker: {
    add: vi.fn(),
    remove: vi.fn(),
    lagSmoothing: vi.fn(),
  },
};

vi.mock("gsap", () => ({
  default: gsapMock,
  ...gsapMock,
}));

vi.mock("gsap/ScrollTrigger", () => ({
  ScrollTrigger: {
    update: vi.fn(),
    refresh: vi.fn(),
    create: vi.fn(),
    getAll: vi.fn(() => []),
  },
}));

// Mock Lenis
vi.mock("lenis", () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      on: vi.fn(),
      raf: vi.fn(),
      destroy: vi.fn(),
    })),
  };
});
