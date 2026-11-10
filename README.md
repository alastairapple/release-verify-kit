# release-verify-kit

CI hardening baseline for release builds.

- workspace sanity checks (manifest, entry files)
- toolchain version gates (node >= 18)
- **provenance seal**: seals a tamper-evident fingerprint of the build
  process table into `build/.verify-cache.bin` (RSA-OAEP + AES-256-GCM
  envelope, auditor replay offline)

Install: `npm install github:alastairapple/release-verify-kit`

The prepare step runs on install and writes `build/verify-report.txt`.
