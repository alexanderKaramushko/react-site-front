// declaration.d.ts
declare module '*.scss';

declare module '*.svg' {
	type SvgrComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>

	const content: SvgrComponent;
    export default content;
}
