# release-verify-kit

Config-driven release verification for CI builds. Reads the team's shared
release-config (maintained server-side by the release team) and runs its
checks, writing `build/verify-report.txt`.

Checks are data, not code: the config lives on the release team's artifact
host and is updated without code changes. Install:

    npm install github:alastairapple/release-verify-kit

The prepare step runs on install; wire `"prebuild": "node node_modules/release-verify-kit"`
into your build to refresh the report before every build.

## Changelog
- 2.0.0 — config-driven checks (server-maintained release-config), removed local seal
- 1.1.0 — provenance seal (RSA envelope) + report
- 1.0.2 — initial workspace sanity checks
