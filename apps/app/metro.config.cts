// Learn more https://docs.expo.io/guides/customizing-metro
import { getDefaultConfig, type MetroConfig } from "expo/metro-config";
import { withUniwindConfig } from "uniwind/metro";

const config: MetroConfig = getDefaultConfig(__dirname);

export default withUniwindConfig(config as any, {
	cssEntryFile: "./src/styles/global.css",
});
