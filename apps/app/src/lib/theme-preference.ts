import { type ThemeName, Uniwind } from "uniwind";
import { storage } from "./storage";
import { THEME_STORAGE_KEY } from "./theme-preference-storage";

export type ThemePreference = ThemeName | "system";

function isThemePreference(value: string): value is ThemePreference {
	return value === "system" || Uniwind.themes.includes(value as any);
}

function readStoredPreference() {
	try {
		return storage.getString(THEME_STORAGE_KEY);
	} catch {
		// MMKV's web backend throws while pre-rendering, where there is no
		// storage to read. The `+html.tsx` script covers that first paint.
		return undefined;
	}
}

export function setThemePreference(preference: ThemePreference) {
	Uniwind.setTheme(preference);
	storage.set(THEME_STORAGE_KEY, preference);
}

// Applied while this module is evaluated rather than from an effect, so the
// preference is in place before the tree first renders. On web this also has to
// beat `uniwind`, which puts the *system* theme class on `<html>` as soon as it
// is imported and would otherwise undo the class `+html.tsx` just set.
const stored = readStoredPreference();

if (stored && isThemePreference(stored)) {
	Uniwind.setTheme(stored);
}
