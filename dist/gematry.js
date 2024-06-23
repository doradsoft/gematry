/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/gematry.ts":
/*!************************!*\
  !*** ./src/gematry.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toLetters: () => (/* binding */ toLetters),\n/* harmony export */   toNumber: () => (/* binding */ toNumber)\n/* harmony export */ });\nfunction toNumber(phrase, options = DEFAULT_TO_NUMBER_OPTIONS) {\n    // fill missing options with defaults\n    options = { ...DEFAULT_TO_NUMBER_OPTIONS, ...options };\n    let sum = 0;\n    let i = phrase.length;\n    const dict = options.treatManzpachDifferently\n        ? lettersValuesWithMantzpach\n        : lettersValues;\n    while (i--) {\n        if (phrase[i] >= \"א\" && phrase[i] <= \"ת\") {\n            const letter = phrase[i];\n            sum += dict[letter];\n        }\n        else if (options.throwIfNotLetter) {\n            throw new Error(`Character ${phrase[i]} is not a letter`);\n        }\n    }\n    return sum;\n}\nfunction toLetters(number, options = DEFAULT_TO_LETTERS_OPTIONS) {\n    // fill missing options with defaults\n    options = { ...DEFAULT_TO_LETTERS_OPTIONS, ...options };\n    let result = \"\";\n    let thousandsPart = 0;\n    if (options.thousands) {\n        while (number > 1000) {\n            const numberOfThousands = Math.floor(number / 1000);\n            thousandsPart = numberOfThousands * 1000;\n            result += toLetters(numberOfThousands);\n            if (options.thousandsSeparator !== \"\" && thousandsPart !== number) {\n                result += options.thousandsSeparator;\n            }\n            number -= thousandsPart;\n        }\n    }\n    const unitsPart = number % 10;\n    const tensPart = (Math.floor(number / 10) % 10) * 10;\n    let rest = number - tensPart - unitsPart;\n    while (rest >= 400) {\n        result += \"ת\";\n        rest -= 400;\n    }\n    const hundredsPart = rest;\n    if (hundredsPart > 0) {\n        result += keyByValue(hundredsPart);\n    }\n    result += keyByValue(tensPart);\n    result += keyByValue(unitsPart);\n    if (options.addQuotes &&\n        ((thousandsPart == 0 && result.length >= 2) ||\n            (thousandsPart > 0 && result.length >= 3))) {\n        result = result.slice(0, -1) + '\"' + result.slice(-1);\n    }\n    return result;\n}\nconst lettersValues = {\n    א: 1,\n    ב: 2,\n    ג: 3,\n    ד: 4,\n    ה: 5,\n    ו: 6,\n    ז: 7,\n    ח: 8,\n    ט: 9,\n    י: 10,\n    כ: 20,\n    ל: 30,\n    מ: 40,\n    נ: 50,\n    ס: 60,\n    ע: 70,\n    פ: 80,\n    צ: 90,\n    ק: 100,\n    ר: 200,\n    ש: 300,\n    ת: 400,\n    ך: 20,\n    ם: 40,\n    ן: 50,\n    ף: 80,\n    ץ: 90,\n    \"\": 0,\n};\nconst lettersValuesWithMantzpach = {\n    ...lettersValues,\n    ך: 500,\n    ם: 600,\n    ן: 700,\n    ף: 800,\n    ץ: 900,\n};\nconst DEFAULT_TO_NUMBER_OPTIONS = {\n    treatManzpachDifferently: false,\n    throwIfNotLetter: false,\n};\nconst DEFAULT_TO_LETTERS_OPTIONS = {\n    thousands: false,\n    thousandsSeparator: \"\",\n    addQuotes: false,\n};\nfunction keyByValue(value, dict = lettersValues) {\n    const entries = Object.entries(dict);\n    let result = \"\";\n    for (const [key, val] of entries) {\n        if (val === value) {\n            result = key;\n            // not returning directly to not lose coverage\n            break;\n        }\n    }\n    return result;\n}\n\n\n//# sourceURL=webpack://gematry/./src/gematry.ts?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = {};
/******/ __webpack_modules__["./src/gematry.ts"](0, __webpack_exports__, __webpack_require__);
/******/ var __webpack_exports__toLetters = __webpack_exports__.toLetters;
/******/ var __webpack_exports__toNumber = __webpack_exports__.toNumber;
/******/ export { __webpack_exports__toLetters as toLetters, __webpack_exports__toNumber as toNumber };
/******/ 
