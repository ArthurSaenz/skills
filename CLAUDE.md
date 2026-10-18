# CLAUDE.md

Skills live in bucket folders under `skills/`, one folder per skill with a `SKILL.md` inside:

- `engineering/`: daily code work
- `productivity/`: daily non-code workflows
- `misc/`: rarely used, not promoted
- `in-progress/`: beta, not shipped in the plugin
- `deprecated/`: no longer used

`engineering/` and `productivity/` are the **promoted** buckets. Every skill in them must be:

1. listed in the top-level `README.md`, linked to its `SKILL.md`;
2. listed in its bucket `README.md` under **User-invoked** or **Model-invoked**;
3. in the `skills` array of `.claude-plugin/plugin.json`;
4. documented at `spec/docs/<bucket>/<skill-name>.md` (served at `/docs/<bucket>/<skill-name>`).

Skills in `misc/`, `in-progress/` and `deprecated/` appear only in their bucket `README.md`.

A user-invoked skill sets `disable-model-invocation: true` in its frontmatter. A model-invoked skill
leaves it out and writes a `description` rich enough for the model to know when to reach for it.

Decisions go in `.agents/adr/NNNN-title.md`; ideas deliberately rejected go in `.out-of-scope/`.

## Workspace

A pnpm + Turbo monorepo. Workspace packages live in `apps/<group>/<app>`, `packages/<name>` and
`vendor/`. Any `docs/` folder inside an app or package is picked up by the docs site.

## Commands

- `pnpm run docs`: docs site on http://localhost:3030. Use `pnpm run`, since pnpm's built-in
  `pnpm docs` shadows the script.
- `pnpm docs-build`: static docs build.
- `pnpm qa`: ts-check, test, eslint and prettier across the workspace.
- `pnpm plugin-check`: run after touching `.claude-plugin/`.
- `pnpm link-skills`: run after adding, renaming or removing a skill.

## vendor/

`vendor/packages/docs-ui` and `vendor/configs/{eslint,prettier,vitest}-config` are copied from
`starter-workspace`. This repo is not an `ik vendor sync` target, so refresh them by hand. The one
local change is in `docs-ui/source.config.ts`, which drops the `!` ignore globs. The root
`pnpm-workspace.yaml` pins the TanStack versions and patches nitro's missing `pathe` dependency.
