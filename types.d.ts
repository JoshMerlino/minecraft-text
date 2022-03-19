declare type Color =
	| "black"
	| "dark_blue"
	| "dark_green"
	| "dark_aqua"
	| "dark_red"
	| "dark_purple"
	| "gold"
	| "gray"
	| "dark_gray"
	| "blue"
	| "green"
	| "aqua"
	| "red"
	| "light_purple"
	| "yellow"
	| "white";

declare type Format =
    | "obfuscated"
    | "bold"
    | "strikethrough"
    | "underline"
    | "italic"

declare type JSONText = {
	text: string;
	extra: JSONText[];
	color?: Color;
    obfuscated?: boolean;
    bold?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    italic?: boolean;
};
