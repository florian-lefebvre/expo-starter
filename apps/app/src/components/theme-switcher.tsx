import { Text } from "react-native";
import { Uniwind, useUniwind } from "uniwind";
import { Button, ButtonIcon } from "./ui/button";

export function ThemeSwitcher() {
	const { theme, hasAdaptiveThemes } = useUniwind();

	// TODO: use proper icons
	const themes = [
		{ name: "light", icon: "☀️" },
		{ name: "dark", icon: "🌙" },
		{ name: "system", icon: "⚙️" },
	] as const;
	const activeTheme = hasAdaptiveThemes ? "system" : theme;
	const index = themes.findIndex((e) => e.name === activeTheme);

	return (
		<Button
			variant="outline"
			size="icon"
			onPress={() => Uniwind.setTheme(themes[(index + 1) % themes.length].name)}
		>
			<ButtonIcon as={(_props) => <Text>{themes[index].icon}</Text>} />
		</Button>
	);
}
