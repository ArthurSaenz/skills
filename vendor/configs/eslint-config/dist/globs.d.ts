/** Every lintable source extension (boundaries layer scope). */
export declare const GLOB_SRC_ALL = "**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}";
/** TS sources (JSDoc layer scope). */
export declare const GLOB_TS = "**/*.{ts,tsx}";
export declare const GLOB_MD = "**/*.md";
export declare const GLOB_SVELTE = "**/*.svelte";
/** Files exempt from the JSDoc layer (tests, stories, declarations). */
export declare const GLOB_TS_DOC_EXCLUDE: string[];
/** Always-ignored paths; user ignores are appended after these. */
export declare const GLOB_BUILTIN_IGNORES: string[];
