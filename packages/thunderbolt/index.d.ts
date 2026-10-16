declare module "@rosehaven/thunderbolt" {
	import type { Visitor } from "lightningcss";

	function headingPseudo(): Visitor;

	export { headingPseudo };
}
