import { add } from "./Core";

describe(add, () => {
    it("should add two numbers", () => {
        expect(add(1, 2)).toBe(3);
    });
});
