// @ts-check

/**
 * @import { Visitor, MediaFeatureComparison } from "lightningcss"
 */

/**
 * @typedef {Record<string, number>} Breakpoints
 */

/**
 * @type {Breakpoints}
 */
export const breakpointsTailwind = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	"2xl": 1536,
};

/**
 * @type {Breakpoints}
 */
export const breakpointsBootstrap5 = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1400,
};

/**
 * @param {Breakpoints} [breakpoints]
 * @return {Visitor<any>}
 */
export function mediaQueryBreakpoints(breakpoints = breakpointsTailwind) {
	return {
		MediaQuery(query) {
			/**
			 * @type {MediaFeatureComparison}
			 */
			let operator = "greater-than-equal";
			let mediaType = query.mediaType;

			if (query.mediaType.startsWith("max-")) {
				operator = "less-than";
				mediaType = query.mediaType.replace("max-", "");
			}

			if (!breakpoints[mediaType]) return query;

			return {
				mediaType: "all",
				condition: {
					type: "feature",
					value: {
						type: "range",
						name: "width",
						operator,
						value: {
							type: "length",
							value: {
								type: "value",
								value: {
									value: breakpoints[mediaType],
									unit: "px",
								},
							},
						},
					},
				},
			};
		},
	};
}
