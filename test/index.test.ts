import { describe, expect, test } from "bun:test";

import { greet } from "../src/index";

describe("greet", () => {
  test("greets world by default", () => {
    expect(greet()).toBe("Hello, world!");
  });

  test("greets a provided name", () => {
    expect(greet("TypeScript")).toBe("Hello, TypeScript!");
  });
});
