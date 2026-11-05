declare module "@rosehaven/thunderbolt" {
	import type { Visitor } from "lightningcss";

	export type Breakpoints = Record<string, number>;

	function headingPseudo(): Visitor;
	function hocus(): Visitor;
	function mediaQueryBreakpoints(breakpoints?: Breakpoints): Visitor;

	export const breakpointsTailwind: Breakpoints;
	export const breakpointsBootstrap5: Breakpoints;

	export { headingPseudo, hocus, mediaQueryBreakpoints };
}
