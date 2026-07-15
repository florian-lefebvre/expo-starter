import { useMutation } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { View } from "react-native";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button, ButtonText } from "@/components/ui/button";
import { orpc } from "@/lib/orpc";

export default function Index() {
	const mutation = useMutation(orpc.greet.mutationOptions());

	return (
		<View className="flex-1 items-center justify-center">
			<Stack.Screen
				options={{
					headerTitle: "Home",
					headerRight: () => <ThemeSwitcher />,
				}}
			/>
			<Button size="default">
				<ButtonText onPress={() => mutation.mutate({ name: "User" })}>
					{mutation.data?.text ?? "Greet"}
				</ButtonText>
			</Button>
		</View>
	);
}
