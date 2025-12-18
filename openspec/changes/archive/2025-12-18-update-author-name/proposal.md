# Change: Update Author Name from riccoxie to eyeix

## Why

The project author name has changed from `riccoxie` to `eyeix`. This change requires updating all references to the old author name throughout the codebase, documentation, and Docker image references to reflect the new identity.

## What Changes

- Update `package.json` author, repository, and homepage fields
- Update all GitHub repository references in README files (README.md, README.zh-CN.md)
- Update Docker image references from `riccoxie/meilisearch-ui` to `eyeix/meilisearch-ui`
- Update GitHub links in source code components (InsHeader.tsx)
- Update copyright and attribution links in footer component (Copyright.tsx) - replace domain link with GitHub profile link
- Update LICENSE file copyright notice
- Update demo URL references to use Vercel app address mentioned in GitHub

**Note**: CHANGELOG.md contains historical references that should remain unchanged as they represent the project's history.

## Impact

- **Affected specs**: None (no existing specs in the project)
- **Affected code**: 
  - `package.json` - repository metadata
  - `README.md` - documentation and Docker examples
  - `README.zh-CN.md` - Chinese documentation
  - `LICENSE` - copyright notice
  - `src/components/biz/InsHeader.tsx` - GitHub links
  - `src/components/common/footer/Copyright.tsx` - attribution link (replace domain with GitHub profile)
- **Docker images**: Docker Hub image name will need to be updated (requires separate CI/CD configuration update)
- **Breaking changes**: None - this is a branding/attribution update only
