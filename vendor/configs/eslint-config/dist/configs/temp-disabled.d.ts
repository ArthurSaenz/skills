import type { TypedFlatConfigItem } from '@antfu/eslint-config';
import type { ResolvedOptions } from '../types.js';
/**
 * Central mute list, appended LAST so it overrides every layer (definitions stay in their own configs).
 * JSDoc rules mute unconditionally; @wl rules are gated on `components` (the plugin only loads there).
 */
export declare const tempDisabledRules: (o: ResolvedOptions) => TypedFlatConfigItem;
