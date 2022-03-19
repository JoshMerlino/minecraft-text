import serialize from "./serialize";
import { Colors, Formats } from "./static";

export default function parse(text: string, delimiter = "§"): JSONText {

	// Serialize text to default delimiter
	text = serialize(text, delimiter);

	const result: JSONText = { text: "", extra: [] };
	let section = result;
	const chars = text.split("");

	// Iterate through each character
	for (let i = 0; i < chars.length; i++) {

		// If the charecter is not a delimiter
		if (chars[i] !== "§") {
			section.text += chars[i];
			continue;
		}

		// If it is a reset token (§r)
		if (chars[i + 1] === "r") {
			const innerObj = { text: "", extra: [] };
			result.extra.push(innerObj);
			section = innerObj;
			i++;
			continue;
		}

		const codeStr = `§${chars[i + 1]}`;
		const innerObj: JSONText = { text: "", extra: [] };
		if (Colors.hasOwnProperty(codeStr)) innerObj.color = Colors[codeStr];
		if (Formats.hasOwnProperty(codeStr)) innerObj[Formats[codeStr]] = true;
		section.extra.push(innerObj);
		section = innerObj;
		i++;

	}

	return result;

}
