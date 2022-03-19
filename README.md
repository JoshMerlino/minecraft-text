# minecraft-text
Parse Minecraft text into many formats including HTML.

## Parse
Parse a string of encoded text to a JSON chat component.
`parse(String: text, String: delimiter = "§")`

```js
import { parse } from "minecraft-text";

const json = parse("&7[&c-&7] &3[&bWARRIOR&3]&b &fJack", "&");
```

```json
{"text":"","extra":[{"text":"[","extra":[{"text":"-","extra":[{"text":"] ","extra":[{"text":"[","extra":[{"text":"WARRIOR","extra":[{"text":"]","extra":[{"text":" ","extra":[{"text":"Jack","extra":[],"color":"white"}],"color":"aqua"}],"color":"dark_aqua"}],"color":"aqua"}],"color":"dark_aqua"}],"color":"gray"}],"color":"red"}],"color":"gray"}]}
```

## Render
Render a string of encoded text to HTML.
`render(String: text, String: delimiter = "§")`

```js
import { render } from "minecraft-text";
import "~minecraft-text/style.css"; // Browser only

const html = render("&7[&c-&7] &3[&bWARRIOR&3]&b &fJack", "&");
```

```html
<span class="mc"><span><span class="mc-gray">[<span class="mc-red">-<span class="mc-gray">] <span class="mc-dark_aqua">[<span class="mc-aqua">WARRIOR<span class="mc-dark_aqua">]<span class="mc-aqua"> <span class="mc-white">Jack</span></span></span></span></span></span></span></span></span></span>
```

## Strip Formats
Removes all formatting codes form a string.
`stripFormats(String: text, String: delimiter = "§")`

```js
import { stripFormats } from "minecraft-text";

const text = stripFormats("&7[&c-&7] &3[&bWARRIOR&3]&b &fJack", "&");
```

```js
"[-] [WARRIOR] Jack"
```
