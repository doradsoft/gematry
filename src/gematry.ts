export function toNumber(
  phrase: string,
  options: Partial<ToNumberOptions> = DEFAULT_TO_NUMBER_OPTIONS
): number {
  // fill missing options with defaults
  options = { ...DEFAULT_TO_NUMBER_OPTIONS, ...options };

  let sum = 0;
  let i = phrase.length;
  const dict = options.treatManzpachDifferently
    ? lettersValuesWithMantzpach
    : lettersValues;
  while (i--) {
    if (phrase[i] >= "א" && phrase[i] <= "ת") {
      const letter = phrase[i] as Letter;
      sum += dict[letter];
    } else if (options.throwIfNotLetter) {
      throw new Error(`Character ${phrase[i]} is not a letter`);
    }
  }
  return sum;
}
export function toLetters(
  number: number,
  options: Partial<ToLettersOptions> = DEFAULT_TO_LETTERS_OPTIONS
): string {
  // fill missing options with defaults
  options = { ...DEFAULT_TO_LETTERS_OPTIONS, ...options };

  let result = "";
  let thousandsPart = 0;
  if (options.thousands) {
    while (number > 1000) {
      const numberOfThousands = Math.floor(number / 1000);
      thousandsPart = numberOfThousands * 1000;
      result += toLetters(numberOfThousands);
      if (options.thousandsSeparator !== "" && thousandsPart !== number) {
        result += options.thousandsSeparator;
      }
      number -= thousandsPart;
    }
  }

  const unitsPart = number % 10;
  const tensPart = (Math.floor(number / 10) % 10) * 10;
  let rest = number - tensPart - unitsPart;
  while (rest >= 400) {
    result += "ת";
    rest -= 400;
  }
  const hundredsPart = rest;
  if (hundredsPart > 0) {
    result += keyByValue(hundredsPart);
  }
  if (options.maskHashem && tensPart + unitsPart === 15) {
    result += "טו";
  } else if (options.maskHashem && tensPart + unitsPart === 16) {
    result += "טז";
  } else {
    result += keyByValue(tensPart);
    result += keyByValue(unitsPart);
  }

  if (
    options.addQuotes &&
    ((thousandsPart == 0 && result.length >= 2) ||
      (thousandsPart > 0 && result.length >= 3))
  ) {
    result = result.slice(0, -1) + '"' + result.slice(-1);
  }

  return result;
}
const lettersValues = {
  א: 1,
  ב: 2,
  ג: 3,
  ד: 4,
  ה: 5,
  ו: 6,
  ז: 7,
  ח: 8,
  ט: 9,
  י: 10,
  כ: 20,
  ל: 30,
  מ: 40,
  נ: 50,
  ס: 60,
  ע: 70,
  פ: 80,
  צ: 90,
  ק: 100,
  ר: 200,
  ש: 300,
  ת: 400,
  ך: 20,
  ם: 40,
  ן: 50,
  ף: 80,
  ץ: 90,
  "": 0,
};
const lettersValuesWithMantzpach = {
  ...lettersValues,
  ך: 500,
  ם: 600,
  ן: 700,
  ף: 800,
  ץ: 900,
};

interface ToNumberOptions {
  treatManzpachDifferently: boolean;
  throwIfNotLetter: boolean;
}
const DEFAULT_TO_NUMBER_OPTIONS: ToNumberOptions = {
  treatManzpachDifferently: false,
  throwIfNotLetter: false,
};
type Letter = keyof typeof lettersValuesWithMantzpach;

interface ToLettersOptions {
  maskHashem: boolean;
  thousands: boolean;
  thousandsSeparator: string;
  addQuotes: boolean;
}
const DEFAULT_TO_LETTERS_OPTIONS: ToLettersOptions = {
  maskHashem: true,
  thousands: false,
  thousandsSeparator: "",
  addQuotes: false,
};

function keyByValue(
  value: number,
  dict: { [key: string]: number } = lettersValues
): string {
  const entries = Object.entries(dict);
  let result = "";
  for (const [key, val] of entries) {
    if (val === value) {
      result = key;
      // not returning directly to not lose coverage
      break;
    }
  }
  return result;
}
