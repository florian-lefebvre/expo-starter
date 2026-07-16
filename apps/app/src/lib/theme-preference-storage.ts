import { STORAGE_ID } from "./storage";

export const THEME_STORAGE_KEY = "theme";

/**
 * Where the preference lands in `localStorage` on web: MMKV's web backend keys
 * every entry as `<id>\<key>`. The pre-paint script in `+html.tsx` runs before
 * the bundle exists, so it has to read that entry itself rather than go through
 * MMKV — this keeps the two from drifting apart.
 */
export const THEME_LOCAL_STORAGE_KEY = `${STORAGE_ID}\\${THEME_STORAGE_KEY}`;
