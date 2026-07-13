import { Stack } from "expo-router";
import { View } from "react-native";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button, ButtonText } from "@/components/ui/button";

export default function Index() {
	return (
		<View className="flex-1 items-center justify-center">
			<Stack.Screen
				options={{
					headerTitle: "Home",
					headerRight: () => <ThemeSwitcher />,
				}}
			/>
			<Button size="default">
				<ButtonText onPress={() => console.log("test")}>
					Hello world!
				</ButtonText>
			</Button>
		</View>
	);
}
