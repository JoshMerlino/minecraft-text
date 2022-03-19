import { CharSizes } from "./static";

// Export `obfuscate` function
export default function obfuscate(text: string): string {

	const obfuscated: string[] = [];

	// Iterate through each character
	text.split("").map(char => {

		// Scramble wide characters
		if (CharSizes.WIDE.indexOf(char) > -1) return obfuscated.push(CharSizes.WIDE[Math.floor(Math.random() * CharSizes.WIDE.length)]);

		// Scramble medium characters
		if (CharSizes.MID.indexOf(char) > -1) return obfuscated.push(CharSizes.MID[Math.floor(Math.random() * CharSizes.MID.length)]);

		// Scramble thin characters
		if (CharSizes.THIN.indexOf(char) > -1) return obfuscated.push(CharSizes.THIN[Math.floor(Math.random() * CharSizes.THIN.length)]);

		// If char wasn't matched
		obfuscated.push(char);

	});

	// Return result
	return obfuscated.join("");

}

// If this package is running in the browser, search for obfuscated text and obfuscate
(function() {

	// If the function isn't running in the browser then terminate.
	if (typeof window === "undefined") return console.warn("Not running in the browser. Obfuscated text will not be re-obfuscated.");

}());
