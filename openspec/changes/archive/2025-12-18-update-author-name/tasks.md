## 1. Update Package Metadata
- [x] 1.1 Update `package.json` repository field from `riccox/meilisearch-ui` to `eyeix/meilisearch-ui`
- [x] 1.2 Update `package.json` homepage field from `riccox/meilisearch-ui` to `eyeix/meilisearch-ui`
- [x] 1.3 Update `package.json` author field to reflect new author information

## 2. Update Documentation Files
- [x] 2.1 Update all GitHub repository references in `README.md` (riccox → eyeix)
- [x] 2.2 Update Docker image references in `README.md` (riccoxie/meilisearch-ui → eyeix/meilisearch-ui)
- [x] 2.3 Update demo URL in `README.md` to use Vercel app address mentioned in GitHub (replace `meilisearch-ui.riccox.com` with the correct Vercel app URL, e.g., `https://meilisearch-ui.vercel.app` or the actual deployment URL)
- [x] 2.4 Update all GitHub repository references in `README.zh-CN.md` (riccox → eyeix)
- [x] 2.5 Update Docker image references in `README.zh-CN.md` (riccoxie/meilisearch-ui → eyeix/meilisearch-ui)
- [x] 2.6 Update demo URL in `README.zh-CN.md` to use Vercel app address mentioned in GitHub (replace `meilisearch-ui.riccox.com` with the correct Vercel app URL, e.g., `https://meilisearch-ui.vercel.app` or the actual deployment URL)

## 3. Update Source Code
- [x] 3.1 Update GitHub links in `src/components/biz/InsHeader.tsx` (riccox → eyeix)
- [x] 3.2 Update attribution link in `src/components/common/footer/Copyright.tsx` (riccox.com → https://github.com/eyeix)
- [x] 3.3 Update author name in `src/components/common/footer/Copyright.tsx` (Ricco Xie → eyeix)
- [x] 3.4 Update GitHub link in `src/components/common/footer/index.tsx` (riccox → eyeix)

## 4. Update Legal Files
- [x] 4.1 Update copyright notice in `LICENSE` file
- [x] 4.2 Update contact email in `CODE_OF_CONDUCT.md` (report@riccox.com → GitHub Issues)

## 5. Update CI/CD Configuration
- [x] 5.1 Update Docker image name in `.github/workflows/docker-build-release.yaml`
- [x] 5.2 Update Docker image name in `.github/workflows/docker-build-release-lite.yaml`
- [x] 5.3 Update Docker image name in `.github/workflows/docker-build-test.yaml`
- [x] 5.4 Update Docker image name in `.github/workflows/docker-build-test-lite.yaml`

## 6. Validation
- [x] 6.1 Verify all `riccox` references have been updated (except CHANGELOG.md)
- [x] 6.2 Verify all `riccoxie` references have been updated
- [x] 6.3 Run `grep -r "riccox" .` to ensure no missed references (excluding CHANGELOG.md and .git)
- [x] 6.4 Run `grep -r "riccoxie" .` to ensure no missed references (excluding .git)
- [x] 6.5 Verify Docker image references are consistent across all documentation and CI/CD workflows
