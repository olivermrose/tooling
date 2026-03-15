// @ts-check

/**
 * @import { StylelintConfig } from "stylelint-define-config"
 */

import { defineConfig } from "stylelint-define-config";

/**
 * @param {StylelintConfig} config
 */
export function stylelint(config = {}) {
	const { rules, extends: extendConfigs = [], ...cfg } = config;

	return defineConfig({
		extends: [
			"stylelint-config-standard",
			"stylelint-config-html",
			"stylelint-config-recess-order",
			...extendConfigs,
		],
		defaultSeverity: "warning",
		rules: {
			"alpha-value-notation": "percentage",
			"font-family-name-quotes": "always-unless-keyword",
			"font-weight-notation": "numeric",
			"rule-empty-line-before": [
				"always",
				{
					except: ["first-nested"],
					ignore: ["after-comment"],
				},
			],
			"max-nesting-depth": 3,
			...rules,
		},
		...cfg,
	});
}
