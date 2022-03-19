// Parse color codes
export const Colors: Record<string, Color> = {
	"§0": "black",
	"§1": "dark_blue",
	"§2": "dark_green",
	"§3": "dark_aqua",
	"§4": "dark_red",
	"§5": "dark_purple",
	"§6": "gold",
	"§7": "gray",
	"§8": "dark_gray",
	"§9": "blue",
	"§a": "green",
	"§b": "aqua",
	"§c": "red",
	"§d": "light_purple",
	"§e": "yellow",
	"§f": "white"
};

// Parse formatting codes
export const Formats: Record<string, Format> = {
	"§k": "obfuscated",
	"§l": "bold",
	"§m": "strikethrough",
	"§n": "underline",
	"§o": "italic"
};

// Convert type to class string
export const Classes: Record<string, string> = {
	"bold": "bold",
	"italic": "italic",
	"underlined": "underlined",
	"strikethrough": "strikethrough",
	"obfuscated": "obfuscated"
};

// Map characters to their widths
export const CharSizes = {
	THIN: "!i|,.".split(""),
	MID: "Ilt'".split(""),
	WIDE: "\"#$%&()*+-/0123456789<=>?@aAbBcCdDeEfFgGhHjJkKLmMnNoOpPqQrRsSTuUvVwWxXyYzZ{}~".split("")
};
