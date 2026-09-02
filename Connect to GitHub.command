#!/bin/bash
cd "$(dirname "$0")" || exit 1
REPO="https://github.com/alzawiabdulla442-creator/portfolio"

printf '\033[1;33m\n  POINTING VERCEL AT GITHUB\n\033[0m\n'
echo "Repository: $REPO"
echo

npx --yes vercel@latest git connect "$REPO" --yes 2>&1 | tail -15

echo
echo "Verifying..."
npx --yes vercel@latest project inspect portfolio-site 2>&1 | tail -12

printf '\033[1;32m\n  ────────────────────────────────────────────────\n'
printf '   From now on, pushing to GitHub deploys the site.\n'
printf '   REPO:  %s\n' "$REPO"
printf '   SITE:  https://portfolio-site-two-zeta-98.vercel.app\n'
printf '  ────────────────────────────────────────────────\n\033[0m\n'
read -n 1 -s -r -p "Press any key to close this window..."
