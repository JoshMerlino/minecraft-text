// Parse color codes
const Colors = {
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
    "§f": "white",
};

export { Colors };

// Parse formatting codes
const Formats = {
    "§k": "obfuscated",
    "§l": "bold",
    "§m": "strikethrough",
    "§n": "underline",
    "§o": "italic",
};

export { Formats }

// Convert type to class string
const Classes = {
    "bold": "bold",
    "italic": "italic",
    "underlined": "underlined",
    "strikethrough": "strikethrough",
    "obfuscated": "obfuscated"
};

export { Classes };

// Map characters to their widths
const CharWidths = {
	THIN: "!i|,.".split(""),
	MID: "Ilt\'".split(""),
	WIDE: "\"#$%&()*+-/0123456789<=>?@aAbBcCdDeEfFgGhHjJkKLmMnNoOpPqQrRsSTuUvVwWxXyYzZ{}~".split("")
}

export { CharWidths };
