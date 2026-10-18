# Skills

My agent skills for Claude Code, Codex and any harness that reads `SKILL.md`.
Small, composable, easy to adapt.

## Install

**Claude Code** (plugin, updates with the repo):

```bash
claude plugin marketplace add ArthurSaenz/skills
claude plugin install arthur-skills@arthursaenz
```

**Local symlinks** (for editing skills in place):

```bash
git clone git@github.com:ArthurSaenz/skills.git ~/projects/skills
cd ~/projects/skills && pnpm install && pnpm link-skills
```

## Docs

```bash
pnpm run docs   # http://localhost:3030
```

## Layout

```
skills/
  engineering/    daily code work          (shipped)
  productivity/   daily non-code workflows (shipped)
  misc/           rarely used
  in-progress/    beta, local only
  deprecated/     retired
apps/             apps, as apps/<group>/<app>
packages/         workspace packages
spec/docs/        one page per shipped skill, served by the docs site
vendor/           docs-ui app and shared configs, copied from starter-workspace
.agents/adr/      decisions
.out-of-scope/    ideas deliberately rejected
.claude-plugin/   plugin + marketplace manifests
```

## Adding a skill

1. Create `skills/<bucket>/<name>/SKILL.md` with `name` and `description` frontmatter.
2. Start it in `in-progress/`; move it to `engineering/` or `productivity/` once it earns its place.
3. For a promoted skill, follow the checklist in [CLAUDE.md](./CLAUDE.md).

## Skills

### Engineering

_None yet._

### Productivity

_None yet._

## Credits

Structure inspired by [mattpocock/skills](https://github.com/mattpocock/skills).

## License

[MIT](./LICENSE)
