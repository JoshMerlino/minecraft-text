export default function serialize(text, delimiter = "§") {

	// Replace delimiter character with a § (default delimiter for minecraft)
	return text.replace(new RegExp(`\\${delimiter}([a-f]|[k-o]|[0-9]|r)`, "gm"), "§$1");

}
