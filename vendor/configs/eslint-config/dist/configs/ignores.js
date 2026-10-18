import { GLOB_BUILTIN_IGNORES } from '../globs.js';
// Built-in ignores first, then consumer globs.
export const ignores = (userIgnores = []) => ({
    ignores: [...GLOB_BUILTIN_IGNORES, ...userIgnores],
});
