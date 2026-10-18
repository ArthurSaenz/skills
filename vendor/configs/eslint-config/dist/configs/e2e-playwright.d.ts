import type { TypedFlatConfigItem } from '@antfu/eslint-config';
/**
 * Rules that keep a green Playwright run trustworthy: no un-awaited assertions, no focused tests, no
 * timing guesses, no assertion-free or conditionally-asserting tests.
 *
 * @example
 * e2ePlaywright() // spread into the antfu(...) call after e2eBoundaries
 */
export declare const e2ePlaywright: () => TypedFlatConfigItem;
