// @ts-check

/**
 * @import { Visitor } from "lightningcss"
 */

/**
 * @return {Visitor<any>}
 */
export function hocus() {
	return {
		Selector(selector) {
			return selector.map((component) => {
				const constituents = /** @type {const} */ (["hover", "focus-visible"]);

				if (
					component.type === "pseudo-class" &&
					component.kind === "custom" &&
					component.name === "hocus"
				) {
					return {
						type: "pseudo-class",
						kind: "is",
						selectors: constituents.map((name) => [
							{
								type: "pseudo-class",
								kind: name,
							},
						]),
					};
				}

				return component;
			});
		},
	};
}
