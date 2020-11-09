export default function serialize(text, delimiter = "§") {

	// Replace delimiter character with a § (default delimiter for minecraft)
	return text.replace(new RegExp(`\\${delimiter}([a-f]|[k-l]|[0-9])`, "gm"), "§$1");

}
