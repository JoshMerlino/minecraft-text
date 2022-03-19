export default function stripFormats(text: string, delimiter = "§"): string {

	// Remove formatting tokens
	return text.replace(new RegExp(`\\${delimiter}([a-f]|[k-o]|[0-9]|r)`, "gm"), "");

}
