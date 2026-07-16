import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";
import { THEME_LOCAL_STORAGE_KEY } from "@/lib/theme-preference-storage";

// Runs before the browser paints, so a stored preference that disagrees with the
// system theme never flashes. Uniwind resolves themes from a class on <html> and
// falls back to `prefers-color-scheme` when there is none — which is exactly what
// the "system" preference wants, so only a concrete theme gets a class.
const themeScript = `
(function () {
	let theme = localStorage.getItem(${JSON.stringify(THEME_LOCAL_STORAGE_KEY)});
	if (!theme || theme === "system") {
		const mediaMatcher = window.matchMedia("(prefers-color-scheme: light)");
		theme = mediaMatcher.matches ? "light" : "dark";
	}
	
	document.documentElement.classList.add(theme);
})();
`;

export default function Root({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<ScrollViewStyleReset />
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
			</head>
			<body>{children}</body>
		</html>
	);
}
