#!/bin/bash
cd "$(dirname "$0")" || exit 1
V="npx --yes vercel@latest"

printf '\033[1;33m\n  FINALISING — claiming a clean URL, then redeploying\n\033[0m\n'

deploy() {
  $V --prod --yes --archive=tgz 2>&1 | tee ./deploy-log.txt
  grep -oE 'https://[a-zA-Z0-9._-]+\.vercel\.app' ./deploy-log.txt \
    | grep -v 'two-zeta' | tail -1
}

DEP=$(deploy)
echo "Deployment: $DEP"
[ -z "$DEP" ] && { echo "Deploy failed."; read -n 1 -s -r -p "Press any key..."; exit 1; }

CHOSEN=""
for CAND in abdullah-alzawi.vercel.app alzawi.vercel.app abdullahalzawi.vercel.app abdullah-alzawi-portfolio.vercel.app; do
  echo "Trying $CAND ..."
  if $V alias set "$DEP" "$CAND" 2>&1 | tee ./alias-log.txt | grep -q 'Success'; then
    CHOSEN="$CAND"; echo "Got $CHOSEN"; break
  fi
done
[ -z "$CHOSEN" ] && CHOSEN="portfolio-site-two-zeta-98.vercel.app"
echo "$CHOSEN" > ./LIVE-URL.txt

# point canonical URLs, sitemap, robots and OG at the real domain
for F in app/layout.tsx app/sitemap.ts app/robots.ts; do
  sed -i '' "s|https://abdullah-alzawi.vercel.app|https://$CHOSEN|g" "$F"
done

echo
echo "Redeploying with the final domain baked in..."
DEP2=$(deploy)
[ -n "$DEP2" ] && $V alias set "$DEP2" "$CHOSEN" 2>&1 | tail -2

printf '\033[1;32m\n  ────────────────────────────────────────\n   LIVE AT: https://%s\n  ────────────────────────────────────────\n\033[0m\n' "$CHOSEN"
read -n 1 -s -r -p "Press any key to close this window..."
