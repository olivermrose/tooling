declare module "@rosehaven/stylelint-config" {
	import { StylelintConfig } from "stylelint-define-config";

	function stylelint(config?: StylelintConfig): StylelintConfig;

	export { stylelint };
}
