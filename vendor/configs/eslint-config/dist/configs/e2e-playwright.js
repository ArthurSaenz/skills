import playwright from 'eslint-plugin-playwright';
import { isE2eSourceFile } from './e2e-boundaries.js';
// `test.fixme('…', async () => {})` placeholders never run green, so they are tracked debt rather than
// hollow passing tests; expect-expect would otherwise flag every one of them.
const PENDING_MODIFIERS = new Set(['fixme', 'skip']);
const isPendingTestCallee = (node) => {
    const callee = node;
    return (callee.type === 'MemberExpression' &&
        callee.property?.type === 'Identifier' &&
        PENDING_MODIFIERS.has(callee.property.name ?? ''));
};
const ignorePendingTests = (rule) => ({
    ...rule,
    create: (context) => {
        const report = (descriptor) => {
            if ('node' in descriptor && isPendingTestCallee(descriptor.node)) {
                return;
            }
            context.report(descriptor);
        };
        return rule.create(Object.create(context, { report: { value: report } }));
    },
});
const rules = playwright.rules;
const plugin = {
    ...playwright,
    rules: { ...rules, 'expect-expect': ignorePendingTests(rules['expect-expect']) },
};
/**
 * Rules that keep a green Playwright run trustworthy: no un-awaited assertions, no focused tests, no
 * timing guesses, no assertion-free or conditionally-asserting tests.
 *
 * @example
 * e2ePlaywright() // spread into the antfu(...) call after e2eBoundaries
 */
export const e2ePlaywright = () => ({
    name: 'wl/e2e-playwright',
    // Same package-level scope as e2eBoundaries.
    files: [isE2eSourceFile],
    plugins: { playwright: plugin },
    rules: {
        'playwright/missing-playwright-await': 'error',
        'playwright/no-focused-test': 'error',
        'playwright/no-wait-for-timeout': 'error',
        'playwright/no-force-option': 'error',
        'playwright/no-conditional-expect': 'error',
        'playwright/no-networkidle': 'error',
        // Suites assert through page-object helpers (`expectOk`, `assertCardVisible`, `page.expectX`).
        'playwright/expect-expect': ['error', { assertFunctionPatterns: ['(^|\\.)(expect|assert|verify)[A-Z]\\w*$'] }],
    },
});
