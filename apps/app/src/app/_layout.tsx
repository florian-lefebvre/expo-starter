import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { VariableContextProvider } from "nativewind";
import { useTheme } from "@/hooks/use-theme";
import "../styles/global.css";

export default function RootLayout() {
	const { theme, navTheme } = useTheme();
	return (
		<VariableContextProvider value={theme}>
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: navTheme.colors.background,
					},
					headerTitleStyle: {
						color: navTheme.colors.text,
					},
					contentStyle: {
						backgroundColor: theme.muted,
					},
				}}
			/>
			<PortalHost />
		</VariableContextProvider>
	);
}
