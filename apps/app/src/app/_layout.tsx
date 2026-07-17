import {
	focusManager,
	onlineManager,
	QueryClientProvider,
} from "@tanstack/react-query";
import * as Network from "expo-network";
import { Stack } from "expo-router";
import React from "react";
import { AppState, Platform } from "react-native";
import { useCSSVariable } from "uniwind";
import { queryClient } from "@/lib/query";
import { restoreTheme } from "@/lib/theme-preference";
import "../styles/global.css";

restoreTheme();

const useRealCSSVariable: (name: string) => string | undefined =
	Platform.OS === "web"
		? (name) => `var(${name})`
		: (name) => useCSSVariable(name)?.toString();

export default function RootLayout() {
	const background = useRealCSSVariable("--color-background")?.toString();
	const foreground = useRealCSSVariable("--color-foreground")?.toString();
	const muted = useRealCSSVariable("--color-muted")?.toString();

	React.useEffect(() => {
		if (Platform.OS === "web") return;

		onlineManager.setEventListener((setOnline) => {
			let initialised = false;

			const eventSubscription = Network.addNetworkStateListener((state) => {
				initialised = true;
				setOnline(!!state.isConnected);
			});

			Network.getNetworkStateAsync()
				.then((state) => {
					if (!initialised) {
						setOnline(!!state.isConnected);
					}
				})
				.catch(() => {
					// getNetworkStateAsync can reject on some platforms/SDK versions
				});

			return eventSubscription.remove;
		});

		const subscription = AppState.addEventListener("change", (status) => {
			focusManager.setFocused(status === "active");
		});

		return () => subscription.remove();
	}, []);

	// TODO: check how to set the header bottom border color
	return (
		<QueryClientProvider client={queryClient}>
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
		</QueryClientProvider>
	);
}
