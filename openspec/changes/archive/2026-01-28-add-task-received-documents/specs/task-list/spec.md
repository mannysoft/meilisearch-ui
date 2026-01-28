## ADDED Requirements

### Requirement: Received Documents Column
The task list table SHALL display a "Received Documents" column showing the number of documents received for each task.

#### Scenario: Display received documents count
- **WHEN** the task list is displayed
- **AND** a task has `details.receivedDocuments` value available
- **THEN** the "Received Documents" column SHALL display the numeric count of received documents

#### Scenario: Display placeholder for unavailable data
- **WHEN** the task list is displayed
- **AND** a task does not have `details.receivedDocuments` value (e.g., index creation, settings update tasks)
- **THEN** the "Received Documents" column SHALL display "-" as a placeholder

#### Scenario: Column positioning
- **WHEN** the task list is displayed
- **THEN** the "Received Documents" column SHALL be positioned after the "Types" column
- **AND** the column SHALL have a width of 100px to accommodate numeric values

#### Scenario: Column header internationalization
- **WHEN** the task list is displayed
- **THEN** the "Received Documents" column header SHALL be displayed in the user's selected language
- **AND** the header SHALL support both English ("Received Documents") and Chinese ("接收文档数") translations
