import { toLetters } from "../src/gematry";

describe("toLetters", () => {
  describe("when called with number between 1 to 9", () => {
    const cases: Array<[number, string]> = [
      [1, "א"],
      [2, "ב"],
      [3, "ג"],
      [4, "ד"],
      [5, "ה"],
      [6, "ו"],
      [7, "ז"],
      [8, "ח"],
      [9, "ט"],
    ];
    test.each(cases)(
      "when called with number %p returns letter %p",
      (input, expected) => {
        const actual = toLetters(input);
        expect(actual).toBe(expected);
      }
    );
  });
});
describe("when called with 400", () => {
  it("returns ת", () => {
    const actual = toLetters(400);
    expect(actual).toBe("ת");
  });
});
describe("when called with 783", () => {
  it("returns תשפג", () => {
    const actual = toLetters(783);
    expect(actual).toBe("תשפג");
  });
  describe("when addQuotes option is true", () => {
    it("returns ה'תשפ\"ג", () => {
      const actual = toLetters(783, {
        thousands: true,
        thousandsSeparator: "'",
        addQuotes: true,
      });
      expect(actual).toBe('תשפ"ג');
    });
  });
});

describe("when called with 5783", () => {
  describe("when thousands option is true", () => {
    it("returns התשפג", () => {
      const actual = toLetters(5783, { thousands: true });
      expect(actual).toBe("התשפג");
    });
    describe("when thousandsSeparator option is '", () => {
      it("returns ה'תשפג", () => {
        const actual = toLetters(5783, {
          thousands: true,
          thousandsSeparator: "'",
        });
        expect(actual).toBe("ה'תשפג");
      });
      describe("when addQuotes option is true", () => {
        it("returns ה'תשפ\"ג", () => {
          const actual = toLetters(5783, {
            thousands: true,
            thousandsSeparator: "'",
            addQuotes: true,
          });
          expect(actual).toBe("ה'תשפ\"ג");
        });
      });
    });
    describe("when addQuotes option is true", () => {
      it('returns התשפ"ג', () => {
        const actual = toLetters(5783, { thousands: true, addQuotes: true });
        expect(actual).toBe('התשפ"ג');
      });
    });
  });
});
