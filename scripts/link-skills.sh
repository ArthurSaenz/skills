#!/usr/bin/env bash
set -euo pipefail

# Symlinks every skill into the local harness skill dirs, so `git pull` keeps them current.
# deprecated/ and misc/ are skipped; in-progress/ is linked so it can be tried locally.

REPO="$(cd "$(dirname "$0")/.." && pwd)"
DESTS=("$HOME/.claude/skills" "$HOME/.agents/skills")

for DEST in "${DESTS[@]}"; do
  mkdir -p "$DEST"
  while IFS= read -r -d '' skill_md; do
    src="$(dirname "$skill_md")"
    target="$DEST/$(basename "$src")"
    if [ -e "$target" ] && [ ! -L "$target" ]; then
      echo "skip $target: exists and is not a symlink" >&2
      continue
    fi
    ln -sfn "$src" "$target"
    echo "linked $(basename "$src") -> $DEST"
  done < <(find "$REPO/skills" -name SKILL.md -not -path '*/deprecated/*' -not -path '*/misc/*' -print0)
done
