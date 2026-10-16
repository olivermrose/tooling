// @ts-check

import { mediaQueryBreakpoints } from "../src/index.js";
import { transform } from "lightningcss";
import { test } from "node:test";

test("media query breakpoints", (t) => {
	const result = transform({
		filename: "test.css",
		minify: true,
		code: Buffer.from("@media sm { body { color: red; } }"),
		visitor: mediaQueryBreakpoints(),
	});

	t.assert.equal(result.code.toString(), "@media (width>=640px){body{color:red}}");
});
