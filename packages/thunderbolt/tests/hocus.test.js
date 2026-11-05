// @ts-check

import { hocus } from "../src/index.js";
import { transform } from "lightningcss";
import { test } from "node:test";

test("hocus", (t) => {
	const result = transform({
		filename: "test.css",
		minify: true,
		code: Buffer.from("a:hocus { color: red; }"),
		visitor: hocus(),
	});

	t.assert.equal(result.code.toString(), "a:is(:hover,:focus-visible){color:red}");
});
