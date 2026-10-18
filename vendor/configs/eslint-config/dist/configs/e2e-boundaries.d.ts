import type { TypedFlatConfigItem } from '@antfu/eslint-config';
export declare const isE2eSourceFile: (filePath: string) => boolean;
/**
 * Import direction for e2e packages, replacing the app-code classification (features / services /
 * shared) they do not have:
 *
 *   tests/<domain> | visual/<domain> | setup → fixtures → pages → components → mocks → lib → config
 *
 * A domain folder is private — its files import each other relatively and never reach a sibling
 * domain; anything two domains share moves down into a shared layer.
 *
 * @example
 * e2eBoundaries('warn') // advisory; `eslint --quiet` hides warnings entirely
 */
export declare const e2eBoundaries: (severity?: "warn" | "error") => TypedFlatConfigItem;
