## MODIFIED Requirements

### Requirement: Task List Column Layout
The task list table SHALL display all columns with appropriate widths that ensure content readability across common screen sizes, including moderately wide screens (1300px and wider).

#### Scenario: Indexes column width
- **WHEN** the task list is displayed on a screen width of approximately 1300px or wider
- **THEN** the "Indexes" column SHALL have a minimum width that prevents excessive compression
- **AND** the column SHALL display index names fully without truncation when space allows
- **AND** the column width SHALL be sufficient to read index UIDs comfortably

#### Scenario: Types column width
- **WHEN** the task list is displayed on a screen width of approximately 1300px or wider
- **THEN** the "Types" column SHALL have a minimum width that prevents excessive compression
- **AND** the column SHALL display task type labels fully without truncation when space allows
- **AND** the column width SHALL be sufficient to read localized task type names comfortably

#### Scenario: Column layout stability
- **WHEN** the task list is displayed on various screen widths (1300px, 1450px, and wider)
- **THEN** all columns SHALL maintain appropriate proportions
- **AND** the "Indexes" and "Types" columns SHALL NOT be compressed to unreadable widths
- **AND** the table layout SHALL remain stable and usable across the supported screen size range

## ADDED Requirements

### Requirement: Task Total Display
The task list page SHALL display the total count of tasks matching the current filter criteria.

#### Scenario: Total count display
- **WHEN** the task list page is loaded
- **THEN** the total count of tasks matching current filters SHALL be displayed
- **AND** the total SHALL be positioned between the filter section and the task table
- **AND** the total SHALL be extracted from the `total` field in the Meilisearch API response

#### Scenario: Total count updates with filters
- **WHEN** filters are applied or changed on the task list page
- **THEN** the displayed total count SHALL update to reflect the number of tasks matching the new filter criteria
- **AND** the total SHALL be recalculated from the API response

#### Scenario: Total count internationalization
- **WHEN** the task list page is displayed
- **THEN** the total count label SHALL be displayed in the user's selected language
- **AND** the label SHALL support both English and Chinese translations
