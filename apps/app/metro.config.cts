// Learn more https://docs.expo.io/guides/customizing-metro
import { getDefaultConfig, type MetroConfig } from "expo/metro-config";
import { withNativewind } from "nativewind/metro";

const config: MetroConfig = getDefaultConfig(__dirname);

export default withNativewind(config as any, {});
