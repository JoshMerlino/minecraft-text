export default function reserialize(text, delimiter = "§") {

	// Replace delimiter character with a § (default delimiter for minecraft)
	return text.replace(new RegExp(`\\${delimiter}(\\w)`, "gm"), "§$1");
	
}
