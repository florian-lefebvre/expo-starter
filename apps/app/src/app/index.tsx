import { View } from "react-native";
import { Button, buttonTextVariants } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

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
