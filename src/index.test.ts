import { describe, it, expect } from "bun:test";
import { add } from "./index";

describe("add", () => {
  it("should add numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
