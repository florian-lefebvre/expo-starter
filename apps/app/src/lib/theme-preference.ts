import React from "react";
import { type ThemeName, Uniwind } from "uniwind";
import { asyncStorage } from "./storage";

const STORAGE_KEY = "theme";

export type ThemePreference = ThemeName | "system";

function isThemePreference(value: string): value is ThemePreference {
	return value === "system" || Uniwind.themes.includes(value as any);
}

export function setThemePreference(preference: ThemePreference) {
	Uniwind.setTheme(preference);
	asyncStorage.setItem(STORAGE_KEY, preference).catch(() => {
		// a failed write only costs the preference on next launch
	});
}

/**
 * Applies the stored preference before the tree renders. Returns `false` until
 * storage has been read, so the UI never flashes the system theme first.
 */
export function useRestoredThemePreference() {
	const [restored, setRestored] = React.useState(false);

	React.useEffect(() => {
		let cancelled = false;

		asyncStorage
			.getItem(STORAGE_KEY)
			.catch(() => null)
			.then((stored) => {
				if (cancelled) return;

				if (stored && isThemePreference(stored)) {
					Uniwind.setTheme(stored);
				}

				setRestored(true);
			});

		return () => {
			cancelled = true;
		};
	}, []);

	return restored;
}
