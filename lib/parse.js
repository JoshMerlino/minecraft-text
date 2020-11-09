import serialize from "./serialize.js";
import { Colors, Formats } from "./static.js";

export default function parse(text, delimiter) {

	// Serialize text to default delimiter
	text = serialize(text, delimiter);

	let result = { text: "", extra: [] };
    let section = result;
    let chars = text.split("");

	// Iterate through each character
    for (let i = 0; i < chars.length; i++) {

		// If the charecter is not a delimiter
        if (chars[i] !== "§") {
            section.text += chars[i];
			continue;
        }

		// If it is a reset token (§r)
		if (chars[i + 1] === "r") {
            let innerObj = { text: "", extra: [] };
            result.extra.push(innerObj);
            section = innerObj;
            i++;
			continue;
        }

        let codeStr = `§${chars[i + 1]}`;
        let innerObj = { text: "", extra: [] };
        if (Colors.hasOwnProperty(codeStr)) innerObj.color = Colors[codeStr];
        if (Formats.hasOwnProperty(codeStr)) innerObj[Formats[codeStr]] = true;
        section.extra.push(innerObj);
        section = innerObj;
        i++;

    }

	return result;

}
