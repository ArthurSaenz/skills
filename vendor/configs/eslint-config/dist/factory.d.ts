import type { TypedFlatConfigItem } from '@antfu/eslint-config';
import type { ConfigOptions } from './types.js';
/**
 * Build the shared flat ESLint config as one `antfu(...)` call; each layer is gated by an option.
 *
 * @example
 * export default createConfig({ mode: 'svelte', boundaries: 'error', ignores: ['dist'] })
 */
export declare const createConfig: (userOptions?: ConfigOptions) => Promise<TypedFlatConfigItem[]>;
export default createConfig;
