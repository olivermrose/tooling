// @ts-check

/**
 * @import { Visitor } from "lightningcss"
 */

/**
 * @return {Visitor<any>}
 */
export function headingPseudo() {
	return {
		Selector(selector) {
			return selector.map((component) => {
				if (
					component.type === "pseudo-class" &&
					component.kind === "custom" &&
					component.name === "heading"
				) {
					return {
						type: "pseudo-class",
						kind: "is",
						selectors: ["h1", "h2", "h3", "h4", "h5", "h6"].map((tag) => [
							{
								type: "type",
								name: tag,
							},
						]),
					};
				}

				return component;
			});
		},
	};
}
