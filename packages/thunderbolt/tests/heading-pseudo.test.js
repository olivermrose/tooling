// @ts-check

import { headingPseudo } from "../src/index.js";
import { transform } from "lightningcss";
import { test } from "node:test";

test("heading pseudo", (t) => {
	const result = transform({
		filename: "test.css",
		minify: true,
		code: Buffer.from(":heading { color: red; }"),
		visitor: headingPseudo(),
	});

	t.assert.equal(result.code.toString(), ":is(h1,h2,h3,h4,h5,h6){color:red}");
});
