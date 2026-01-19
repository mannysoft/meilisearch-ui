## ADDED Requirements

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
