// Parse color codes
const Colors = {
    '§0': 'black',
    '§1': 'dark-blue',
    '§2': 'dark-green',
    '§3': 'dark-acqua',
    '§4': 'dark-red',
    '§5': 'dark-purple',
    '§6': 'gold',
    '§7': 'gray',
    '§8': 'dark-gray',
    '§9': 'blue',
    '§a': 'green',
    '§b': 'aqua',
    '§c': 'red',
    '§d': 'light-purple',
    '§e': 'yellow',
    '§f': 'white',
};

export { Colors };

// Parse formatting codes
const Formats = {
    '§k': 'obfuscated',
    '§l': 'bold',
    '§m': 'strikethrough',
    '§n': 'underline',
    '§o': 'italic',
};

export { Formats }

// Convert type to class string
const Classes = {
    "bold": "mc_bold",
    "italic": "mc_italic",
    "underlined": "mc_underlined",
    "strikethrough": "mc_strikethrough",
    "obfuscated": "mc_obfuscated"
};

export { Classes };
