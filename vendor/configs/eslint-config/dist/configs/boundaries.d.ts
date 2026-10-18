import type { TypedFlatConfigItem } from '@antfu/eslint-config';
/**
 * Relationship-aware import boundaries: sibling feature/service imports are type-only; shared is the
 * runtime exception (value-import via its barrel only). Severity is parameterized (default 'error').
 *
 * Keep this default in step with `resolveOptions` in options.ts — the factory always passes an
 * explicit severity, so a disagreement here would only surface for direct callers.
 *
 * @example
 * boundaries('warn') // advisory; note `eslint --quiet` hides warnings entirely
 */
export declare const boundaries: (severity?: "warn" | "error") => TypedFlatConfigItem;
