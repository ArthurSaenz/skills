import type { TypedFlatConfigItem } from '@antfu/eslint-config';
import type { Linter } from 'eslint';
/** Base antfu options shared by every mode. Framework flags (react/svelte) are merged in the factory. */
export declare const antfuBaseOptions: {
    lessOpinionated: boolean;
};
/** sonarjs recommended preset. Composed early so later layers can override its rules. */
export declare const sonarjsRecommended: Linter.Config;
/** Project-wide rule overrides, applied after antfu + sonarjs so these win; consumer rules win over these. */
export declare const overrides: TypedFlatConfigItem;
