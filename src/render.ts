import parse from "./parse.js";
import { Classes } from "./static.js";

// Wrap content in the specified tag
export function wrap(tag: string, content: string): string {
	return `<${tag}>${content}</${tag.split(" ")[0]}>`;
}

// Render components
export function renderComponent(jsonPart: JSONText): string {

	let classlist = "";
	let text = "";

	// Iterate through each key in the object
	for (const key of Object.keys(jsonPart)) {

		// If its just text
		if (key === "text") {
			text += jsonPart.text;
			continue;
		}

		// If theres a class to add
		if (Classes.hasOwnProperty(key)) {
			classlist += " mc-" + Classes[key];
			continue;
		}

		// If theres a color to add
		if (key === "color") {
			classlist += " mc-" + jsonPart[key];
			continue;
		}

		// Default add class
		if (key === "extra") {
			for (const jsonPartExtra of jsonPart.extra) {
				text += renderComponent(jsonPartExtra);
			}
		}

	}

	// Check classlist for exceptions
	classlist = classlist.replace(/dark_acqua/gm, "dark_aqua");

	// Wrap in the appropriate span tags
	return wrap(`span${classlist.trim() !== "" ? ` class="${classlist.trim()}"` : ""}`, text);

}

// Render
export default function render(input: string, delimiter = "§"): string {

	// Parse text to JSON
	let json = parse(input, delimiter);

	// Replace newlines with <BR/> tags
	json = JSON.parse(JSON.stringify(json)
		.split("\\n")
		.join("<br>"));

	// Wrap result with wrapper
	return wrap("span class=\"mc\"", renderComponent(json));

}
