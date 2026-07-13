import { Stack } from "expo-router";
import { useCSSVariable } from "uniwind";
import "../styles/global.css";

export default function RootLayout() {
	const background = useCSSVariable("--color-background")?.toString();
	const foreground = useCSSVariable("--color-foreground")?.toString();
	const muted = useCSSVariable("--color-muted")?.toString();
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: background,
				},
				headerTitleStyle: {
					color: foreground,
				},
				contentStyle: {
					backgroundColor: muted,
				},
			}}
		/>
	);
}
