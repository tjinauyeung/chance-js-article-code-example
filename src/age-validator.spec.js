import AgeValidator from "./age-validator";
import Chance from "chance";

const chance = new Chance();

const user = {
  name: chance.name(),
  age: chance.age()
};

describe("AgeValidator", () => {
  describe("isAdult", () => {
    it("returns true if age is 18 and over", () => {
      const adult = {
        ...user,
        age: chance.age({ type: "adult" })
      };
      expect(adult.age >= 18).toBe(true);
      expect(AgeValidator.isAdult(adult)).toBe(true);
    });

    it("returns true if age under 18", () => {
      const child = {
        ...user,
        age: chance.age({ type: "child" })
      };
      expect(child.age < 18).toBe(true);
      expect(AgeValidator.isAdult(child)).toBe(false);
    });
  });
});
