import { toNumber } from "../src/gematry";

describe("toNumber", () => {
  describe("when called with letter between 1 to 9", () => {
    const cases: Array<[string, number]> = [
      ["א", 1],
      ["ב", 2],
      ["ג", 3],
      ["ד", 4],
      ["ה", 5],
      ["ו", 6],
      ["ז", 7],
      ["ח", 8],
      ["ט", 9],
    ];
    test.each(cases)(
      "when called with letter %p returns number %p",
      (input, expected) => {
        const actual = toNumber(input);
        expect(actual).toBe(expected);
      }
    );
  });
  describe("when called with תשפג", () => {
    it("returns 783", () => {
      const actual = toNumber("תשפג");
      expect(actual).toBe(783);
    });
  });
  describe("when called with manzpach", () => {
    describe("when treatManzpachDifferently option is turned off", () => {
      const cases: Array<[string, number]> = [
        ["ך", 20],
        ["ם", 40],
        ["ן", 50],
        ["ף", 80],
        ["ץ", 90],
      ];

      test.each(cases)(
        "when called with letter %p returns number %p",
        (input, expected) => {
          const actual = toNumber(input);
          expect(actual).toBe(expected);
        }
      );
    });
    describe("when treatManzpachDifferently option is turned on", () => {
      const cases: Array<[string, number]> = [
        ["ך", 500],
        ["ם", 600],
        ["ן", 700],
        ["ף", 800],
        ["ץ", 900],
      ];

      test.each(cases)(
        "when called with letter %p returns number %p",
        (input, expected) => {
          const actual = toNumber(input, { treatManzpachDifferently: true });
          expect(actual).toBe(expected);
        }
      );
    });
  });
  describe("when called with illegal characters", () => {
    describe("when throwIfNoLetter option is turned off", () => {
      it("ignores the illegal characters", () => {
        const actual = toNumber("תשפג");
        expect(actual).toBe(783);
      });
    });
    describe("when throwIfNoLetter option is turned on", () => {
      it("throws", () => {
        expect(() => toNumber("תשפ~ג", { throwIfNotLetter: true })).toThrow(
          "Character ~ is not a letter"
        );
      });
    });
  });
});
