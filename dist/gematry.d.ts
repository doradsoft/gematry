export declare function toNumber(phrase: string, options?: ToNumberOptions): number;
export declare function toLetters(number: number, options?: ToLettersOptions): string;
interface ToNumberOptions {
    treatManzpachDifferently?: boolean;
    throwIfNotLetter?: boolean;
}
interface ToLettersOptions {
    thousands?: boolean;
    thousandsSeparator?: string;
    addQuotes?: boolean;
}
export {};
//# sourceMappingURL=gematry.d.ts.map