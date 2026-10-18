import { svelteConfig } from './svelte.js';
/** Framework registry — the single seam for adding a mode. The factory looks up by `mode`, falling back to `react`. */
export const frameworks = {
    react: { antfuFlags: { react: true }, extraConfigs: [] },
    svelte: { antfuFlags: { svelte: true }, extraConfigs: [svelteConfig] },
};
