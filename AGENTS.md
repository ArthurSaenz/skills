# Agent guidance

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
4. documented at `docs/<bucket>/<skill-name>.md`.

Skills in `misc/`, `in-progress/` and `deprecated/` appear only in their bucket `README.md`.

A user-invoked skill sets `disable-model-invocation: true` in its frontmatter. A model-invoked skill
leaves it out and writes a `description` rich enough for the model to know when to reach for it.

Run `claude plugin validate . --strict` after touching anything in `.claude-plugin/`, and
`scripts/link-skills.sh` after adding, renaming or removing a skill.

Decisions go in `.agents/adr/NNNN-title.md`; ideas deliberately rejected go in `.out-of-scope/`.
