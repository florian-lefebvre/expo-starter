import { Text, View } from "react-native";

export default function Index() {
	return (
		<View className="flex-1 items-center justify-center">
			<Button size="default">
				<Text className={buttonTextVariants({ size: "default" })}>
					Hello world!
				</Text>
			</Button>
		</View>
	);
}
