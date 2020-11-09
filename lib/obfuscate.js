// Map characters to their widths
const Chars = {
	THIN: "!i|,.".split(""),
	MID: "Ilt\'".split(""),
	WIDE: "\"#$%&()*+-/0123456789<=>?@aAbBcCdDeEfFgGhHjJkKLmMnNoOpPqQrRsSTuUvVwWxXyYzZ{}~".split("")
}

// Export `Chars`
export { Chars };

// Export `obfuscate` function
export default function obfuscate(text) {

	const obfuscated = [];

	// Iterate through each character
	text.split("").map(char => {

		// Scramble wide characters
		if(Chars.WIDE.indexOf(char) > -1) return obfuscated.push(Chars.WIDE[Math.floor(Math.random() * Chars.WIDE.length)]);

		// Scramble medium characters
		if(Chars.MID.indexOf(char) > -1) return obfuscated.push(Chars.MID[Math.floor(Math.random() * Chars.MID.length)]);

		// Scramble thin characters
		if(Chars.THIN.indexOf(char) > -1) return obfuscated.push(Chars.THIN[Math.floor(Math.random() * Chars.THIN.length)]);

		// If char wasn't matched
		obfuscated.push(char);

	});

	// Return result
	return obfuscated.join("");

}
