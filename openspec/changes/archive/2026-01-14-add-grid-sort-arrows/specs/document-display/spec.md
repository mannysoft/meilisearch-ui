## ADDED Requirements

### Requirement: Table View Sort Arrow Indicators
The table view SHALL display sort arrow indicators for sortable attributes instead of the "ST" tag, clearly indicating which columns are sortable and which column is currently being sorted.

#### Scenario: Display dimmed sort arrows for sortable columns
- **WHEN** a document field is a sortable attribute in the table view
- **THEN** the table view SHALL display up/down sort arrows next to the field name in the column header
- **AND** the arrows SHALL be visually dimmed (reduced opacity) to indicate they are sortable but not currently active
- **AND** the arrows SHALL replace the "ST" tag that was previously displayed

#### Scenario: Highlight active sort arrow
- **WHEN** a sortable column is currently being sorted in ascending order
- **THEN** the up arrow SHALL be highlighted (full opacity, possibly different color) to indicate active sort
- **AND** the down arrow SHALL remain dimmed
- **WHEN** a sortable column is currently being sorted in descending order
- **THEN** the down arrow SHALL be highlighted (full opacity, possibly different color) to indicate active sort
- **AND** the up arrow SHALL remain dimmed

#### Scenario: No sort arrows for non-sortable columns
- **WHEN** a document field is not a sortable attribute
- **THEN** the table view SHALL NOT display sort arrows for that field
- **AND** other attribute indicators (FL, SC) SHALL continue to display as before

#### Scenario: Sort arrows update with sort state
- **WHEN** the user changes the sort order or sorts a different column
- **THEN** the sort arrows SHALL update to reflect the new sort state
- **AND** the previously active arrow SHALL become dimmed
- **AND** the newly active arrow SHALL become highlighted

#### Scenario: Grid view unchanged
- **WHEN** the document list is displayed in grid view
- **THEN** the grid view behavior SHALL remain unchanged
- **AND** sort arrows SHALL NOT be displayed in grid view
- **AND** the grid view behavior SHALL remain unchanged from the current implementation
