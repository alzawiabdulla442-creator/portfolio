#!/bin/bash
# Double-click this file to publish any changes you've made to the site.
cd "$(dirname "$0")" || exit 1
printf '\033[1;33m\n  PUBLISHING YOUR PORTFOLIO\n\033[0m\n'
npx --yes vercel@latest --prod --yes --archive=tgz 2>&1 | tail -30
printf '\033[1;32m\n  Done — your site is live at:\n  https://portfolio-site-two-zeta-98.vercel.app\n\033[0m\n'
read -n 1 -s -r -p "Press any key to close this window..."
