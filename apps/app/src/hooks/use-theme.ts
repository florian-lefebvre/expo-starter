import { useColorScheme } from "react-native";
import { NAV_THEME, THEME } from "@/lib/theme";

export function useTheme() {
	const colorScheme = useColorScheme();
	const themeKey = (
		{ light: "light", dark: "dark", unspecified: "light" } as const
	)[colorScheme];

	return {
		theme: THEME[themeKey],
		navTheme: NAV_THEME[themeKey],
	};
}
