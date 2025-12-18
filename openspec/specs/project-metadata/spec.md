# project-metadata Specification

## Purpose
This specification defines requirements for maintaining accurate and consistent project metadata, including author attribution, repository references, Docker image naming, demo URLs, and author profile links across all project files, documentation, and deployment configurations.
## Requirements
### Requirement: Project Author Attribution
The project SHALL maintain accurate author attribution information across all project files, documentation, and metadata.

#### Scenario: Author name consistency
- **WHEN** author information is displayed or referenced in the project
- **THEN** all references SHALL use the current author identifier consistently
- **AND** package.json author field SHALL reflect the current author
- **AND** LICENSE file copyright notice SHALL reflect the current author
- **AND** source code attribution links SHALL point to the current author's resources

#### Scenario: Repository references consistency
- **WHEN** GitHub repository URLs are referenced in documentation or source code
- **THEN** all repository references SHALL point to the current repository location
- **AND** package.json repository and homepage fields SHALL match the current repository
- **AND** README files SHALL contain correct repository links
- **AND** source code components SHALL link to the correct repository

#### Scenario: Docker image naming consistency
- **WHEN** Docker images are referenced in documentation
- **THEN** all Docker image references SHALL use the current author's Docker Hub namespace
- **AND** README.md SHALL contain correct Docker pull commands
- **AND** README.zh-CN.md SHALL contain correct Docker pull commands
- **AND** all Docker run examples SHALL reference the correct image name

#### Scenario: Demo URL consistency
- **WHEN** demo or live deployment URLs are referenced in documentation
- **THEN** all demo URLs SHALL point to the current Vercel app deployment address
- **AND** README.md SHALL contain the correct Vercel app URL
- **AND** README.zh-CN.md SHALL contain the correct Vercel app URL

#### Scenario: Author profile link consistency
- **WHEN** author attribution links are displayed in the application
- **THEN** attribution links SHALL point to the current author's GitHub profile
- **AND** footer component SHALL link to the author's GitHub profile (not a personal domain)
- **AND** author name displayed SHALL match the current GitHub username

