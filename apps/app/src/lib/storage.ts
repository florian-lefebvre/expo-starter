import { createMMKV } from "react-native-mmkv";

export const STORAGE_ID = "main";

export const storage = createMMKV({ id: STORAGE_ID });
