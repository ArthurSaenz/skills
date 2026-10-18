import { type ViteUserConfig } from 'vitest/config';
/** Node-environment tests: services, transforms, schemas — everything without a DOM. */
export declare const defineNodeConfig: (dirname: string, overrides?: ViteUserConfig) => ViteUserConfig;
/**
 * Browser-mode tests without a framework plugin. Use this only for non-React packages
 * (they supply their own plugin via `overrides`); React packages want `defineReactBrowserConfig`.
 */
export declare const defineBrowserConfig: (dirname: string, overrides?: ViteUserConfig) => ViteUserConfig;
/** Browser-mode tests for React packages, rendered through `vitest-browser-react`. */
export declare const defineReactBrowserConfig: (dirname: string, overrides?: ViteUserConfig) => ViteUserConfig;
