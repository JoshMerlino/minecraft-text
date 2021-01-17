export default function stripFormats(text, delimiter = "§") {

	// Remove formatting tokens
	return text.replace(new RegExp(`\\${delimiter}([a-f]|[k-o]|[0-9]|r)`, "gm"), "");

}
