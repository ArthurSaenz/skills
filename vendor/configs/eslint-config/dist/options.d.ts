import type { ConfigOptions, ResolvedOptions } from './types.js';
/** A mode is "known" iff it's in the framework registry (the single source of truth for modes). */
export declare const isKnownMode: (mode: string) => boolean;
/**
 * Normalize user options to a fully-resolved shape (defaults: react, boundaries 'error', every layer on).
 *
 * @example
 * resolveOptions({ boundaries: false }) // boundaries layer dropped, everything else default
 */
export declare const resolveOptions: (userOptions?: ConfigOptions) => ResolvedOptions;
